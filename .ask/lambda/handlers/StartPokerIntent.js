const Alexa = require('ask-sdk-core');
const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartPokerIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `STARTPOKER`);
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const result = await chatsino.poker.play(sessionAttributes.user, parseInt(wager));
    //console.log(`RESULT ${JSON.stringify(result)}`);
    //console.log(`RESULT.OUTCOME ${JSON.stringify(result.outcome)}`);
    let speakOutput = ``;

    switch(result.status) {
        case "ACTIVE_GAME":
            speakOutput += `Oops! You already have an active game of video poker waiting for you. You wagered ${result.wager} coins. `
            if (result.outcome) speakOutput += `You already have a ${result.outcome.name}! `;
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}.  Which cards do you want to hold?`;
        break;
        case "BEFORE_DRAW":
            speakOutput += "<audio src='https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/5_card_deal.mp3' />";
            if (result.outcome !== undefined) speakOutput += `<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/video_poker_winning_hand.mp3" />You already have a ${result.outcome.name}! `;
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}.  Which cards do you want to hold?`;
        break;
        case "ABOVE_MAXIMUM_LIMIT":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was above your maximum bet of ${result.maximum}. Your balance is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins, so you can make bets between <say-as interpret-as="cardinal">${result.minimum}</say-as> and <say-as interpret-as="cardinal">${result.maximum}</say-as>. How many coins would you like to bet on video poker?`;
        break;
        case "BELOW_MINIMUM_LIMIT":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was below your minimum bet of ${result.minimum}. Your balance is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins, so you can make bets between <say-as interpret-as="cardinal">${result.minimum}</say-as> and <say-as interpret-as="cardinal">${result.maximum}</say-as>. How many coins would you like to bet on video poker?`;
        break;
        case "BET_ABOVE_AVAILABLE_BALANCE":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was higher than your current balance, which is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins. You can bet any amount up to your available balance. How many coins would you like to bet on video poker?`;
        break;
    }

    if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces["Alexa.Presentation.APL"]) {//(Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
        console.log("SHOULD WRITE APL.");
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
                            "value": `${result.result[0].value.id}`,
                            "isHeld": result.result[0].held
                        },
                        {
                            "suit": `${result.result[1].suit.name.toLowerCase()}`,
                            "value": `${result.result[1].value.id}`,
                            "isHeld": result.result[1].held
                        },
                        {
                            "suit": `${result.result[2].suit.name.toLowerCase()}`,
                            "value": `${result.result[2].value.id}`,
                            "isHeld": result.result[2].held
                        },
                        {
                            "suit": `${result.result[3].suit.name.toLowerCase()}`,
                            "value": `${result.result[3].value.id}`,
                            "isHeld": result.result[3].held
                        },
                        {
                            "suit": `${result.result[4].suit.name.toLowerCase()}`,
                            "value": `${result.result[4].value.id}`,
                            "isHeld": result.result[4].held
                        }
                    ]  
                }
            }
        });
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = StartPokerIntent;