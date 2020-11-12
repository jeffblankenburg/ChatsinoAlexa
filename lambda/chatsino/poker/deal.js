const cashier = require("../cashier");
const data = require("../data");
const deck = require("../deck");
const evaluator = require("./evaluator");
const helper = require("../helper");
const achievement = require("./achievement");

async function deal(user) {
    const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.VIDEOPOKER);
    if (activeGame.length > 0) {
        const activeWager = await data.getWagersByGame(activeGame[0]);

        console.log(`OPENING HAND ${activeGame[0].fields.OpeningHand}`);

        let pokerHand = JSON.parse(activeGame[0].fields.OpeningHand);
        let pokerDeck = JSON.parse(activeGame[0].fields.Deck);

        console.log(`POKER HAND ${pokerHand}`);

        for (let i = 0;i<pokerHand.length;i++) {
            if (pokerHand[i].held === false) {
                const dealOutcome = deck.deal(pokerDeck, 1);
                console.log(`DEAL OUTCOME ${dealOutcome.hand[0]}`)
                pokerDeck = dealOutcome.deck;
                pokerHand[i] = dealOutcome.hand[0];
            }
        }
        pokerHand = pokerHand.sort((a, b) => {return b.value.id - a.value.id});
        activeGame[0].fields.ClosingHand = pokerHand;
        const videoPokerRecord = await data.updatePokerHand(activeGame[0], JSON.parse(activeGame[0].fields.OpeningHand), pokerDeck, pokerHand)
        const evaluation = evaluator(pokerHand);
        let winnings = 0;
        
        if (evaluation.outcome) {
            winnings = parseInt(activeWager[0].fields.Amount) * parseInt(evaluation.outcome.odds);
        }
        else {
            winnings = -activeWager[0].fields.Amount;
        }

        const wagerUpdate = [{
            id: activeWager[0].fields.RecordId,
            fields: {
                Status: "Completed",
                Outcome: JSON.stringify(evaluation.outcome),
                Payout: winnings
            }
        }];
        const isWagerUpdated = await cashier.updateWagers(wagerUpdate)
        const isGameCompleted = await cashier.completeGame(activeGame[0]);

        user = await data.updateBalance(user, winnings);
        let achievementArray = await achievement(user);

        return {
            user: user,
            game: activeGame[0],
            outcome: evaluation.outcome,
            result: pokerHand,
            winnings: winnings,
            evaluation: evaluation,
            achievements: achievementArray,
            status: "COMPLETED",
        }


    }
    return {user: user, status: "NO_ACTIVE_GAME"};
}

module.exports = deal;