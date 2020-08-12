const helper = require("../helper");

async function UserAccountIntent(handlerInput) {
    console.log(`<=== handler/UserAccountIntent.js ===>`);
    helper.setAction(handlerInput, `USERACCOUNTINTENT`);
    const locale = helper.getLocale(handlerInput);

    const userId = handlerInput.requestEnvelope.session.user.userId.substr(handlerInput.requestEnvelope.session.user.userId.length-6);
    let userIdSpeech = `<say-as interpret-as="spell-out">`;
    for (var i = 0;i<userId.length;i++) {
        userIdSpeech += `${userId.slice(i, i+1)}<break time='.05s'/>`;
        if (i == 2) userIdSpeech += `<break time='.15s'/>`;
    }
    userIdSpeech += `</say-as>`;
        //<break time='.25s'/>${userId.slice(3)}</say-as>`;

    var speakOutput = `In order to link your Alexa account to your Twitch chatbot account, you will need this six digit code: ${userIdSpeech}.  Type the command, exclamation point link, followed by your code, ${userIdSpeech}, to link your accounts.`; //await data.getRandomSpeech(`Welcome`, locale);
    var actionQuery = `What would you like to do?`; //await data.getRandomSpeech(`ActionQuery`, locale);

    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = UserAccountIntent;