function StopIntent(handlerInput) {
    const speakOutput = 'Goodbye!';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
}

module.exports = StopIntent;