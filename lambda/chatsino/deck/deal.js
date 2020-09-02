function deal(deck, quantity) {
    const hand = deck.splice(0, quantity);
    console.log(`NEW CARD ${JSON.stringify(hand[0])}`);
    for (let i = 0;i<hand.length;i++) {
        hand[i].held = false;
    }

    return { hand, deck };
}
  
module.exports = deal;
  