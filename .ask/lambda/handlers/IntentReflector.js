const data = require("../data");
const helper = require("../helper");

async function IntentReflector(handlerInput) {
    console.log("<=== handlers/intentReflector.js ===>");
    const locale = helper.getLocale(handlerInput);
    const intentName = helper.getIntentName(handlerInput);
    const speakOutput = `You just triggered ${intentName}. `;
  
    const actionQuery = `What should we do now?`; //await data.getRandomSpeech("ActionQuery", locale);
    return handlerInput.responseBuilder
        .speak(`${speakOutput} ${actionQuery}`)
        .reprompt(actionQuery)
        .getResponse();
}

module.exports = IntentReflector;