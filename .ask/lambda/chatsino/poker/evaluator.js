const position = require('./position.js');

function evaluator(hand) {
  //console.log(`POKERHAND ${JSON.stringify(hand)}`);
  const sortedHand = hand.sort((a, b) => {return b.value.id - a.value.id});

  if (isRoyalFlush(sortedHand)) return {outcome: position.ROYALFLUSH, suit:whichFlush(sortedHand)};
  if (isStraightFlush(sortedHand)) return {outcome: position.STRAIGHTFLUSH, suit:whichFlush(sortedHand), highcard:sortedHand[0].value.name};
  if (isFourOfAKind(sortedHand)) return {outcome: position.FOUROFAKIND, fourofakind: whichFourOfAKind(sortedHand).name};
  if (isFullHouse(sortedHand)) return {outcome: position.FULLHOUSE, threeofakind:sortedHand[0].value.name, pair:sortedHand[4].value.name};
  if (isFlush(sortedHand)) return {outcome: position.FLUSH, suit:whichFlush(sortedHand), highcard:sortedHand[0].value.name};
  if (isStraight(sortedHand)) return {outcome: position.STRAIGHT, highcard:sortedHand[0].value.name};
  if (isThreeOfAKind(sortedHand)) return {outcome: position.THREEOFAKIND, threeofakind:whichThreeOfAKind(sortedHand).name};
  if (isTwoPair(sortedHand)) return {outcome: position.TWOPAIR, highcard:whichTwoPairHigh(sortedHand).name, lowcard:whichTwoPairLow(sortedHand).name};
  if (isPair(sortedHand)) return {outcome: position.PAIR, pair:whichPair(sortedHand).name};
  return {outcome: undefined};
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
  const fourOfAKind = whichFourOfAKind(hand);
  if (fourOfAKind.id != 0) return true;
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
  if (whichThreeOfAKind(hand).id != 0) return true;
  return false;
}

function isTwoPair(hand) {
  if ((hand[0].value.id === hand[1].value.id) && (hand[2].value.id == hand[3].value.id)) return true;
  if ((hand[1].value.id === hand[2].value.id) && (hand[3].value.id == hand[4].value.id)) return true;
  if ((hand[0].value.id === hand[1].value.id) && (hand[3].value.id == hand[4].value.id)) return true;
  return false;
}

function isPair(hand) {
  if (whichPair(hand).id != 0) return true;
  return false;
}

function whichPair(hand) {
  if (hand[0].value.id === hand[1].value.id) return hand[0].value;
  if (hand[1].value.id === hand[2].value.id) return hand[1].value;
  if (hand[2].value.id === hand[3].value.id) return hand[2].value;
  if (hand[3].value.id === hand[4].value.id) return hand[3].value;
  return {id: 0};
}

function whichThreeOfAKind(hand) {
  if (hand[0].value.id === hand[2].value.id) return hand[0].value;
  if (hand[1].value.id === hand[3].value.id) return hand[1].value;
  if (hand[2].value.id === hand[4].value.id) return hand[0].value;
  return {id: 0};
}

function whichFourOfAKind(hand) {
  if (hand[0].value.id === hand[3].value.id) return hand[0].value;
  if (hand[1].value.id === hand[4].value.id) return hand[1].value;
  return {id: 0};
}

function whichFlush(hand) {
  if (isFlush(hand)) {
    return hand[0].suit.name;
  }
  return 0;
}

function whichTwoPairHigh(hand) {
  if (hand[0].value.id === hand[1].value.id) return hand[0].value;
  if (hand[1].value.id === hand[2].value.id) return hand[1].value;
  return {id: 0};
}

function whichTwoPairLow(hand) {
  if (hand[2].value.id === hand[3].value.id) return hand[2].value;
  if (hand[3].value.id === hand[4].value.id) return hand[3].value;
  return {id: 0};
}

module.exports = evaluator;
