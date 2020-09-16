const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function PositionIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const previousAction = sessionAttributes.previousAction;
    //helper.setAction(handlerInput, `POSITIONINTENT`);

    const game = helper.getResolvedWords(handlerInput, "game");
    
    if (previousAction.includes("CRAPS") || (game != undefined && game[0].value.name === "craps")) {
        //TODO: THE POSITION LIST NEEDS TO BE GENERATED AND CONTEXTUAL FOR CRAPS.
        speakOutput = "You asked for the position list for craps. What do you want to do next?";
    }
    else if (previousAction.includes("ROULETTE") || (game != undefined && game[0].value.name === "roulette")) {
        speakOutput = "You asked for the position list for roulette. What do you want to do next?"
    }
    else {
        handlerInput.responseBuilder.addElicitSlotDirective("game");
        speakOutput = "Which game did you want the possible bet positions for? "
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(speakOutput)
          .getResponse()
      );

}

module.exports = PositionIntent;