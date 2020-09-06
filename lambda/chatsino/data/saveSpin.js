const Airtable = require("airtable");
const keys = require("../keys");

async function saveSpin(game, spin) {
  // console.log(`USER ${JSON.stringify(user.fields.RecordId)}`);
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Roulette").create(
      {
        GameId: [game.fields.RecordId],
        Spin: spin
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

module.exports = saveSpin;
