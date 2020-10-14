const Airtable = require("airtable");
const keys = require("../keys");

async function saveSession(user, platform) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("UserSession").create(
      {
        User: [user.fields.RecordId],
        Platform: platform
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

module.exports = saveSession;
