const Airtable = require("airtable");
const keys = require("../keys");

async function completeGame(game) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Game").update(
      game.fields.RecordId,
      {
        Status: "Completed",
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

module.exports = completeGame;
