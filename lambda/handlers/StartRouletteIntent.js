const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartRouletteIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `STARTROULETTE`);
    const wager = helper.getSpokenWords(handlerInput, "wager");
    const position = helper.getResolvedWords(handlerInput, "rouletteposition");

    let result = {};
    if (position) result = await chatsino.roulette.wager(sessionAttributes.user, parseInt(wager), position[0].value.id);
    else result.status = "INVALID_POSITION";
    //TODO: Catch the situations in which they didn't manage to match one of our slot values.
    //const speakOutput = `You wagered ${wager} coins on ${position[0].value.name} in roulette.`;

    const positionName = eval(`chatsino.roulette.position.${result.position}`);
    let speakOutput = ``;

    switch(result.status) {
        case "ACTIVE_GAME":
            const positionObject = eval(`chatsino.roulette.position.${result.position}`);
            speakOutput += `You wagered ${result.wager} coins on ${positionObject.symbol}. What would you like to do next? You can place another bet, or you can say spin the wheel when you're ready. `;
        break;
        case "INVALID_POSITION":
            handlerInput.responseBuilder.addElicitSlotDirective("rouletteposition");
            speakOutput += `The position you indicated is invalid. ${await chatsino.cashier.getPositionList("roulette")} Where do you want to place your ${wager} coins?.`;
        break;
        case "ABOVE_MAXIMUM_LIMIT":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was above your maximum bet of ${result.maximum}. Your balance is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins, so you can make bets between <say-as interpret-as="cardinal">${result.minimum}</say-as> and <say-as interpret-as="cardinal">${result.maximum}</say-as>. How many coins would you like to bet on ${positionName.name}?`;
        break;
        case "BELOW_MINIMUM_LIMIT":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was below your minimum bet of ${result.minimum}. Your balance is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins, so you can make bets between <say-as interpret-as="cardinal">${result.minimum}</say-as> and <say-as interpret-as="cardinal">${result.maximum}</say-as>. How many coins would you like to bet on ${positionName.name}?`;
        break;
        case "BET_ABOVE_AVAILABLE_BALANCE":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was higher than your current balance, which is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins. You can bet any amount up to your available balance. How many coins would you like to bet on ${positionName.name}?`;
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