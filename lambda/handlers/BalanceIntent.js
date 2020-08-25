const helper = require("../helper.js");
const chatsino = require("../chatsino");

async function BalanceIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    let speakOutput = `You currently have ${sessionAttributes.user.fields.AvailableBalance} coins available. `;
    //TODO: WE SHOULD LET THEM KNOW HOW MANY BETS THEY HAVE IN EACH GAME, NOT OVERALL.
    if (sessionAttributes.user.fields.CurrentWagers > 0) speakOutput += `You also have ${sessionAttributes.user.fields.CurrentWagers} coins wagered in some of our table games.`

    return (
        handlerInput.responseBuilder
          .speak(speakOutput + ' What do you want to play next?')
          .reprompt(speakOutput + 'What do you want to play next?')
          .getResponse()
      );

}

module.exports = BalanceIntent;