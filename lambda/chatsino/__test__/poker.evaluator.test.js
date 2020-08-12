const poker = require('../poker');
const deck = require("../deck");

test('A K Q J 10 of Hearts returns Royal Flush', () => {
  const hand = [{ suit: deck.suit.HEARTS, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._K },
    { suit: deck.suit.HEARTS, value: deck.value._Q },
    { suit: deck.suit.HEARTS, value: deck.value._J },
    { suit: deck.suit.HEARTS, value: deck.value._10 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.ROYALFLUSH);
});

test('K Q J A 10 of Hearts returns Royal Flush', () => {
  const hand = [{ suit: deck.suit.HEARTS, value: deck.value._K },
    { suit: deck.suit.HEARTS, value: deck.value._Q },
    { suit: deck.suit.HEARTS, value: deck.value._J },
    { suit: deck.suit.HEARTS, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._10 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.ROYALFLUSH);
});

test('Two, Three, Four, Five, Six of Hearts returns Straight Flush', () => {
  const hand = [{ suit: deck.suit.HEARTS, value: deck.value._2 },
    { suit: deck.suit.HEARTS, value: deck.value._3 },
    { suit: deck.suit.HEARTS, value: deck.value._4 },
    { suit: deck.suit.HEARTS, value: deck.value._5 },
    { suit: deck.suit.HEARTS, value: deck.value._6 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.STRAIGHTFLUSH);
});

test('A 2 3 4 5 of Spades returns Straight Flush', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._2 },
    { suit: deck.suit.SPADES, value: deck.value._3 },
    { suit: deck.suit.SPADES, value: deck.value._4 },
    { suit: deck.suit.SPADES, value: deck.value._5 },
    { suit: deck.suit.SPADES, value: deck.value._A }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.STRAIGHTFLUSH);
});

test('A 3 3 3 3 returns Four of a Kind', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._3 },
    { suit: deck.suit.HEARTS, value: deck.value._3 },
    { suit: deck.suit.DIAMONDS, value: deck.value._3 },
    { suit: deck.suit.CLUBS, value: deck.value._3 },
    { suit: deck.suit.SPADES, value: deck.value._A }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.FOUROFAKIND);
});

test('7 7 7 7 6 returns Four of a Kind', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._7 },
    { suit: deck.suit.HEARTS, value: deck.value._7 },
    { suit: deck.suit.DIAMONDS, value: deck.value._7 },
    { suit: deck.suit.CLUBS, value: deck.value._7 },
    { suit: deck.suit.SPADES, value: deck.value._6 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.FOUROFAKIND);
});

test('8 8 8 Q Q returns Full House', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._8 },
    { suit: deck.suit.HEARTS, value: deck.value._8 },
    { suit: deck.suit.DIAMONDS, value: deck.value._8 },
    { suit: deck.suit.CLUBS, value: deck.value._Q },
    { suit: deck.suit.SPADES, value: deck.value._Q }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.FULLHOUSE);
});

test('4 4 Q Q Q returns Full House', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._Q },
    { suit: deck.suit.HEARTS, value: deck.value._Q },
    { suit: deck.suit.DIAMONDS, value: deck.value._Q },
    { suit: deck.suit.CLUBS, value: deck.value._4 },
    { suit: deck.suit.SPADES, value: deck.value._4 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.FULLHOUSE);
});

test('2 3 4 5 7 of Clubs returns Flush', () => {
  const hand = [{ suit: deck.suit.CLUBS, value: deck.value._2 },
    { suit: deck.suit.CLUBS, value: deck.value._3 },
    { suit: deck.suit.CLUBS, value: deck.value._4 },
    { suit: deck.suit.CLUBS, value: deck.value._5 },
    { suit: deck.suit.CLUBS, value: deck.value._7 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.FLUSH);
});

test('2 3 4 5 6 returns Straight', () => {
  const hand = [{ suit: deck.suit.CLUBS, value: deck.value._2 },
    { suit: deck.suit.DIAMONDS, value: deck.value._3 },
    { suit: deck.suit.CLUBS, value: deck.value._4 },
    { suit: deck.suit.CLUBS, value: deck.value._5 },
    { suit: deck.suit.CLUBS, value: deck.value._6 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.STRAIGHT);
});

test('4 5 Q Q Q returns Three of a Kind', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._4 },
    { suit: deck.suit.HEARTS, value: deck.value._5 },
    { suit: deck.suit.DIAMONDS, value: deck.value._Q },
    { suit: deck.suit.CLUBS, value: deck.value._Q },
    { suit: deck.suit.SPADES, value: deck.value._Q }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.THREEOFAKIND);
});

test('4 K 7 7 7 returns Three of a Kind', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._4 },
    { suit: deck.suit.HEARTS, value: deck.value._K },
    { suit: deck.suit.DIAMONDS, value: deck.value._7 },
    { suit: deck.suit.CLUBS, value: deck.value._7 },
    { suit: deck.suit.SPADES, value: deck.value._7 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.THREEOFAKIND);
});

test('5 5 9 9 K returns Two Pair', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._5 },
    { suit: deck.suit.HEARTS, value: deck.value._5 },
    { suit: deck.suit.DIAMONDS, value: deck.value._9 },
    { suit: deck.suit.CLUBS, value: deck.value._9 },
    { suit: deck.suit.SPADES, value: deck.value._K }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.TWOPAIR);
});

test('A A J 7 7 returns Two Pair', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._A },
    { suit: deck.suit.DIAMONDS, value: deck.value._J },
    { suit: deck.suit.CLUBS, value: deck.value._7 },
    { suit: deck.suit.SPADES, value: deck.value._7 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.TWOPAIR);
});

test('A A 2 7 9 returns Pair', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._A },
    { suit: deck.suit.DIAMONDS, value: deck.value._2 },
    { suit: deck.suit.CLUBS, value: deck.value._7 },
    { suit: deck.suit.SPADES, value: deck.value._9 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.PAIR);
});

test('A 2 2 7 9 returns Pair', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._2 },
    { suit: deck.suit.DIAMONDS, value: deck.value._2 },
    { suit: deck.suit.CLUBS, value: deck.value._7 },
    { suit: deck.suit.SPADES, value: deck.value._9 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.PAIR);
});

test('A 2 7 7 9 returns Pair', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._2 },
    { suit: deck.suit.DIAMONDS, value: deck.value._7 },
    { suit: deck.suit.CLUBS, value: deck.value._7 },
    { suit: deck.suit.SPADES, value: deck.value._9 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.PAIR);
});

test('A 2 7 9 9 returns Pair', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._2 },
    { suit: deck.suit.DIAMONDS, value: deck.value._7 },
    { suit: deck.suit.CLUBS, value: deck.value._9 },
    { suit: deck.suit.SPADES, value: deck.value._9 }];
  const result = poker.evaluator(hand);
  expect(result).toBe(poker.position.PAIR);
});

test('A 2 7 8 9 returns Nothing', () => {
  const hand = [{ suit: deck.suit.SPADES, value: deck.value._A },
    { suit: deck.suit.HEARTS, value: deck.value._2 },
    { suit: deck.suit.DIAMONDS, value: deck.value._7 },
    { suit: deck.suit.CLUBS, value: deck.value._8 },
    { suit: deck.suit.SPADES, value: deck.value._9 }];
  const result = poker.evaluator(hand);
  expect(result).toBe();
});
