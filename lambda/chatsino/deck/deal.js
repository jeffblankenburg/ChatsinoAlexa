function deal(deck, quantity) {
    const hand = deck.splice(0, quantity);
    return { hand, deck };
}
  
module.exports = deal;
  