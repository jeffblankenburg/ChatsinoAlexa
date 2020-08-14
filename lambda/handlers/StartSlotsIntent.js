const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartSlotsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const result = await chatsino.slots.play(sessionAttributes.user, parseInt(wager));
    console.log(`RESULT ${JSON.stringify(result)}`);
    //TODO: Use sound effects for revealing the slot reel results?
    let speakOutput = ``;

    switch(result.status) {
        case "COMPLETED":
            if (result.outcome) speakOutput += `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_positive_01"/>You got ${helper.getSlotSpeech(result.result)}. You won ${result.outcome.odds * wager} coins.`;
            else speakOutput += `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_negative_01"/>You got ${helper.getSlotSpeech(result.result)}. That is not a winning spin.  You lost ${wager} coins.`;
        break;
        case "INSUFFICIENT_FUNDS":

        break;
        case "INVALID_WAGER":
            speakOutput += `Your wager is invalid.  Your current available balance is ${result.user.fields.AvailableBalance} coins.`;
        break;
    }

    if (result.status === "COMPLETED") {

    }
    



    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt('What do you want to play next?')
          .getResponse()
      );

}

module.exports = StartSlotsIntent;