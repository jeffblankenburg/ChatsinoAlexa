const data = require("../data");
const helper = require("../helper");

async function LaunchRequest(handlerInput) {
    console.log(`<=== handler/launchRequest.js ===>`);
    helper.setAction(handlerInput, `LAUNCHREQUEST`);
    const locale = helper.getLocale(handlerInput);

    var speakOutput = `Welcome to the Skill Template`; //await data.getRandomSpeech(`Welcome`, locale);
    var actionQuery = `What would you like to do?`; //await data.getRandomSpeech(`ActionQuery`, locale);

    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = LaunchRequest;