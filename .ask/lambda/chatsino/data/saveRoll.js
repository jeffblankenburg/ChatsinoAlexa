const Airtable = require("airtable");
const keys = require("../keys");

async function saveRoll(game, die1, die2) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Craps").create(
      {
        GameId: [game.fields.RecordId],
        Die_1: die1,
        Die_2: die2,
        UserId: game.fields.UserId
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

module.exports = saveRoll;
