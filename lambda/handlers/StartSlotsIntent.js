const data = require("../data");
const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartSlotsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const wager = helper.getSpokenWords(handlerInput, "wager");

    const result = await chatsino.slots.play(sessionAttributes.user, parseInt(wager));
    console.log(`RESULT ${JSON.stringify(result)}`);
    let speakOutput = ``;

    switch(result.status) {
        case "COMPLETED":
            //<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_positive_01"/>
            //<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_tally_negative_01"/>
            speakOutput += `${helper.getSlotAudio(result.result)}`;
            if (result.outcome) {
                const yay = await data.getRandomSpeech("YAY", "en-US");
                speakOutput += `<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/slot_machine_win.mp3" /> ${yay} You got ${helper.getSlotSpeech(result.result)}. You won ${result.outcome.odds * wager} coins.`;
            }
            else {
                const darn = await data.getRandomSpeech("DARN", "en-US");
                speakOutput += `${darn} You got ${helper.getSlotSpeech(result.result)}. That is not a winning spin.  You lost ${wager} coins.`;
            }
        break;
        case "INSUFFICIENT_FUNDS":

        break;
        case "INVALID_WAGER":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager is invalid. Your current available balance is ${result.user.fields.AvailableBalance} coins. You can bet any amount up to your balance. How much would you like to bet on slots?`;
        break;
    }
    
    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt('What do you want to play next?')
          .getResponse()
      );

}

module.exports = StartSlotsIntent;