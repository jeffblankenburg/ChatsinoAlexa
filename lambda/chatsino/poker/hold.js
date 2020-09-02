const data = require("../data");
const helper = require("../helper");


async function hold(user, action, suit, value) {

    const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.VIDEOPOKER);
    if (activeGame.length > 0) {
        let openingHand = JSON.parse(activeGame[0].fields.OpeningHand);
        if (action) {
            if (!suit && !value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (action[0].value.name === "hold") openingHand[i].held = true;
                    else openingHand[i].held = false;
                }
            }
            else if (value && !suit) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (value[0].value.name.toLowerCase() === openingHand[i].value.name.toLowerCase()) {
                        if (action[0].value.name === "hold") openingHand[i].held = true;
                        else if (action[0].value.name === "discard") openingHand[i].held = false;
                    }
                }
            }
            else if (suit && !value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase()) {
                        if (action[0].value.name === "hold") openingHand[i].held = true;
                        else if (action[0].value.name === "discard") openingHand[i].held = false;
                    }
                }
            }
            else if (suit && value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase() && value[0].value.name.toLowerCase() === openingHand[i].value.name.toLowerCase()) {
                        if (action[0].value.name === "hold") openingHand[i].held = true;
                        else if (action[0].value.name === "discard") openingHand[i].help = false;
                    }
                }
            }
        }
        else {
            if (!suit && value) {
                for (let i = 0;i<openingHand.length;i++) {
                    if (value[0].value.name.toLowerCase() === openingHand[i].value.name.toLowerCase()) {
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
                    if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase() && value[0].value.name.toLowerCase() === openingHand[i].value.name.toLowerCase()) {
                        openingHand[i].held = true;
                    }
                }
            }
        }



        const videoPokerData = await data.updatePokerHand(activeGame[0], openingHand, JSON.parse(activeGame[0].fields.Deck), undefined);
        activeGame[0].fields.OpeningHand = openingHand;

        return {
            user: user,
            action: action,
            suit: suit,
            value: value,
            game: activeGame[0],
            status: "CARD_HOLD_UPDATED"
        }
    }
    else return {user: user, status: "NO_ACTIVE_GAME"}

    



}

module.exports = hold;