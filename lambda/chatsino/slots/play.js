const cashier = require("../cashier");
const data = require("../data");
const evaluator = require("./evaluator");
const helper = require("../helper.js");
const reels = require("./reels");
const getUserByRecordId = require("../data/getUserByRecordId");

async function play(user, wager) {
  const checkWager = cashier.isValidWager(user, wager);
  if (checkWager.isValid) {
    const game = await data.createGame(user, helper.SLOTS);
    // console.log(`GAME ${JSON.stringify(game)}`);
    const bet = await data.createWager(user, wager, "", game);
    // console.log(`BET ${JSON.stringify(bet)}`);
    const spinResult = spin();
    const outcome = evaluator(spinResult);
    // console.log(`OUTCOME ${JSON.stringify(outcome)}`);
    const result = await cashier.resolveBets(user, game, outcome, spinResult);
    //user = result.user;

    const isGameResolved = await cashier.completeGame(game);
    // if (outcome)
    //   action = await cashier.deposit(user, wager, outcome.odds, helper.SLOTS);
    // else action = await cashier.withdraw(user, wager, helper.SLOTS);

    user = await data.getUserByRecordId(user.fields.RecordId);
    //const fields = user.fields
    //console.log({fields});

    return {
      user: user,
      wager: wager,
      result: spinResult,
      outcome: outcome,
      status: "COMPLETED",
    };
    // if (outcome) return await win(user, wager, spinResult, outcome);
    // return await lose(user, wager, spinResult);
  }
  else return {user: user, wager: wager, status: checkWager.status, minimum: checkWager.minimum, maximum: checkWager.maximum};
}

function spin() {
  const slot1 = helper.getRandomItem(helper.shuffle(reels.REEL1));
  const slot2 = helper.getRandomItem(helper.shuffle(reels.REEL2));
  const slot3 = helper.getRandomItem(helper.shuffle(reels.REEL3));
  return [slot1, slot2, slot3];
}

async function win(user, wager, spinResult, outcome) {
  const action = await cashier.deposit(user, wager, outcome.odds, helper.SLOTS);
  return {
    user: user,
    wager: wager,
    spinResult: spinResult,
    outcome: outcome,
    balance: action.fields.Currency,
  };
}

async function lose(user, wager, spinResult) {
  const action = await cashier.withdraw(user, wager, helper.SLOTS);
  return {
    user: user,
    wager: wager,
    spinResult: spinResult,
    balance: action.fields.Currency,
  };
}

module.exports = play;
