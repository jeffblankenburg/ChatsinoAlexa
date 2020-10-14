const data = require("../data");
const helper = require("../helper");

async function LaunchRequest(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `LAUNCHREQUEST`);
    const locale = helper.getLocale(handlerInput);

    const slotsPercent = parseInt((sessionAttributes.user.fields.SlotsGames / sessionAttributes.user.fields.TotalGames)*100);
    const pokerPercent = parseInt((sessionAttributes.user.fields.PokerGames / sessionAttributes.user.fields.TotalGames)*100);
    const roulettePercent = parseInt((sessionAttributes.user.fields.RouletteGames / sessionAttributes.user.fields.TotalGames)*100);
    let streakSpeech = "";

    var gameSpeech = "";
    if (slotsPercent > 49) gameSpeech = `You have played slots ${slotsPercent}% of the time.  You should give poker or roulette a try today! `;
    else if (pokerPercent > 49) gameSpeech = `You have played poker ${pokerPercent}% of the time.  You should give slots or roulette a try today! `;
    else if (roulettePercent > 49) gameSpeech = `You have played roulette ${roulettePercent}% of the time.  You should give poker or slots a try today! `;

    if (sessionAttributes.user.streak.withinCurrentStreak && !sessionAttributes.user.streak.todayInStreak) {
        switch((sessionAttributes.user.streak.currentStreak+1) % 7) {
            case 1: streakSpeech = `You just started a new daily streak!  I just gave you 10 bonus coins. Come back each day to earn even bigger bonuses! `; break;
            case 2: streakSpeech = `You are on a two day streak!  I just gave you 50 bonus coins. `; break;
            case 3: streakSpeech = `You are on a three day streak!  I just gave you 150 bonus coins. `; break;
            case 4: streakSpeech = `You just hit a four day streak!  I gave you 500 bonus coins. `; break;
            case 5: streakSpeech = `You are on a five day streak!  I just gave you 1000 bonus coins. `; break;
            case 6: streakSpeech = `You have been here six days in a row!  I just gave you 2000 bonus coins. `; break;
            case 0: streakSpeech = `You just completed a seven day streak! Congratulations! I just gave you 5000 bonus coins. You will start a new streak tomorrow! `; break;
        }
    }

    var speakOutput = `<audio src="https://s3.amazonaws.com/jeffblankenburg.alexa/chatsino/sfx/intro.mp3" /> <amazon:emotion name="excited" intensity="medium">Welcome to the Chatsino! ${streakSpeech} You currently have <say-as interpret-as="cardinal">${sessionAttributes.user.fields.AvailableBalance}</say-as> coins available.</amazon:emotion> ${gameSpeech}`; //await data.getRandomSpeech(`Welcome`, locale);
    var actionQuery = `What would you like to do?`; //await data.getRandomSpeech(`ActionQuery`, locale);

    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = LaunchRequest;