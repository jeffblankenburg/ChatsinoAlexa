const Airtable = require("airtable");
const keys = require("../keys");

function updatePoint(game, point) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Game").update(
      game.fields.RecordId,
      {
        Point: point,
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

module.exports = updatePoint;
