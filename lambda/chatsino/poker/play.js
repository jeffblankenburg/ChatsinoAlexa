const cashier = require("../cashier");
const data = require("../data");
const deck = require("../deck");
const evaluator = require("./evaluator");
const helper = require("../helper");

async function play(user, wager) {
    if (cashier.isValidWager(user, wager)) {
        const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId);
        if (activeGame.length > 0) {
            const result = {
                user: user,
                wager: activeGame[0].fields.WageredAmount,
                result: JSON.parse(activeGame[0].fields.OpeningHand),
                deck: JSON.parse(activeGame[0].fields.Deck),
                outcome: evaluator(JSON.parse(activeGame[0].fields.OpeningHand)),
                status: "ACTIVE_GAME",
              };
            return result;
        }

        const game = await data.createGame(user, helper.VIDEOPOKER);
        const bet = await data.createWager(user, wager, game);

        let cardDeck = deck.create();
        let dealOutcome = deck.deal(cardDeck, 5);
        const hand = dealOutcome.hand;
        const outcome = evaluator(hand);

        const pokerHand = await data.createPokerHand(game, hand, dealOutcome.deck);
        const result = {
            user: user,
            wager: wager,
            result: hand,
            deck: dealOutcome.deck,
            outcome: outcome,
            status: "BEFORE_DRAW",
          };
          console.log(`POKER RESULT ${JSON.stringify(result)}`);
        return result;
    }
    else return {user: user, wager: wager, status: "INVALID_WAGER"}
}

module.exports = play;