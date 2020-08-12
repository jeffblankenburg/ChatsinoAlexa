const cashier = require("../cashier");
const evaluator = require("./evaluator");
const helper = require("../helper.js");
const reels = require("./reels");

async function play(user, wager, game, position) {
    if (cashier.isValidWager(user, wager)) {
        if (cashier.isValidPosition(position, game)) {
            const spinResult = spin();
            const outcome = evaluator(spinResult);
            if (outcome) return await win(user, wager, spinResult, outcome)
            return await lose(user, wager, spinResult);
        }
    }
}

function spin() {
    const slot1 = helper.getRandomItem(helper.shuffle(reels.REEL1));
    const slot2 = helper.getRandomItem(helper.shuffle(reels.REEL2));
    const slot3 = helper.getRandomItem(helper.shuffle(reels.REEL3));
    return [slot1, slot2, slot3];
}

async function win(user, wager, spinResult, outcome) {
    const action = await cashier.deposit(user, wager, outcome.odds, helper.SLOTS);
    return {spinResult: spinResult, outcome: outcome, balance: action.fields.Currency };
}

async function lose(user, wager, spinResult) {
    const action = await cashier.withdraw(user, wager, helper.SLOTS);
    return {spinResult: spinResult, balance: action.fields.Currency };
}

module.exports = play;