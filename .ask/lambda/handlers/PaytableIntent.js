const helper = require("../helper.js");
const chatsino = require("../chatsino");

function PaytableIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    helper.setAction(handlerInput, `PAYTABLEINTENT`);

    const gameType = helper.getResolvedWords(handlerInput, "game");
    let speakOutput = "";
    if (!gameType[0]) {
        handlerInput.responseBuilder.addElicitSlotDirective("game");
        speakOutput = "Which game did you want the pay table for? ";
    }
    else {
        const positions = chatsino.data.getPositionsByGameType(gameType[0].value.name);
        console.log(`POSITIONS ${JSON.stringify(positions)}`);
        const keys = Object.keys(positions);
        speakOutput = `This is the pay table for ${gameType[0].value.name}. `;
        for (let i = 0;i<keys.length;i++) {
            speakOutput += `${positions[keys[i]].name} pays ${positions[keys[i]].odds} to one. `;
        }
    }

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to do next?')
          .reprompt(speakOutput + ' What do you want to do next?')
          .getResponse()
      );

}

module.exports = PaytableIntent;