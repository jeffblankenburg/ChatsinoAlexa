const cashier = require("../cashier");
const data = require("../data");
const deck = require("../deck");
const evaluator = require("./evaluator");
const helper = require("../helper");

async function play(user, wager) {
  const checkWager = cashier.isValidWager(user, wager);
  if (checkWager.isValid) {
      const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.VIDEOPOKER);
      if (activeGame.length > 0) {
        const evaluation = evaluator(JSON.parse(activeGame[0].fields.OpeningHand));
        //console.log({evaluation});
          const result = {
              user: user,
              wager: activeGame[0].fields.WageredAmount,
              hand: JSON.parse(activeGame[0].fields.OpeningHand),
              deck: JSON.parse(activeGame[0].fields.Deck),
              outcome: evaluation.outcome,
              status: "ACTIVE_GAME",
            };
          return result;
      }

      const game = await data.createGame(user, helper.VIDEOPOKER);
      const bet = await data.createWager(user, wager, "", game);

      let cardDeck = deck.create();
      let dealOutcome = deck.deal(cardDeck, 5);
      const hand = dealOutcome.hand;
      const evaluation = evaluator(hand);

      const pokerHand = await data.createPokerHand(game, hand, dealOutcome.deck);
      const updatedUser = await data.getUserByRecordId(user.fields.RecordId);

      const result = {
          game: game,
          user: updatedUser,
          wager: wager,
          hand: hand,
          deck: dealOutcome.deck,
          outcome: evaluation.outcome,
          status: "BEFORE_DRAW",
        };
        //console.log(`POKER RESULT ${JSON.stringify(result)}`);
      return result;
  }
  else return {user: user, wager: wager, status: checkWager.status, minimum: checkWager.minimum, maximum: checkWager.maximum};
}

module.exports = play;