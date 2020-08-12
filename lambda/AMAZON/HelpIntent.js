const fetch = require("node-fetch");

function HelpIntent(handlerInput) {
    const speakOutput = 'You can say hello to me! How can I help?';

    

    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = HelpIntent;