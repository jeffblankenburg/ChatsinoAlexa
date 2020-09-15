const Airtable = require("airtable");
const keys = require("../keys");
const getAllGamesByUser = require("./getAllGamesByUser");

async function deleteAllGamesByUser(user) {
    const wagers = await getAllGamesByUser(user);
    let deleteArray = [];
    if (wagers.length > 0) {
        for (let i = 0;i<wagers.length;i++) {
            deleteArray.push(wagers[i].fields.RecordId);
        }
        const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
        return new Promise((resolve, reject) => {
            airtable('Game').destroy(deleteArray, function(err, deletedRecords) {
                if (err) {
                  console.error(err);
                  return;
                }
                resolve(deletedRecords);
              });
        });
    }
}

module.exports = deleteAllGamesByUser;
