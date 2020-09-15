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
        //TODO: COMPARE ALL OF THE WAGERS FOR THIS USER AGAINST THE ROLL OUTCOME.
        const wagerPosition = eval(`position.${wagers[i].fields.Position}`);

        let fields = {Amount: wagers[i].fields.Amount, Position: wagers[i].fields.Position};

        if (isWagerOn(wagerPosition, point, total)) {
            if (evaluation.win.includes(wagerPosition)) {
                const winnings = parseInt(wagers[i].fields.Amount) * getOdds(wagerPosition, point, total);
                fields.Payout = wagers[i].fields.Payout + winnings;
                fields.Outcome = "WIN";
                fields.Result = winnings.toString();
                payout += winnings;
            }
            else if (evaluation.lose.includes(wagerPosition)) {
                fields.Payout = wagers[i].fields.Payout - wagers[i].fields.Amount;
                fields.Status = "Completed";
                fields.Outcome = "LOSE";
                fields.Result = "-" + wagers[i].fields.Amount.toString();
                payout -= wagers[i].fields.Amount;
            }

            const wager = {
                id: wagers[i].fields.RecordId,
                fields: fields
            }
            updateArray.push(wager)
        }
    }

    if (updateArray.length > 0) {
        const areWagersResolved = await cashier.updateWagers(updateArray);
    }

    const updatedUser = await data.updateBalance(user, payout);
    let updatedGame = 0;
    if (point === 0 && [4,5,6,8,9,10].includes(total)) {
      updatedGame = await data.updatePoint(game, total);
    }
    else if (point === total) {
        updatedGame = await data.updatePoint(game, 0);
    }
    else updatedGame = game;
    const saveRoll = await data.saveRoll(game, die1, die2);

    const result = {
        user: updatedUser,
        die1: die1,
        die2: die2,
        game: updatedGame,
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

function getOdds(betPosition, point, total) {
    if (betPosition.odds) return betPosition.odds;
    switch (point) {
      case 4: case 10:
        switch (betPosition) {
          case position.PASSODDS:
          case position.COMEODDS: return 2;
          case position.DONTPASSODDS:
          case position.DONTCOMEODDS: return 0.5;
        }
        break;
      case 5: case 9:
        switch (betPosition) {
          case position.PASSODDS:
          case position.COMEODDS: return 1.5;
          case position.DONTPASSODDS:
          case position.DONTCOMEODDS: return 1.5;
        }
        break;
      case 6: case 8:
        switch (betPosition) {
          case position.PASSODDS:
          case position.COMEODDS: return 1.2;
          case position.DONTPASSODDS:
          case position.DONTCOMEODDS: return 1.2;
        }
        break;
    }
    switch (betPosition) {
      case position.C_E:
        switch (total) {
          case 2: case 3: case 12: return 3;
          case 11: return 7;
        }
        break;
      case position.FIELD:
        switch (total) {
          case 3: case 4: case 9: case 10: case 11: return 1;
          case 2: case 12: return 2;
        }
        break;
      case position.HORN:
        switch (total) {
          case 3: case 11: return 3;
          case 2: case 12: return 6.75;
        }
        break;
      case position.WORLD:
        switch (total) {
          case 3: case 11: return 2.2;
          case 2: case 12: return 5.2;
        }
        break;
    }
  }

  function isWagerOn(betPosition, point, total) {
      //TODO: WRITE THE RULES FOR WHEN A BET SHOULD BE ON OR OFF.
      if (point > 0) return true;
      return true;
  }

module.exports = play;

