const Airtable = require("airtable");
const data = require("../data");
const keys = require("../keys");
const updateWagers = require("./updateWagers");

async function resolveBets(user, game, outcome, result) {
  //console.log(`GAME ${JSON.stringify(game)}`);
  const wagers = await data.getWagersByGame(game);
  let updateArray = [];
  let winnings = 0;
  console.log(`OUTCOME ${JSON.stringify(outcome)}`);
  for (var i = 0; i < wagers.length; i++) {
    let fields = {Result: result.join(" ")};

    if (outcome) {
      fields.Outcome = JSON.stringify(outcome);
      wagers[i].fields.Outcome = outcome;
      fields.Payout = wagers[i].fields.Amount * outcome.odds;
      winnings += wagers[i].fields.Amount * outcome.odds;
    } else {
      fields.Payout = -wagers[i].fields.Amount;
      winnings -= wagers[i].fields.Amount;
    }

    fields.Status = "Completed";
    wagers[i].fields.Status = "Completed";

    const wager = {
      id: wagers[i].fields.RecordId,
      fields: fields,
    };
    updateArray.push(wager);
  }
  const updatedUser = await data.updateBalance(user, winnings);
  const areWagersResolved = await updateWagers(updateArray);

  return { wagers: wagers, user: updatedUser };
}

module.exports = resolveBets;
