const debug = require("debug");
const data = require("../data");

const d = debug("index:cashier:deposit");

async function deposit(user, wager, odds, type) {
  const winnings = parseInt(wager) * parseInt(odds);
  const balance = parseInt(user.fields.Currency) + winnings;
  d(`DEPOSITING ${balance}`);
  const record = await data.createLedgerItem(user, winnings, type);
  return await data.updateBalance(user, balance, winnings, type);
}

module.exports = deposit;
