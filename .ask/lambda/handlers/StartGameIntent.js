const helper = require("../helper.js");
const chatsino = require("../chatsino");

function StartGameIntent(handlerInput) {
  const wager = helper.getSpokenWords(handlerInput, "wager");
  const gameName = helper.getResolvedWords(handlerInput, "game");
  const positionName = helper.getResolvedWords(handlerInput, "position");

  if (chatsino.cashier.isValidWager(wager))

  const speakOutput = "Hello World!";
  return (
    handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse()
  );
}

module.exports = StartGameIntent;
