const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartRouletteIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `STARTROULETTE`);
    const wager = helper.getSpokenWords(handlerInput, "wager");
    const position = helper.getResolvedWords(handlerInput, "rouletteposition");

    const result = await chatsino.roulette.wager(sessionAttributes.user, parseInt(wager), position[0].value.id);
    //TODO: Catch the situations in which they didn't manage to match one of our slot values.
    //const speakOutput = `You wagered ${wager} coins on ${position[0].value.name} in roulette.`;

    let speakOutput = ``;

    switch(result.status) {
        case "ACTIVE_GAME":
            const positionObject = eval(`chatsino.roulette.position.${result.position}`);
            speakOutput += `You wagered ${result.wager} coins on ${positionObject.symbol}. What would you like to do next? You can place another bet, or you can say spin the wheel when you're ready. `;
        break;
        case "COMPLETED":

        break;
        case "INVALID_POSITION":
            handlerInput.responseBuilder.addElicitSlotDirective("position");
            speakOutput += `The position you indicated is invalid. The valid positions you can bet on are double zero, any of the numbers zero through thirty-six, and also red, black, even, odd, top, bottom, high, middle, low, column 1, column 2, and column 3. Please try your roulette wager again.`;
        break;
        case "INVALID_WAGER":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager is invalid. Your current available balance is ${result.user.fields.AvailableBalance} coins. You can bet any amount up to your balance. How much would you like to wager? `;
        break;
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = StartRouletteIntent;