const Airtable = require("airtable");

function updateBalance(user, balance) {
  const airtable = new Airtable({ apiKey: process.env.airtable_api_key }).base(
    process.env.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("User").update(
      user.RecordId,
      {
        Currency: parseInt(balance),
      },
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

module.exports = updateBalance;
