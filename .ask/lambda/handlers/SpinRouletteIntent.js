const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function SpinRouletteIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `SPINROULETTE`);

    const result = await chatsino.roulette.play(sessionAttributes.user);
    console.log(`RESULT ${JSON.stringify(result)}`);
    let returnSpeech = "";
    //TODO: THIS SOUND EFFECT IS WAY TOO LONG.  FIND SOMETHING BETTER.
    let speakOutput = `<audio src='https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/roulette_spin.mp3' />The wheel landed on ${result.spinResult}. `;

    if (result.outcome.length === 0) speakOutput += "You didn't have any coins on the table.  You didn't win anything, but you also didn't lose anything, right? ";
    else {
        for (let i = 0;i<result.outcome.length;i++) {
            const positionObject = eval(`chatsino.roulette.position.${result.outcome[i].fields.Position}`);
            speakOutput += `You bet ${result.outcome[i].fields.Amount} on ${positionObject.name} `; 
            if (result.outcome[i].fields.Payout > 0){
                speakOutput += `and won ${result.outcome[i].fields.Payout} coins! `;
                returnSpeech = "I've returned all of your coins from the table. ";
            } 
            else speakOutput += `and lost. `;
        }
    }

    
    if (result.payout > 0) {
        speakOutput += `You won a total of ${result.payout} coins, `;
    }
    else speakOutput += `You lost a total of ${Math.abs(result.payout)} coins, `;

    speakOutput += `which brings your total to ${result.user.fields.AvailableBalance}. ${returnSpeech} What would you like to do now?`;


    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = SpinRouletteIntent;