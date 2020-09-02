const position = require('./position.js');

function evaluator(hand) {
  console.log(`POKERHAND ${JSON.stringify(hand)}`);
  const sortedHand = hand.sort((a, b) => {return b.value.id - a.value.id});

  if (isRoyalFlush(sortedHand)) return position.ROYALFLUSH;
  if (isStraightFlush(sortedHand)) return position.STRAIGHTFLUSH;
  if (isFourOfAKind(sortedHand)) return position.FOUROFAKIND;
  if (isFullHouse(sortedHand)) return position.FULLHOUSE;
  if (isFlush(sortedHand)) return position.FLUSH;
  if (isStraight(sortedHand)) return position.STRAIGHT;
  if (isThreeOfAKind(sortedHand)) return position.THREEOFAKIND;
  if (isTwoPair(sortedHand)) return position.TWOPAIR;
  if (isPair(sortedHand)) return position.PAIR;
  return undefined;
}

function isRoyalFlush(hand) {
  if (isStraightFlush(hand) && (hand[4].value.id === 10)) return true;
  return false;
}

function isStraightFlush(hand) {
  if (isStraight(hand) && isFlush(hand)) return true;
  return false;
}

function isFourOfAKind(hand) {
  if (whichFourOfAKind(hand) != 0) return true;
  return false;
}

function isFullHouse(hand) {
  // PAIR IS HIGHER THAN THE THREE OF A KIND
  if ((hand[0].value.id === hand[1].value.id) && (hand[2].value.id === hand[3].value.id) && (hand[3].value.id === hand[4].value.id)) return true;
  // THREE OF A KIND IS HIGHER THAN THE PAIR
  if ((hand[0].value.id === hand[1].value.id) && (hand[1].value.id === hand[2].value.id) && (hand[3].value.id === hand[4].value.id)) return true;
  return false;
}

function isFlush(hand) {
  if ((hand[0].suit.id === hand[1].suit.id) && (hand[1].suit.id === hand[2].suit.id) && (hand[2].suit.id === hand[3].suit.id) && (hand[3].suit.id === hand[4].suit.id)) return true;
  return false;
}

function isStraight(hand) {
  if ((hand[0].value.id === hand[1].value.id + 1) && (hand[1].value.id === hand[2].value.id + 1) && (hand[2].value.id === hand[3].value.id + 1) && (hand[3].value.id === hand[4].value.id + 1)) return true;
  if ((hand[0].value.id === 14) && (hand[1].value.id === 5) && (hand[2].value.id === 4) && (hand[3].value.id === 3) && (hand[4].value.id === 2)) return true;
  return false;
}

function isThreeOfAKind(hand) {
  if (whichThreeOfAKind(hand) != 0) return true;
  return false;
}

function isTwoPair(hand) {
  if ((hand[0].value.id === hand[1].value.id) && (hand[2].value.id == hand[3].value.id)) return true;
  if ((hand[1].value.id === hand[2].value.id) && (hand[3].value.id == hand[4].value.id)) return true;
  if ((hand[0].value.id === hand[1].value.id) && (hand[3].value.id == hand[4].value.id)) return true;
  return false;
}

function isPair(hand) {
  if (whichPair(hand) != 0) return true;
  return false;
}

function whichPair(hand) {
  if (hand[0].value.id === hand[1].value.id) return hand[0].value.id;
  if (hand[1].value.id === hand[2].value.id) return hand[1].value.id;
  if (hand[2].value.id === hand[3].value.id) return hand[2].value.id;
  if (hand[3].value.id === hand[4].value.id) return hand[3].value.id;
  return 0;
}

function whichThreeOfAKind(hand) {
  if (hand[0].value.id === hand[2].value.id) return hand[0].value.id;
  if (hand[1].value.id === hand[3].value.id) return hand[1].value.id;
  if (hand[2].value.id === hand[4].value.id) return hand[0].value.id;
  return 0;
}

function whichFourOfAKind(hand) {
  if (hand[0].value.id === hand[3].value.id) return hand[0].value.id;
  if (hand[1].value.id === hand[4].value.id) return hand[1].value.id;
  return 0;
}

module.exports = evaluator;
