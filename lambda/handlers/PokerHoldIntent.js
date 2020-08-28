const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function PokerHoldIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const action = helper.getResolvedWords(handlerInput, "holdType");
    const cardSuit = helper.getResolvedWords(handlerInput, "cardSuit");
    const cardValue = helper.getResolvedWords(handlerInput, "cardValue");

    const result = chatsino.poker.hold(sessionAttributes.user, action, cardSuit, cardValue);

    //const result = await chatsino.slots.play(sessionAttributes.user, parseInt(wager));
    console.log(`RESULT ${JSON.stringify(result)}`);
    //TODO: Use sound effects for revealing the slot reel results?
    let speakOutput = `This is the poker hold intent.`;

    switch(result.status) {
        case "COMPLETED":
            if (result.outcome) speakOutput += `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_positive_01"/>You got ${helper.getSlotSpeech(result.result)}. You won ${result.outcome.odds * wager} coins.`;
            else speakOutput += `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_negative_01"/>You got ${helper.getSlotSpeech(result.result)}. That is not a winning spin.  You lost ${wager} coins.`;
        break;
        case "NO_ACTIVE_GAME":
            speakOutput = "You tried to hold some cards in poker, but you don't currently have a game of poker in play.  To start a game, say something like bet five on poker. "
        break;
    }
    
    return handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt('What do you want to play next?')
          .getResponse();

}

module.exports = PokerHoldIntent;