const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartCrapsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `STARTCRAPS`);
    const wager = helper.getSpokenWords(handlerInput, "wager");
    const position = helper.getResolvedWords(handlerInput, "crapsposition");
    //TODO: IF THEY DON'T MATCH SOMETHING, THIS SHOULDN'T BREAK, IT SHOULD SAY INVALID WAGER.

    const result = await chatsino.craps.wager(sessionAttributes.user, parseInt(wager), position[0].value.id);

    let speakOutput = ``;

    switch(result.status) {
        case "ACTIVE_GAME":
            speakOutput += `You wagered ${result.wager} coins on ${result.position.name}. What would you like to do next? You can place another bet, or you can say, roll the dice, when you're ready. `;
        break;
        case "COMPLETED":

        break;
        case "INVALID_POSITION":
            handlerInput.responseBuilder.addElicitSlotDirective("crapsposition");
            speakOutput += `The position you indicated isn't valid.  For a list of valid positions, you can say something like, where can I bet. Where do you want to place your ${wager} coins? .`;
        break;
        case "INVALID_WAGER":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager is invalid. Your current available balance is ${result.user.fields.AvailableBalance} coins. You can bet any amount up to your balance. How much did you want to wager on ${position[0].value.name}? `;
        break;
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = StartCrapsIntent;