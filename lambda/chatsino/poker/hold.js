const data = require("../data");
const helper = require("../helper");


async function hold(user, action, suit, value) {

    const activeGame = await data.getGamesByUserRecordId(user.fields.RecordId, helper.VIDEOPOKER);
    //console.log(`ACTIVE GAME ${JSON.stringify(activeGame)}`);
    if (activeGame.length > 0) {
        let openingHand = JSON.parse(activeGame[0].fields.OpeningHand);
        console.log(`OPENING HAND ${openingHand}`);
        //IF THERE IS NO SUIT OR VALUE, WE WILL USE THEIR COMMAND TO HOLD OR DROP ALL.
        if (action && !suit && !value) {
            for (let i = 0;i<openingHand.length;i++) {
                if (action[0].value.name === "hold") openingHand[i].held = true;
                else openingHand[i].held = false;
            }
        }
        else if (action && !suit) {
            for (let i = 0;i<openingHand.length;i++) {
                if (value[0].value.name.toLowerCase() === openingHand[i].value.name.toLowerCase()) {
                    if (action[0].value.name === "hold") openingHand[i].held = true;
                    else if (action[0].value.name === "drop") openingHand[i].held = false;
                }
            }
        }
        else if (action && !value) {
            for (let i = 0;i<openingHand.length;i++) {
                if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase()) {
                    if (action[0].value.name === "hold") openingHand[i].held = true;
                    else if (action[0].value.name === "drop") openingHand[i].held = false;
                }
            }
        }
        else if (action && suit && value) {
            for (let i = 0;i<openingHand.length;i++) {
                if (suit[0].value.name.toLowerCase() === openingHand[i].suit.name.toLowerCase() && value[0].value.name.toLowerCase() === openingHand[i].value.name.toLowerCase()) {
                    if (action[0].value.name === "hold") openingHand[i].held = true;
                    else if (action[0].value.name === "drop") openingHand[i].help = false;
                }
            }
        }

        //TODO: What if the user tries to hold a card that they don't have?
        //TODO: WHAT IF THE USER JUST SAYS THE NAME OF A CARD WITHOUT "HOLD" OR "DROP"?
        //TODO: RETURN AN OBJECT THAT ALEXA CAN USE TO LET THE USER KNOW THE CURRENT STATE.

        const videoPokerData = await data.updatePokerHand(activeGame[0], openingHand, JSON.parse(activeGame[0].fields.Deck))
        activeGame[0].fields.OpeningHand = openingHand;
        //activeGame[0].fields.Deck = deck;

        return {
            game: activeGame[0],

        }
    }
    else return {user: user, status: "NO_ACTIVE_GAME"}

    



}

module.exports = hold;