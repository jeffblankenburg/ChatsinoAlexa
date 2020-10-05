const Airtable = require("airtable");
const keys = require("../keys");

async function createBlackjackHand(game, userHand, dealerHand, deck) {
  // console.log(`USER ${JSON.stringify(user.fields.RecordId)}`);
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Blackjack").create(
      {
        GameId: [game.fields.RecordId],
        OpeningUserHand: JSON.stringify(userHand),
        OpeningDealerHand: JSON.stringify(dealerHand),
        Deck: JSON.stringify(deck),
      },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        resolve(record);
      }
    );
  });
}

module.exports = createBlackjackHand;
