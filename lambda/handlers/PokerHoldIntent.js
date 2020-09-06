const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function PokerHoldIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const action = helper.getResolvedWords(handlerInput, "holdType");
    const cardSuit = helper.getResolvedWords(handlerInput, "cardSuit");
    const cardValue = helper.getResolvedWords(handlerInput, "cardValue");

    const result = await chatsino.poker.hold(sessionAttributes.user, action, cardSuit, cardValue);
    
    let speakOutput = `This is the poker hold intent.`;

    let holdSpeech = `You are not currently holding any cards. `;
    const heldCardSpeech = helper.getCardSpeech(result.game.fields.OpeningHand.filter(card => card.held === true))
    if (heldCardSpeech.length > 0) holdSpeech = `You are currently holding the ${heldCardSpeech}. `;

    let dropSpeech = "";
    const droppedCardSpeech = helper.getCardSpeech(result.game.fields.OpeningHand.filter(card => card.held === false));
    if (droppedCardSpeech.length > 0) dropSpeech = `You are about to drop the ${droppedCardSpeech}`;


    switch(result.status) {
        case "CARD_HOLD_UPDATED":
            speakOutput = `${holdSpeech} ${dropSpeech} You can say deal to finish this hand, or you can continue holding cards.  What would you like to do?`;
        break;
        case "NO_ACTIVE_GAME":
            speakOutput = "You tried to hold some cards in poker, but you don't currently have a game of poker in play.  To start a game, say something like bet five on poker. "
        break;
    }
    
    return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt('What do you want to do next?')
          .getResponse();

}

module.exports = PokerHoldIntent;