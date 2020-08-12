const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartSlotsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const speakOutput = `You wagered ${wager} coins on slots.`;

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt(speakOutput + 'What do you want to play next?')
          .getResponse()
      );

}

module.exports = StartSlotsIntent;