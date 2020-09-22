const completeGame = require("./completeGame");
const deposit = require("./deposit");
const getPositionList = require("./getPositionList");
const isValidWager = require("./isValidWager");
const isValidPosition = require("./isValidPosition");
const ledger = require("./ledger");
const resolveBets = require("./resolveBets");
const updateWagers = require("./updateWagers");
const withdraw = require("./withdraw");

module.exports = {
  completeGame,
  deposit,
  getPositionList,
  isValidPosition,
  isValidWager,
  ledger,
  resolveBets,
  updateWagers,
  withdraw,
};
