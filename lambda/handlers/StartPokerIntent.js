const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartPokerIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const result = chatsino.poker.play(sessionAttributes.user, parseInt(wager));
    console.log(`RESULT ${result}`);

    const speakOutput = `You wagered ${wager} coins on poker.`;

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt(speakOutput + 'What do you want to play next?')
          .getResponse()
      );

}

module.exports = StartPokerIntent;