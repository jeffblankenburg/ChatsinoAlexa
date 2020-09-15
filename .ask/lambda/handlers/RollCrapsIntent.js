const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function RollCrapsIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `ROLLCRAPS`);

    const result = await chatsino.craps.play(sessionAttributes.user);
    console.log(`RESULT ${JSON.stringify(result)}`);
    let returnSpeech = "";

    let speakOutput = `<audio src='https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/dice_roll_1.mp3' />You rolled ${result.die1 + result.die2}.  It was a ${result.die1} and a ${result.die2}. `;

    if (result.outcome.length === 0) speakOutput += "You didn't have any coins on the table.  You didn't win anything, but you also didn't lose anything, right? ";
    else {
        for (let i = 0;i<result.outcome.length;i++) {
            console.log(`RESULT OUTCOME [i] ${JSON.stringify(result.outcome[i])}`)
            const positionObject = eval(`chatsino.craps.position.${result.outcome[i].fields.Position}`);
            console.log({positionObject});
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

    let pointSpeech = "";
    if (result.game.fields.Point > 0) pointSpeech = `The point is currently ${result.game.fields.Point}. `;
    else pointSpeech = "The point is currently off. ";

    
    if (result.payout > 0) {
        speakOutput += `You won a total of ${result.payout} coins, `;
    }
    else if (result.payout < 0) {
        speakOutput += `You lost a total of ${Math.abs(result.payout)} coins, `;
    }
    else speakOutput += `You pushed on this roll.  No wins, no losses. `

    speakOutput += `which brings your total to ${result.user.fields.AvailableBalance}. ${pointSpeech} What would you like to do now?`;


    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = RollCrapsIntent;