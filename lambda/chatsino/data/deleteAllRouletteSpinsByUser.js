const Airtable = require("airtable");
const keys = require("../keys");
const getAllRouletteSpinsByUser = require("./getAllRouletteSpinsByUser");

async function deleteAllRouletteSpinsByUser(user) {
    const wagers = await getAllRouletteSpinsByUser(user);
    let deleteArray = [];
    if (wagers.length > 0) {
        for (let i = 0;i<wagers.length;i++) {
            deleteArray.push(wagers[i].fields.RecordId);
        }
        const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
        return new Promise((resolve, reject) => {
            airtable('Roulette').destroy(deleteArray, function(err, deletedRecords) {
                if (err) {
                  console.error(err);
                  return;
                }
                resolve(deletedRecords);
              });
        });
    }
}

module.exports = deleteAllRouletteSpinsByUser;
