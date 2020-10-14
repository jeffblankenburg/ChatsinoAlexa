const cashier = require("../cashier");
const data = require("../data");
const helper = require("../helper");

async function wager(user, wager, position) {
    if (cashier.isValidPosition(position, { fields: { GameType: 'roulette' } })) {
        const checkWager = cashier.isValidWager(user, wager);
        if (checkWager.isValid) {
            let activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.ROULETTE);
            if (activeGame.length === 0) {
                activeGame = await data.createGame(user, helper.ROULETTE);
            } else activeGame = activeGame[0];
            //console.log(`ACTIVE GAME ${JSON.stringify(activeGame)}`);
            const bet = await data.createWager(user, wager, position, activeGame);

            const result = {
                user: user,
                wager: wager,
                position: position,
                status: "ACTIVE_GAME",
              };
            return result;
        }
        else return {user: user, wager: wager, position: position, status: checkWager.status, minimum: checkWager.minimum, maximum: checkWager.maximum}
    }
    else return {user: user, wager: wager, position: position, status: "INVALID_POSITION"}
}

module.exports = wager