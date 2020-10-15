const fetch = require("node-fetch");

function HelpIntent(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    let speakOutput = 'This is a full casino experience on Alexa.  You can play games like video poker, slots, or roulette.  Try saying something like, bet five on slots.';

    switch(sessionAttributes.previousAction) {
        case "BALANCEINTENT":
            speakOutput = `Your active balance is your total coins, minus any bets you currently have in play.  For example, if you have 1,000 coins, but you have 200 of them on the roulette table, your active balance will be 800 coins. `;
        break;
        case "BETSUMMARY":
            speakOutput = `To finish your poker or roulette wagers, you can say, deal, for poker, or, spin the wheel, for roulette. `
        break;
        case "POKERDEAL":
            speakOutput = "You just finished a game of video poker.  Your final hand is compared to our poker pay table to determine if you are a winner. To hear a list of the winning hands, you can say, give me the poker pay table."
        break;
        case "POKERHOLD":
            speakOutput = "You just held a card in your poker hand.  When you're done holding cards, you can say deal or draw to replace the cards that you didn't hold.  This also ends your game of video poker, and pays you if you have a winning hand.  To hear a list of the winning hands, you can say, give me the poker pay table. "
        break;
        case "SPINROULETTE":
            //TODO: YOU COULD REALLY TELL THEM WHAT THEIR LAST SPIN OUTCOME WAS. BUT THEY COULD ALSO SAY REPEAT.
            speakOutput = "You just spun the roulette wheel.  If you had bets, you should have heard that you won or lost them, as well as the outcome. Each time that you spin the wheel, all of your roulette bets are settled and returned to you.  You can always spin the wheel without any bets, if you want, as well. "
        break;
        case "STARTPOKER":
            speakOutput = "You have been dealt five cards, and you are trying to make your best poker hand.  You can hold any or none of the cards by saying hold or drop and the name of the card, and when you're ready to receive new cards, you can say deal. ";
        break;
        case "STARTROULETTE":
            speakOutput = "You just made a bet on the roulette table.  You can place as many bets as you would like, and when you are ready, you can say, spin the wheel, to spin the roulette wheel and see the outcome.  To clear a bet, you can say, clear, followed by the position on the table that you want to remove your bets.  For example, clear black. ";
        break;
        case "STARTSLOTS":
            speakOutput = "Each spin of the slot machine results in three reels spinning.  You are trying to match three of a kind, or a few other specific outcomes.  To hear the list of outcomes, you can say, what is the pay table for slots. ";
        break;
    }

    return handlerInput.responseBuilder
        .speak(speakOutput + " What would you like to do now?")
        .reprompt("What would you like to do now?")
        .getResponse();
}

module.exports = HelpIntent;