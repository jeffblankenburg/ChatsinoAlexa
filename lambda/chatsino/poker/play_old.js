const cashier = require("../cashier");
const deck = require('../deck');
const helper = require("../helper.js");
const evaluator = require("./evaluator")

async function play(user, wager, game, position) {
    if (cashier.isValidWager(user, wager)) {
        if (cashier.isValidPosition(position, game)) {
            let cardDeck = deck.create()
            let dealOutcome = deck.deal(cardDeck, 5);
            const hand = dealOutcome.hand;
            console.log(`HAND ${JSON.stringify(hand)}`);
            const outcome = evaluator(hand);
            console.log(`OUTCOME ${JSON.stringify(outcome)}`);
            if (outcome) return await win(user, wager, hand, outcome);
            return await lose(user, wager, hand);
        }
        else {
            //TODO: RETURN AN INVALID POSITION MESSAGE.
        }
    }
    else {
        //TODO: RETURN AN INVALID WAGER MESSAGE.
    }
}

async function win(user, wager, hand, outcome) {
    const action = await cashier.deposit(user, wager, outcome.odds, helper.POKER);
    return {hand: hand, outcome: outcome, balance: action.fields.Currency };
}

async function lose(user, wager, hand) {
    const action = await cashier.withdraw(user, wager, helper.POKER);
    return {hand: hand, balance: action.fields.Currency };
}

module.exports = play;