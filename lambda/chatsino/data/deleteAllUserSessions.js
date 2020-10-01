const Airtable = require("airtable");
const keys = require("../keys");
const getAllSessionsByUser = require("./getAllSessionsByUser");

async function deleteAllUserSessions(user) {
    const sessions = await getAllSessionsByUser(user);
    let deleteArray = [];
    if (sessions.length > 0) {
        for (let i = 0;i<sessions.length;i++) {
            deleteArray.push(sessions[i].fields.RecordId);
        }
        const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
        return new Promise((resolve, reject) => {
            airtable('UserSession').destroy(deleteArray, function(err, deletedRecords) {
                if (err) {
                  console.error(err);
                  return;
                }
                resolve(deletedRecords);
              });
        });
    }
}

module.exports = deleteAllUserSessions;
