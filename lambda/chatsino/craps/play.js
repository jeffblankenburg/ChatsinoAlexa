const cashier = require('../cashier');
const data = require('../data');
const evaluator = require("./evaluator");
const helper = require('../helper.js');
const position = require("./position");

async function play(user) {
    let game = await data.getGamesByUserRecordId(user.fields.RecordId, helper.CRAPS);
    if (game.length === 0) game = await data.createGame(user, helper.CRAPS);
    else game = game[0];

    const [die1, die2] = roll();
    const total = die1 + die2;
    const point = game.fields.Point;
    const evaluation = evaluator(die1, die2, point);

    const wagers = await data.getWagersByGame(game);
    let updateArray = [];
    let payout = 0;

    for (let i = 0; i < wagers.length; i++) {

    }

    if (updateArray.length > 0) {
        const areWagersResolved = await cashier.updateWagers(updateArray);
    }

    const updatedUser = await data.updateBalance(user, payout);
    const saveRoll = await data.saveRoll(game, die1, die2);

    const result = {
        user: updatedUser,
        die1: die1,
        die2: die2,
        result: evaluation,
        outcome: updateArray,
        payout: payout,
        status: "COMPLETED",  
    };

    return result;
}

function roll() {
    const die1 = helper.getRandom(1, 6);
    const die2 = helper.getRandom(1, 6);
    return [die1, die2];
}

module.exports = play;

