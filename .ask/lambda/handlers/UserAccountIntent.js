const helper = require("../helper");

async function UserAccountIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `USERACCOUNTINTENT`);
    const locale = helper.getLocale(handlerInput);

    const userId = sessionAttributes.user.fields.RecordId.substr(sessionAttributes.user.fields.RecordId.length-6);
    let userIdSpeech = "";//`<say-as interpret-as="spell-out">`;
    for (var i = 0;i<userId.length;i++) {
        const character = userId.slice(i, i+1);
        let capital = "";
        if (isNaN(character * 1) && character === character.toUpperCase()) capital = "capital ";

        userIdSpeech += `${capital}${userId.slice(i, i+1)}<break time='.05s'/>`;
        if (i == 2) userIdSpeech += `<break time='.15s'/>`;
    }
    //userIdSpeech += `</say-as>`;
        //<break time='.25s'/>${userId.slice(3)}</say-as>`;

    var speakOutput = `In order to link your Alexa account to your account on Twitch, Slack, Discord, or Twitter, you will need to write down this six character code: ${userIdSpeech}.  Type the command, exclamation point link, followed by your code, ${userIdSpeech}, to link your accounts.  Do not share this code with other people, or they will be able to use your account on other platforms.`; //await data.getRandomSpeech(`Welcome`, locale);
    var actionQuery = `What would you like to do now?`; //await data.getRandomSpeech(`ActionQuery`, locale);

    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = UserAccountIntent;