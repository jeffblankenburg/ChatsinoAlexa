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

    const positionName = eval(`chatsino.craps.position.${result.position}`);

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

module.exports = StartCrapsIntent;