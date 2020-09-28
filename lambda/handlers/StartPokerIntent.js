const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartPokerIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `STARTPOKER`);
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const result = await chatsino.poker.play(sessionAttributes.user, parseInt(wager));
    console.log(`RESULT ${JSON.stringify(result)}`);

    let speakOutput = ``;

    switch(result.status) {
        case "ACTIVE_GAME":
            speakOutput += `You already have an active game of video poker waiting for you. You wagered ${result.wager} coins. `
            if (result.outcome) speakOutput += `You already have a ${result.outcome.symbol}! `;
            speakOutput += `You were dealt ${helper.getCardSpeech(result.result)}.  Which cards do you want to hold?`;
        break;
        case "BEFORE_DRAW":
            speakOutput += "<audio src='https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/5_card_deal.mp3' />";
            if (result.outcome) speakOutput += `<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/video_poker_winning_hand.mp3" />You already have a ${result.outcome.symbol}! `;
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

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = StartPokerIntent;