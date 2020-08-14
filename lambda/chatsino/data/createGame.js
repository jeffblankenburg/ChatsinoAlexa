const Airtable = require("airtable");
const keys = require("../keys");

async function createGame(user, type) {
  // console.log(`USER ${JSON.stringify(user.fields.RecordId)}`);
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("Game").create(
      {
        GameTypeId: [type],
        Status: "Active",
        UserId: [user.fields.RecordId],
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

module.exports = createGame;
