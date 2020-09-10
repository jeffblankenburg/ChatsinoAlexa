const cashier = require('../cashier');
const data = require('../data');
const evaluator = require('./evaluator');
const helper = require('../helper.js');
const position = require("./position");

async function play(user) {
    let game = await data.getGamesByUserRecordId(user.fields.RecordId, helper.ROULETTE);
    if (game.length === 0) game = await data.createGame(user, helper.ROULETTE);
    else game = game[0];

    const spinResult = helper.getRandom(0, 36);
    const evaluation = evaluator(spinResult);
    const wagers = await data.getWagersByGame(game);
    let updateArray = [];
    let payout = 0;

    for (let i = 0; i < wagers.length; i++) {
        //WAS THEIR POSITION A NUMBER?
        const wagerPosition = eval(`position.${wagers[i].fields.Position.toUpperCase()}`);

        let fields = {Result: spinResult.toString(), Status: "Completed", Amount: wagers[i].fields.Amount, Position: wagers[i].fields.Position};

        console.log(`WAGER POSITION ${JSON.stringify(wagerPosition)}`);

        if (evaluation.win.includes(wagerPosition)) {
            //fields.Outcome = JSON.stringify(evaluation);
            //console.log(`WAGER AMOUNT ${wagers[i].fields.Amount}`);
            const winnings = parseInt(wagers[i].fields.Amount) * parseInt(wagerPosition.odds);
            //console.log(`PAYOUT ${winnings}`);
            fields.Payout = winnings;
            //const win = {wager: wagers[i].fields.Amount, position: wagers[i].fields.Position, payout: winnings};
            payout += winnings;
        }
        else if (evaluation.lose.includes(wagerPosition)) {
            //console.log(`WAGER AMOUNT ${wagers[i].fields.Amount}`);
            //const loss = {wager: wagers[i].fields.Amount, position: wagers[i].fields.Position, payout: -wagers[i].fields.Amount};
            payout -= wagers[i].fields.Amount;
            //console.log(`PAYOUT ${payout}`);
            fields.Payout = -wagers[i].fields.Amount;
        }

        const wager = {
            id: wagers[i].fields.RecordId,
            fields: fields
        }
        updateArray.push(wager)
    }
    if (updateArray.length > 0) {
        const areWagersResolved = await cashier.updateWagers(updateArray);
    }
    const updatedUser = await data.updateBalance(user, payout);
    const saveSpin = await data.saveSpin(game, spinResult);
    

    console.log(`UPDATEARRAY ${JSON.stringify(updateArray)}`);

    const result = {
        user: updatedUser,
        spinResult: spinResult,
        result: evaluation,
        outcome: updateArray,
        payout: payout,
        status: "COMPLETED",  
    };

    return result;
}

module.exports = play;