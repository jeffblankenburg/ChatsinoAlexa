const cashier = require("../cashier");
const data = require("../data");
const helper = require("../helper");

async function play(user, wager) {
    if (cashier.isValidWager(user, wager)) {
        const game = await data.createGame(user, helper.VIDEOPOKER);
        const bet = await data.createWager(user, wager, game);

        return false;
    }
    else return {user: user, wager: wager, status: "INVALID_WAGER"}
}

module.exports = play;