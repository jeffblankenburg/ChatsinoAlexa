const Airtable = require("airtable");
const keys = require("../keys.js");

async function ledger(user, amount, type) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Ledger").create(
      { User: [user.fields.RecordId], Amount: amount, GameTypeId: [type] },
      (err, record) => {
        if (err) {
          console.error(err);
          return;
        }
        resolve(record);
      }
    );
  });
}

module.exports = ledger;
