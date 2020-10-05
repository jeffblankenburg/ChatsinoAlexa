const cashier = require("../cashier");
const data = require("../data");

async function wager(user, wager) {
  const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.BLACKJACK);
  if (activeGame.length > 0) {
    //TODO: DON'T MAKE THE BET, TELL THE USER ABOUT THEIR CURRENT HAND OF BLACKJACK
  }

  const checkWager = cashier.isValidWager(user, wager);
  if (checkWager.isValid) {
    //TODO: CREATE THE GAME, MAKE THE WAGER, AND TELL THE USER WHAT THEIR (AND THE DEALER'S) HANDS ARE.
    const game = await data.createGame(user, helper.BLACKJACK);
    const bet = await data.createWager(user, wager, "", game);

    let cardDeck = deck.create();
    let dealOutcome = deck.deal(cardDeck, 4);
    
    //DEAL THE CARDS TO THE USER AND THE DEALER
    let userHand = [dealOutcome.hand[0], dealOutcome.hand[2]];
    let dealerHand = [dealoutcome.hand[1], dealOutcome.hand[3]];

    let cards =  {userHand: userHand, dealerHand: dealerHand, deck: dealOutcome.deck};
    let evaluation = evaluator(result);

    const blackjackHand = await data.createBlackjackHand(game, userHand, dealerHand, dealOutcome.deck);
    const updatedUser = await data.getUserByRecordId(user.fields.RecordId);

    const result = {
      user: updatedUser,
      wager: wager,
      result: cards,
      outcome: evaluation,
      status: "BEFORE_DRAW",
    };
            //console.log(`POKER RESULT ${JSON.stringify(result)}`);
    return result;
  }
  else return {user: user, wager: wager, status: checkWager.status, minimum: checkWager.minimum, maximum: checkWager.maximum};


  //   const checkWager = cashier.isValidWager(user, wager);
  //   if (checkWager.isValid) {
        
  //     if (activeGame.length > 0) {
  //       const evaluation = evaluator(JSON.parse(activeGame[0].fields.OpeningHand));
  //       console.log({evaluation});
  //         const result = {
  //             user: user,
  //             wager: activeGame[0].fields.WageredAmount,
  //             result: JSON.parse(activeGame[0].fields.OpeningHand),
  //             deck: JSON.parse(activeGame[0].fields.Deck),
  //             outcome: evaluation,
  //             status: "ACTIVE_GAME",
  //           };
  //         return result;
  //     }

  //     const game = await data.createGame(user, helper.VIDEOPOKER);
  //     const bet = await data.createWager(user, wager, "", game);

  //     let cardDeck = deck.create();
  //     let dealOutcome = deck.deal(cardDeck, 5);
  //     const hand = dealOutcome.hand;
  //     const evaluation = evaluator(hand);

  //     const pokerHand = await data.createPokerHand(game, hand, dealOutcome.deck);
  //     const updatedUser = await data.getUserByRecordId(user.fields.RecordId);

  //     //console.log({updatedUser});
  //     const result = {
  //         user: updatedUser,
  //         wager: wager,
  //         result: hand,
  //         deck: dealOutcome.deck,
  //         outcome: evaluation.outcome,
  //         status: "BEFORE_DRAW",
  //       };
  //       //console.log(`POKER RESULT ${JSON.stringify(result)}`);
  //     return result;
  // }
  // else return {user: user, wager: wager, status: checkWager.status, minimum: checkWager.minimum, maximum: checkWager.maximum};

    
}

module.exports = wager;