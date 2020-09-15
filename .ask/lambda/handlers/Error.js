const data = require("../data");
const helper = require("../helper");

async function Error(handlerInput, error) {
    console.log("<=== handlers/error.js ===>");
    const locale = helper.getLocale(handlerInput);
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `ERROR`);
    sessionAttributes.isError = true;
    console.log(`ERROR HANDLED: ${error.stack}`);
    const speakOutput = "Jeff, there was an error."; //await data.getRandomSpeech("Error", locale);
    const actionQuery = "What should we do now?"; //await data.getRandomSpeech("ActionQuery", locale);
    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = Error;