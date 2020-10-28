const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function PokerHoldIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `POKERHOLD`);
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

    if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces["Alexa.Presentation.APL"]) {//(Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
        const pokerAPL = require("../APL/poker.json");
        //const pokerData = require("");
        //pokerAPL.mainTemplate.items[0].item.item.items[1].items[0].suit = 
        handlerInput.responseBuilder.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            document: pokerAPL,
            datasources: {
                "pokerData": 
                {
                    "cards": [
                        {
                            "suit": `${result.result[0].suit.name.toLowerCase()}`,
                            "value": `${result.result[0].value.symbol}`,
                            "isHeld": result.result[0].held
                        },
                        {
                            "suit": `${result.result[1].suit.name.toLowerCase()}`,
                            "value": `${result.result[1].value.symbol}`,
                            "isHeld": result.result[1].held
                        },
                        {
                            "suit": `${result.result[2].suit.name.toLowerCase()}`,
                            "value": `${result.result[2].value.symbol}`,
                            "isHeld": result.result[2].held
                        },
                        {
                            "suit": `${result.result[3].suit.name.toLowerCase()}`,
                            "value": `${result.result[3].value.symbol}`,
                            "isHeld": result.result[3].held
                        },
                        {
                            "suit": `${result.result[4].suit.name.toLowerCase()}`,
                            "value": `${result.result[4].value.symbol}`,
                            "isHeld": result.result[4].held
                        }
                    ]  
                }
            }
        });
    }
    
    return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt('What do you want to do next?')
          .getResponse();

}

module.exports = PokerHoldIntent;