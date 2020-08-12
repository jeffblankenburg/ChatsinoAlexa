const data = require("../data");
const helper = require("../helper");

async function LaunchRequest(handlerInput) {
    console.log(`<=== handler/LaunchRequest.js ===>`);
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `LAUNCHREQUEST`);
    const locale = helper.getLocale(handlerInput);

    const slotsPercent = parseInt((sessionAttributes.user.SlotsGames / sessionAttributes.user.TotalGames)*100);
    const pokerPercent = parseInt((sessionAttributes.user.PokerGames / sessionAttributes.user.TotalGames)*100);
    const roulettePercent = parseInt((sessionAttributes.user.RouletteGames / sessionAttributes.user.TotalGames)*100);

    var gameSpeech = "";
    if (slotsPercent > 49) gameSpeech = `You have played slots ${slotsPercent}% of the time.  You should give poker or roulette a try today! `;
    else if (pokerPercent > 49) gameSpeech = `You have played poker ${pokerPercent}% of the time.  You should give slots or roulette a try today! `;
    else if (roulettePercent > 49) gameSpeech = `You have played roulette ${roulettePercent}% of the time.  You should give poker or slots a try today! `;

    var speakOutput = `Welcome to the Chatsino! ${gameSpeech}`; //await data.getRandomSpeech(`Welcome`, locale);
    var actionQuery = `What would you like to do?`; //await data.getRandomSpeech(`ActionQuery`, locale);

    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = LaunchRequest;