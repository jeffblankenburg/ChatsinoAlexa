const data = require("../data");
const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function StartSlotsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `STARTSLOTS`);
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
                speakOutput += `<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/slot_machine_win.mp3" /> ${yay} You got ${helper.getSlotSpeech(result.result)}. You won <say-as interpret-as="cardinal">${result.outcome.odds * wager}</say-as> coins.`;
            }
            else {
                const darn = await data.getRandomSpeech("DARN", "en-US");
                speakOutput += `${darn} You got ${helper.getSlotSpeech(result.result)}. That is not a winning spin.  You lost <say-as interpret-as="cardinal">${wager}</say-as> coins. `;
            }
            result.achievements.forEach(a => speakOutput += `<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_01"/><amazon:emotion name="excited" intensity="high">You got an achievement! ${a.fields.Description} You get ${a.fields.Bonus} bonus coins! </amazon:emotion>`);

            speakOutput += "What do you want to play next?";
        break;
        case "ABOVE_MAXIMUM_LIMIT":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was above your maximum bet of ${result.maximum}. Your balance is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins, so you can make bets between <say-as interpret-as="cardinal">${result.minimum}</say-as> and <say-as interpret-as="cardinal">${result.maximum}</say-as>. How many coins would you like to bet on slots?`;
        break;
        case "BELOW_MINIMUM_LIMIT":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was below your minimum bet of ${result.minimum}. Your balance is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins, so you can make bets between <say-as interpret-as="cardinal">${result.minimum}</say-as> and <say-as interpret-as="cardinal">${result.maximum}</say-as>. How many coins would you like to bet on slots?`;
        break;
        case "BET_ABOVE_AVAILABLE_BALANCE":
            handlerInput.responseBuilder.addElicitSlotDirective("wager");
            speakOutput += `Your wager was higher than your current balance, which is <say-as interpret-as="cardinal">${result.user.fields.AvailableBalance}</say-as> coins. You can bet any amount up to your available balance. How much would you like to bet on slots?`;
        break;
    }
    
    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = StartSlotsIntent;