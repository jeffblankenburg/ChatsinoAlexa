const deposit = require("./deposit");
const isValidWager = require("./isValidWager");
const isValidPosition = require("./isValidPosition");
const ledger = require("./ledger");
const withdraw = require("./withdraw");

module.exports = {
  deposit,
  isValidPosition,
  isValidWager,
  ledger,
  withdraw
};
