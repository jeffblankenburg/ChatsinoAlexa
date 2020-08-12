const data = require('../data');
const ledger = require('./ledger');

async function withdraw(user, wager, type) {
  console.log('<== cashier/withdraw.js ==>');
  const balance = parseInt(user.Currency) - parseInt(wager);
  console.log(`WITHDRAWING ${wager}`);
  const record = await data.createLedgerItem(user, (parseInt(wager) * -1), type);
  return await data.updateBalance(user, balance);
}

module.exports = withdraw;
