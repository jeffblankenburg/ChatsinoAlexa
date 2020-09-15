const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function BetSummaryIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `BETSUMMARY`);
    const result = await chatsino.data.getWagersByUser(sessionAttributes.user);
    let speakOutput = `You currently have ${sessionAttributes.user.fields.CurrentWagers} coins in play. `;

    let oldGameType = "";
    if (result.length > 0) {
        for (let i = 0;i<result.length;i++) {
            switch(result[i].fields.GameType.toString()) {
                case "Video Poker":
                    speakOutput += `You have ${result[i].fields.Amount} coins bet on ${result[i].fields.GameType}. `;
                break;
                case "Roulette":
                    if (oldGameType != "Roulette") speakOutput += "In roulette, you have "
                    if ((oldGameType === "Roulette") && result[i+1] && (result[i+1].fields.GameType != "Roulette")) speakOutput += "Finally, you have "
                    speakOutput += `${result[i].fields.Amount} coins bet on ${result[i].fields.Position}. `;
                    
                break;
            }
            oldGameType = result[i].fields.GameType.toString();
        }
    }
    else speakOutput = "You don't currently have any coins wagered on any games. "
    
    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt('What do you want to play next?')
          .getResponse()
      );

}

module.exports = BetSummaryIntent;