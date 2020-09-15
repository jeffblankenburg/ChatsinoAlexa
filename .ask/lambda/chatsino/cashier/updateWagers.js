const Airtable = require("airtable");
const keys = require("../keys");

async function updateWagers(wagerArray) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Wager").update(wagerArray, function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      resolve(true);
    });
  });
}

module.exports = updateWagers;
