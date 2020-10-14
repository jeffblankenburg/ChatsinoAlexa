const blackjack = require("../blackjack");
const deck = require("../deck");

test("User has A A, returns '2 or 12'", () => {
    const result = blackjack.evaluator({userHand:[{suit:deck.suit.HEARTS,value:deck.value._A}, {suit:deck.suit.SPADES,value:deck.value._A}], dealerHand:[{suit:deck.suit.SPADES,value:deck.value._10}, {suit:deck.suit.SPADES,value:deck.value._A}], deck:[]});
    expect(result.userValue).toBe("two or twelve ");
});

test("User has A 2, returns '3 or 13'", () => {
    const result = blackjack.evaluator({userHand:[{suit:deck.suit.HEARTS,value:deck.value._A}, {suit:deck.suit.SPADES,value:deck.value._2}], dealerHand:[{suit:deck.suit.SPADES,value:deck.value._10}, {suit:deck.suit.SPADES,value:deck.value._A}], deck:[]});
    expect(result.userValue).toBe("three or thirteen ");
});

test("User has A 3, returns '4 or 14'", () => {
    const result = blackjack.evaluator({userHand:[{suit:deck.suit.HEARTS,value:deck.value._A}, {suit:deck.suit.SPADES,value:deck.value._3}], dealerHand:[{suit:deck.suit.SPADES,value:deck.value._10}, {suit:deck.suit.SPADES,value:deck.value._A}], deck:[]});
    expect(result.userValue).toBe("four or fourteen ");
});

test("User has A 4, returns '5 or 15'", () => {
    const result = blackjack.evaluator({userHand:[{suit:deck.suit.HEARTS,value:deck.value._A}, {suit:deck.suit.SPADES,value:deck.value._4}], dealerHand:[{suit:deck.suit.SPADES,value:deck.value._10}, {suit:deck.suit.SPADES,value:deck.value._A}], deck:[]});
    expect(result.userValue).toBe("five or fifteen ");
});

test("User has 8 K, returns '18'", () => {
    const result = blackjack.evaluator({userHand:[{suit:deck.suit.HEARTS,value:deck.value._8},{suit:deck.suit.HEARTS,value:deck.value._K}]});
    expect(result.userValue).toBe("eighteen ");
});

test("User has A A 3 8, returns '13'", () => {
    const result = blackjack.evaluator({userHand:[{suit:deck.suit.HEARTS,value:deck.value._A},{suit:deck.suit.HEARTS,value:deck.value._A},{suit:deck.suit.HEARTS,value:deck.value._3},{suit:deck.suit.SPADES,value:deck.value._8}], dealerHand:[{suit:deck.suit.SPADES,value:deck.value._10}, {suit:deck.suit.SPADES,value:deck.value._A}], deck:[]});
    expect(result.userValue).toBe("thirteen ");
});