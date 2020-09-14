const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function RollCrapsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `ROLLCRAPS`);

    const result = await chatsino.craps.play(sessionAttributes.user);
    console.log(`RESULT ${JSON.stringify(result)}`);
    let returnSpeech = "";

    let speakOutput = `<audio src='https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/roulette_spin.mp3' />You rolled ${result.die1 + result.die2}.  It was a ${result.die1} and a ${result.die2}. `;

    if (result.outcome.length === 0) speakOutput += "You didn't have any coins on the table.  You didn't win anything, but you also didn't lose anything, right? ";
    else {
        for (let i = 0;i<result.outcome.length;i++) {
            console.log(`RESULT OUTCOME [i] ${JSON.stringify(result.outcome[i])}`)
            const positionObject = eval(`chatsino.craps.position.${result.outcome[i].fields.Position}`);
            if (result.outcome[i].fields.Outcome === "WIN") {
                speakOutput += `You bet ${result.outcome[i].fields.Amount} on ${positionObject.name} `; 
                //TODO: THIS DOESN'T WORK!  NEED TO SAVE THE VALUE TO RESULT.
                speakOutput += `and won ${result.outcome[i].fields.Result} coins! `;
            } 
            else if (result.outcome[i].fields.Outcome === "LOSE") {
                speakOutput += `You bet ${result.outcome[i].fields.Amount} on ${positionObject.name} `; 
                speakOutput += `and lost. `;
            }
        }
    }

    
    if (result.payout > 0) {
        speakOutput += `You won a total of ${result.payout} coins, `;
    }
    else speakOutput += `You lost a total of ${Math.abs(result.payout)} coins, `;

    speakOutput += `which brings your total to ${result.user.fields.AvailableBalance}. What would you like to do now?`;


    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = RollCrapsIntent;