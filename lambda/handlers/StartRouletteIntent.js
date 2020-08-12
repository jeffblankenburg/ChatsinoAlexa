const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartRouletteIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const wager = helper.getSpokenWords(handlerInput, "wager");
    const position = helper.getResolvedWords(handlerInput, "position");
    //TODO: Catch the situations in which they didn't manage to match one of our slot values.
    const speakOutput = `You wagered ${wager} coins on ${position[0].value.name} in roulette.`;

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt(speakOutput + 'What do you want to play next?')
          .getResponse()
      );

}

module.exports = StartRouletteIntent;