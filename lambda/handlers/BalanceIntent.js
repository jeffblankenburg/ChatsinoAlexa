const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function BalanceIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const speakOutput = `Your current balance is not currently in my programming.`;

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt(speakOutput + 'What do you want to play next?')
          .getResponse()
      );

}

module.exports = BalanceIntent;