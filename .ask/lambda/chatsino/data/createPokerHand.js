const Airtable = require("airtable");
const keys = require("../keys");

async function createPokerHand(game, hand, deck) {
  // console.log(`USER ${JSON.stringify(user.fields.RecordId)}`);
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("VideoPoker").create(
      {
        GameId: [game.fields.RecordId],
        OpeningHand: JSON.stringify(hand),
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

module.exports = createPokerHand;
