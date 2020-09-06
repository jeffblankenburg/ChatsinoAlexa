const helper = require("../helper.js");
const data = require("../data");
const chatsino = require("../chatsino");

async function PokerDealIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const result = await chatsino.poker.deal(sessionAttributes.user);
    let speakOutput = ``;

    switch(result.status) {
        case "COMPLETED":
            const openingHand = JSON.parse(result.game.fields.OpeningHand);
            const heldCards = openingHand.filter(card => card.held === true);
            console.log(`HELD CARD COUNT ${heldCards.length}`);
            if (heldCards.length != 5) speakOutput += `<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/${5-heldCards.length}_card_deal.mp3" />`;
            if (result.outcome) {
                speakOutput += '<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/video_poker_winning_hand.mp3" />';
                speakOutput += await data.getRandomSpeech("YAY", "en-US");
                speakOutput += `You won ${result.winnings} coins with a ${result.outcome.symbol}! `;
            }
            else {
                speakOutput += await data.getRandomSpeech("DARN", "en-US");
                speakOutput += `You didn't win. You lost ${Math.abs(result.winnings)} coins. `;
            }
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