const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function LeaderboardIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `LEADERBOARD`);
    let speakOutput = `Here are the top 5 chatsino players, and their coin totals.  `;

    const result = await chatsino.data.getLeaderboard();
    //TODO: WE NEED A WAY TO TELL THE USER WHAT PLACE *THEY* ARE IN.
    for (let i=0;i<result.length;i++) {
        let thatsyou = "";
        if (result[i].fields.RecordId === sessionAttributes.user.fields.RecordId) thatsyou = `<amazon:emotion name="excited" intensity="high">That's you!</amazon:emotion> `;
        speakOutput += `<say-as interpret-as="spell-out">${result[i].fields.RecordId.substr(result[i].fields.RecordId.length-4, result[i].fields.RecordId.length)}</say-as> is in <say-as interpret-as="ordinal">${i+1}</say-as> place with ${result[i].fields.Balance} coins. ${thatsyou}`;
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt(speakOutput + 'What do you want to play next?')
          .getResponse()
      );

}

module.exports = LeaderboardIntent;