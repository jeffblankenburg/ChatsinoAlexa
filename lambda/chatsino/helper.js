const VIDEOPOKER = "reci6rQJsUR7BSMPm";
const ROULETTE = "recrsMFmQpjZEsj2L";
const SLOTS = "recX7XeoYwX4h3w0V";
const CRAPS = "recNsV0lP4FAvnKf5";
const GIVE = "recMbwMQ7azl9FVv8";
const BLACKJACK = "recARvwTmah8jQDWU";
const RPS = "receut7cPw5OJBLyb";

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }
  return items;
}

function getRandomItem(items) {
  var random = getRandom(0, items.length - 1);
  return items[random];
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  VIDEOPOKER,
  ROULETTE,
  SLOTS,
  RPS,
  CRAPS,
  GIVE,
  BLACKJACK,
  shuffle,
  getRandom,
  getRandomItem,
};
