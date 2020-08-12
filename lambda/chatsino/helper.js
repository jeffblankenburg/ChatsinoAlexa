const POKER = 'rec6Uw3WHsEIVCd8C';
const ROULETTE = 'recQUQQA2lLJ42GsE';
const SLOTS = 'recjT3OyV25zMMumt';
const RPS = 'receut7cPw5OJBLyb';
const CRAPS = 'rec61659iqSOKx2Nm';
const GIVE = 'recMbwMQ7azl9FVv8';
const BLACKJACK = 'rec4O7OagOgKRutXD';

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
    POKER,
    ROULETTE,
    SLOTS,
    RPS,
    CRAPS,
    GIVE,
    BLACKJACK,
    shuffle,
    getRandom,
    getRandomItem
};