const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function ClearRouletteIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `CLEARROULETTE`);
    const position = helper.getResolvedWords(handlerInput, "position");
    let speakOutput = "";
    if (!position[0]) {
        handlerInput.responseBuilder.addElicitSlotDirective("position");
        speakOutput = "Which position are you trying to remove your bets from? ";
    }
    else {
        const result = await chatsino.data.deleteUserWagersByPosition(sessionAttributes.user, position[0].value.name);
        if (result.amount === 0) speakOutput = `Oh. You don't have any bets on ${result.position}.  To place a bet, you can say something like, bet ten on red.  What would you like to do now? `;
        else speakOutput = `OK.  I removed ${result.amount} coins from ${result.position} on the roulette table for you.  What would you like to do now? `;
    }
    

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = ClearRouletteIntent;