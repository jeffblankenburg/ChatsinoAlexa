const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function PokerDealIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const result = await chatsino.poker.deal(sessionAttributes.user);
    let speakOutput = ``;

    switch(result.status) {
        case "COMPLETED":
            //TODO: SOUND EFFECTS FOR DRAWING CARDS AND WINNING OR LOSING  SPEECHCONS?
            if (result.outcome) speakOutput += `You won ${result.winnings} coins with a ${result.outcome.symbol}! `;
            else speakOutput += `Awww. You didn't win. You lost ${Math.abs(result.winnings)} coins. `;
            speakOutput += `Your new balance is ${result.user.fields.AvailableBalance}. Your final hand was ${helper.getCardSpeech(result.game.fields.ClosingHand)}. `;
        break;
        case "NO_ACTIVE_GAME":
            speakOutput = "You don't currently have an active game of video poker.  To start a new game, say something like bet five on poker.";
        break;
    }
    
    return handlerInput.responseBuilder
          .speak(speakOutput + 'What do you want to do next?')
          .reprompt('What do you want to do next?')
          .getResponse();

}

module.exports = PokerDealIntent;