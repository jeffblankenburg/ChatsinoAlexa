const helper = require("../helper");
const chatsino = require("../chatsino");
const PokerDealIntent = require("./PokerDealIntent");
const APL = require("../APL");

async function UserEvent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `USEREVENT`);

    const arguments = handlerInput.requestEnvelope.request.arguments;
    console.log({arguments});

    let speakOutput = "Hello.";
    let result;

    const suit = [{value: {name: arguments[1]}}];
    const value = [{value: {id: arguments[2]}}];

    switch(arguments[0]) {
        case "PokerHold":
            let hold = [{value: {name: "hold"}}];
            result = await chatsino.poker.hold(sessionAttributes.user, hold, suit, value);
        break;
        case "PokerDrop":
            let drop = [{value: {name: "discard"}}];
            result = await chatsino.poker.hold(sessionAttributes.user, drop, suit, value);
        break;
        case "PokerDeal":
            return await PokerDealIntent(handlerInput);
        break;
    }

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

    if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces["Alexa.Presentation.APL"]) {//(Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
        const directive = APL.poker(sessionAttributes.user, result);
        handlerInput.responseBuilder.addDirective(directive);
    }

    
    const actionQuery = "What now?";


    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = UserEvent;