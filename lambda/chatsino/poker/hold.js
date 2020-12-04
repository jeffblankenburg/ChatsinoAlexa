const data = require("../data");
const helper = require("../helper");
const evaluator = require("./evaluator");


async function hold(user, action, suit, value) {

    //console.log({action});
    //console.log({suit});
    //console.log({value});


    const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.VIDEOPOKER);
    if (activeGame.length > 0) {
        let openingHand = JSON.parse(activeGame[0].fields.OpeningHand);
        //console.log(`OPENING HAND ${JSON.stringify(openingHand)}`);
        if (action) {
            if (!suit && !value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (action[0].value.name === "hold") openingHand[i].held = true;
                    else openingHand[i].held = false;
                }
            }
            else if (value && !suit) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (parseInt(value) === openingHand[i].value.id) {
                        if (action === "hold") openingHand[i].held = true;
                        else if (action === "discard") openingHand[i].held = false;
                    }
                }
            }
            else if (suit && !value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (parseInt(suit) === parseInt(openingHand[i].suit.id)) {
                        if (action === "hold") openingHand[i].held = true;
                        else if (action === "discard") openingHand[i].held = false;
                    }
                }
            }
            else if (suit && value) {
                console.log({suit});
                console.log({value});
                for (let i = 0;i<openingHand.length;i++) {
                    if (parseInt(suit) === parseInt(openingHand[i].suit.id) && parseInt(value) === parseInt(openingHand[i].value.id)) {
                        if (action === "hold") openingHand[i].held = true;
                        else if (action === "discard") openingHand[i].held = false;
                    }
                }
            }
        }
        else {
            if (!suit && value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (value[0].value.id === openingHand[i].value.id) {
                        openingHand[i].held = true;
                    }
                }
            }
            else if (suit && !value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase()) {
                        openingHand[i].held = true;
                    }
                }
            }
            else if (suit && value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase() && parseInt(value[0].value.id) === parseInt(openingHand[i].value.id)) {
                        openingHand[i].held = true;
                    }
                }
            }
        }



        const videoPokerData = await data.updatePokerHand(activeGame[0], openingHand, JSON.parse(activeGame[0].fields.Deck), undefined);
        activeGame[0].fields.OpeningHand = openingHand;
        const evaluation = evaluator(openingHand);

        return {
            user: user,
            wager: activeGame[0].fields.WageredAmount,
            hand: openingHand,
            game: activeGame[0],
            outcome: evaluation.outcome,
            status: "CARD_HOLD_UPDATED",
            action: action,
            suit: suit,
            value: value
        }
    }
    else return {user: user, status: "NO_ACTIVE_GAME"}

    



}

module.exports = hold;