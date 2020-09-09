const Airtable = require("airtable");
const keys = require("../keys");
const getWagersByPosition = require("./getWagersByPosition");

async function deleteUserWagersByPosition(user, position) {
    const wagers = await getWagersByPosition(user, position);
    let amount = 0;
    let deleteArray = [];
    if (wagers.length > 0) {
        for (let i = 0;i<wagers.length;i++) {
            amount += parseInt(wagers[i].fields.Amount);
            deleteArray.push(wagers[i].fields.RecordId);
        }
        const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
        return new Promise((resolve, reject) => {
            airtable('Wager').destroy(deleteArray, function(err, deletedRecords) {
                if (err) {
                  console.error(err);
                  return;
                }
                resolve({amount: amount, position: position});
              });
        });
    }
    else {
        return {amount: 0, position: position};
    }
}

module.exports = deleteUserWagersByPosition;
