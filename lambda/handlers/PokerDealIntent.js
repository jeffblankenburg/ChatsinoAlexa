const helper = require("../helper.js");
const data = require("../data");
const chatsino = require("../chatsino");

async function PokerDealIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `POKERDEAL`);
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
                speakOutput += `<amazon:emotion name="excited" intensity="high">You won ${result.winnings} coins with a ${result.outcome.symbol} `;
                const pokerPosition = chatsino.poker.position;
                switch(result.outcome) {
                    case pokerPosition.ROYALFLUSH: speakOutput += `in ${result.evaluation.suit}! ` ; break;
                    case pokerPosition.STRAIGHTFLUSH: speakOutput += `in ${result.evaluation} to the ${result.evaluation.highcard}! ` ;
                    case pokerPosition.FOUROFAKIND: speakOutput += `of ${result.evaluation.fourofakind}'s! ` ; break;
                    case pokerPosition.FULLHOUSE: speakOutput += `${result.evaluation.highcard}'s over ${result.evaluation.lowcard}! `; break;
                    case pokerPosition.FLUSH: speakOutput += `in ${result.evaluation.suit} with a high card ${result.evaluation.highcard}! `; break;
                    case pokerPosition.STRAIGHT: speakOutput += `to the ${result.evaluation.highcard}! `; break;
                    case pokerPosition.THREEOFAKIND: speakOutput += `of ${result.evaluation.threeofakind}'s! `; break;
                    case pokerPosition.TWOPAIR: speakOutput += `of ${result.evaluation.highcard}'s and ${result.evaluation.lowcard}'s! `;break;
                    case pokerPosition.PAIR: speakOutput += `of ${result.evaluation.pair}'s! `; break;
                }
                speakOutput += "</amazon:emotion> ";
            }
            else {
                speakOutput += await data.getRandomSpeech("DARN", "en-US");
                speakOutput += `You didn't win. You lost ${Math.abs(result.winnings)} coins. `;
            }
            speakOutput += `Your new balance is ${result.user.fields.AvailableBalance}. Your final hand was ${helper.getCardSpeech(result.game.fields.ClosingHand)}. `;
        break;
        case "NO_ACTIVE_GAME":
            speakOutput = "You don't currently have an active game of video poker.  To start a new game, say something like bet five on poker. ";
        break;
    }
    if (result.achievements.length > 0) {
        speakOutput += '<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_01"/>';
        if (result.achievements.length === 1) speakOutput += `<amazon:emotion name="excited" intensity="high">You got an achievement!</amazon:emotion> `;
        else speakOutput += `<amazon:emotion name="excited" intensity="high">You got ${result.achievements.length} achievements!</amazon:emotion> `;
        speakOutput += `<amazon:emotion name="excited" intensity="medium">`;
        result.achievements.forEach(a => speakOutput += `${a.fields.Description} You get ${a.fields.Bonus} bonus coins! `);
        speakOutput += `</amazon:emotion>`;
    }
    
    return handlerInput.responseBuilder
        .speak(speakOutput + 'What do you want to do next?')
        .reprompt('What do you want to do next?')
        .getResponse();

}

module.exports = PokerDealIntent;