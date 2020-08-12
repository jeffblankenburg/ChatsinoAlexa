const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartGameIntent(handlerInput) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  const wager = helper.getSpokenWords(handlerInput, "wager");
  let spokenGameName = helper.getSpokenWords(handlerInput, "game");
  const resolvedGameName = helper.getResolvedWords(handlerInput, "game");
  const positionName = helper.getResolvedWords(handlerInput, "position");

  const user = sessionAttributes.user;

  let speakOutput = "";
  let repromptOutput = "";

  if (resolvedGameName) {
    const game = {fields: {GameType: resolvedGameName[0].value.name}};
    switch(game.fields.GameType.toString()) {
      case "poker":

        //IF THE USER HAD AN ACTIVE GAME, CLOSE IT.
        //IF THE USER IS STARTING A NEW POKER HAND, TELL THEM WHAT THE POKER HAND IS.
        //IF THE USER HAS ALREADY INDICATED WHICH CARDS THEY WANT TO HOLD, TELL THEM THE OUTCOME.

        const pokerOutcome = await chatsino.poker.play(user, wager, game, positionName);
        if (pokerOutcome.outcome) {
          repromptOutput = `You won ${wager * pokerOutcome.outcome.odds} coins in poker with a ${pokerOutcome.outcome.name}. Your new balance is ${pokerOutcome.balance} coins. `;
          speakOutput = `${repromptOutput} Your cards were the ${helper.getCardSpeech(pokerOutcome.hand)}. `
        }
        else {
          repromptOutput = `You lost ${wager} coins in poker. Your new balance is ${pokerOutcome.balance} coins. `;
          speakOutput = `${repromptOutput} Your cards were the ${helper.getCardSpeech(pokerOutcome.hand)}. `
        }
      break;
      case "slots":
        const slotsOutcome = await chatsino.slots.play(user, wager, game, positionName);
        console.log(`RESULTS ${JSON.stringify(slotsOutcome)}`);
        if (slotsOutcome.outcome) {
          repromptOutput = `You won ${wager * slotsOutcome.outcome.odds} coins in slots with ${slotsOutcome.outcome.name}. Your new balance is ${slotsOutcome.balance} coins. `;
          speakOutput = `${repromptOutput} Your spin was ${helper.getSlotSpeech(slotsOutcome.spinResult)}. `
        }
        else {
          repromptOutput = `You lost ${wager} coins in slots. Your new balance is ${slotsOutcome.balance} coins. `;
          speakOutput = `${repromptOutput} Your spin was ${helper.getSlotSpeech(slotsOutcome.spinResult)}. `
        }
      break;
      default:
        speakOutput = `I haven't implemented ${game.fields.GameType} yet.`;
      break;
    }
  }
  else {
    //TODO: SOMETIMES THE GAME NAME WILL END UP IN THE POSITION SLOT.  WE SHOULD PROBABLY MENTION BOTH.
    speakOutput = `I don't know what ${spokenGameName} is but it's not one of the casino games I can play.  Please try something like poker, roulette, or slots.`;
  }

  //const speakOutput = "Hello World!";
  return (
    handlerInput.responseBuilder
      .speak(speakOutput + ' What do you want to play next?')
      .reprompt(repromptOutput + 'What do you want to play next?')
      .getResponse()
  );
}

module.exports = StartGameIntent;
