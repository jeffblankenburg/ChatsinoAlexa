const fetch = require("node-fetch");
const {summary} = require("date-streaks");
const keys = require("../keys");
const updateBalance = require("./updateBalance");

async function getUserStreak(user) {
  
  const url = `https://api.airtable.com/v0/${keys.airtable_base_data}/UserSession?api_key=${keys.airtable_api_key}&filterByFormula=AND(User%3D"${encodeURIComponent(user.fields.RecordId)}")&sort%5B0%5D%5Bfield%5D=CreatedDate&sort%5B0%5D%5Bdirection%5D=desc`;
  //console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  const records = await fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records);

    let sessionSet = new Set();
    records.forEach(s => sessionSet.add(s.fields.CreatedDate));
    console.log({sessionSet});

    const streak = summary(Array.from(sessionSet));
    if (streak.withinCurrentStreak && !streak.todayInStreak) {
      let newUser = "";
      switch((streak.currentStreak+1) % 7) {
        case 1: newUser = await updateBalance(user, 10); break;
        case 2: newUser = await updateBalance(user, 50); break;
        case 3: newUser = await updateBalance(user, 150); break;
        case 4: newUser = await updateBalance(user, 500); break;
        case 5: newUser = await updateBalance(user, 1000); break;
        case 6: newUser = await updateBalance(user, 2000); break;
        case 0: newUser = await updateBalance(user, 5000); break;
      }
    }

    return streak;
}

module.exports = getUserStreak;
