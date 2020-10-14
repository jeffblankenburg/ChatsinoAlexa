const Airtable = require("airtable");
const keys = require("../keys");
const getAllAchievementsByUser = require("./getAllAchievementsByUser");

async function deleteAllAchievementsByUser(user) {
    const wagers = await getAllAchievementsByUser(user);
    let deleteArray = [];
    if (wagers.length > 0) {
        for (let i = 0;i<wagers.length;i++) {
            deleteArray.push(wagers[i].fields.RecordId);
        }
        const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
        return new Promise((resolve, reject) => {
            airtable('UserAchievement').destroy(deleteArray, function(err, deletedRecords) {
                if (err) {
                  console.error(err);
                  return;
                }
                resolve(deletedRecords);
              });
        });
    }
}

module.exports = deleteAllAchievementsByUser;
