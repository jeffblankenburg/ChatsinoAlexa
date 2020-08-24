const cashier = require("../cashier");
const data = require("../data");
const helper = require("../helper");

async function wager(user, wager, position) {
    if (cashier.isValidWager(user, wager)) {
        if (cashier.isValidPosition(position, { fields: { GameType: 'roulette' } })) {
            let activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.ROULETTE);
            if (activeGame.length === 0) {
                activeGame = await data.createGame(user, helper.ROULETTE);
            }
            console.log(`ACTIVE GAME ${JSON.stringify(activeGame)}`);
            const bet = await data.createWager(user, wager, position, activeGame[0]);

            const result = {
                user: user,
                wager: wager,
                position: position,
                status: "ACTIVE_GAME",
              };
            return result;
            //TODO: TELL THE USER TO SAY "SPIN THE WHEEL" WHEN THEY ARE DONE BETTING.
        }
        else return {user: user, wager: wager, position: position, status: "INVALID_POSITION"}
    }
    else return {user: user, wager: wager, position: position, status: "INVALID_WAGER"}
}

module.exports = wager