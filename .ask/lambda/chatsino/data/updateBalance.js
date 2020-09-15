const Airtable = require("airtable");
const keys = require("../keys");

function updateBalance(user, winnings) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  //console.log(`BALANCE ${user.fields.Balance}`);
  const balance = user.fields.Balance + winnings;
  //console.log(`UPDATED BALANCE ${balance}`);
  return new Promise((resolve, reject) => {
    airtable("User").update(
      user.fields.RecordId,
      {
        Balance: balance,
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

module.exports = updateBalance;
