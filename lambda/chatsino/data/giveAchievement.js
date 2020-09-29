const fetch = require("node-fetch");
const keys = require("../keys");
const Airtable = require("airtable");
const updateBalance = require("./updateBalance");

async function giveAchievement(user, achievement) {
    const url = `https://api.airtable.com/v0/${keys.airtable_base_data}/Achievement?api_key=${keys.airtable_api_key}&filterByFormula=AND(IsDisabled%3DFALSE(),Code=%22${achievement}%22)`;
    console.log(`FULL PATH ${url}`);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
    .then((res) => res.json())
    .then(async (r) => {
      if (r.records.length > 0) {
        const achievement = r.records[0];
        if (!achievement.fields.UserAchievement || (achievement.fields.UserAchievement && !achievement.fields.User.includes(user.fields.RecordId))) {
            const newUser = await updateBalance(user, achievement.fields.Bonus);
            const achievementRecord = await createUserAchievementRecord(user.fields.RecordId, achievement.fields.RecordId);
            return achievement;
        }
      }

      return undefined;
    });
}

function createUserAchievementRecord(userId, achievementId) {
    var airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
    return new Promise((resolve, reject) => {
      airtable("UserAchievement").create(
        { User: [userId], Achievement: [achievementId] },
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

module.exports = giveAchievement;