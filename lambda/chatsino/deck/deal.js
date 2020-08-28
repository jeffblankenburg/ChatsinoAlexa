function deal(deck, quantity) {
    const hand = deck.splice(0, quantity);

    for (let i = 0;i<hand.length;i++) {
        hand[i].held = false;
    }

    return { hand, deck };
}
  
module.exports = deal;
  