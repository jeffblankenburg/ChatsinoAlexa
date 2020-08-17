const suit = require('./suit.js');
const value = require('./value.js');
const shuffle = require('./shuffle.js');

function create() {
  const suits = Object.values(suit);
  const values = Object.values(value);

  let deck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({ suit, value });
    });
  });
  deck = shuffle(deck);
  return deck;
}

module.exports = create;
