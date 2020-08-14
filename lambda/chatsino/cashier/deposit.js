const debug = require("debug");
const data = require("../data");

const d = debug("index:cashier:deposit");

async function deposit(user, game, winnings) {
  const balance = parseInt(user.fields.Balance) + winnings;
  return await data.updateBalance(user, balance);
}

module.exports = deposit;
