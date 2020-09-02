const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartPokerIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const result = await chatsino.poker.play(sessionAttributes.user, parseInt(wager));
    console.log(`RESULT ${JSON.stringify(result)}`);

    let speakOutput = ``;

    switch(result.status) {
        case "ACTIVE_GAME":
            speakOutput += `You already have an active game of video poker waiting for you. You wagered ${result.wager} coins. `
            if (result.outcome) speakOutput += `You already have a ${result.outcome.symbol}! `;
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}.  Which cards do you want to hold?`;
        break;
        case "COMPLETED":

        break;
        case "BEFORE_DRAW":
            if (result.outcome) speakOutput += `You already have a ${result.outcome.symbol}! `;
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}.  Which cards do you want to hold?`;
        break;
        case "INVALID_WAGER":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager is invalid. Your current available balance is ${result.user.fields.AvailableBalance} coins. You can bet any amount up to your balance. How much would you like to bet on poker?`;
        break;
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = StartPokerIntent;