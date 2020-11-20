const Airtable = require("airtable");
const keys = require("../keys");

async function updatePokerHand(gameId, hand, deck, closingHand) {
  // console.log(`USER ${JSON.stringify(user.fields.RecordId)}`);
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("VideoPoker").update(gameId, 
      {
        OpeningHand: JSON.stringify(hand),
        Deck: JSON.stringify(deck),
        ClosingHand: JSON.stringify(closingHand)
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

module.exports = updatePokerHand;
