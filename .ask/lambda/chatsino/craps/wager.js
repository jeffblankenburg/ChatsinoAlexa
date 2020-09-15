const cashier = require("../cashier");
const data = require("../data");
const helper = require("../helper");

async function wager(user, wager, position) {
    if (cashier.isValidWager(user, wager)) {
        let activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.CRAPS);
        if (activeGame.length === 0) {
            activeGame = await data.createGame(user, helper.CRAPS);
        } else activeGame = activeGame[0];
        //console.log(`ACTIVE GAME ${JSON.stringify(activeGame)}`);
        if (cashier.isValidPosition(position, activeGame)) {
            const bet = await data.createWager(user, wager, position, activeGame);
            const crapsPosition = require("../craps/position.js");
            const betPosition = eval(`crapsPosition.${position}`);
            const result = {
                user: user,
                wager: wager,
                position: betPosition,
                status: "ACTIVE_GAME",
              };
            return result;
        }
        else return {user: user, wager: wager, position: position, status: "INVALID_POSITION"}
    }
    else return {user: user, wager: wager, position: position, status: "INVALID_WAGER"}
}

module.exports = wager