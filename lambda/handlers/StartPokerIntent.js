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
            if (result.outcome) speakOutput += "You already have a winning hand! ";
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}`;
        break;
        case "COMPLETED":

        break;
        case "BEFORE_DRAW":
            if (result.outcome) speakOutput += "You already have a winning hand! ";
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}`;
        break;
        case "INVALID_WAGER":

        break;
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' Which cards do you want to hold?')
          .reprompt(speakOutput + 'Which cards do you want to hold?')
          .getResponse()
      );

}

module.exports = StartPokerIntent;