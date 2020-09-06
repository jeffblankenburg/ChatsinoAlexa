const Airtable = require("airtable");
const fetch = require("node-fetch");

function getUserRecord(handlerInput) {
  console.log("GETTING USER RECORD");
  const userId = handlerInput.requestEnvelope.session.user.userId;

  const url = `https://api.airtable.com/v0/${
    process.env.airtable_base_data
  }/User?api_key=${
    process.env.airtable_api_key
  }&filterByFormula=%7BUserId%7D%3D%22${encodeURIComponent(userId)}%22&fields%5B%5D=RecordId&fields%5B%5D=Balance&fields%5B%5D=AvailableBalance&fields%5B%5D=CurrentWagers&fields%5B%5D=PokerGames&fields%5B%5D=SlotsGames&fields%5B%5D=RouletteGames&fields%5B%5D=TotalGames`;
  const options = {
    method: "GET",
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => {
      if (r.records.length === 0) {
        return createUserRecord();
      } else return r.records[0];
    });
}

function createUserRecord() {
  var airtable = new Airtable({ apiKey: process.env.airtable_api_key }).base(
    process.env.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("User").create({ UserId: userId }, function (err, record) {
      console.log("NEW USER RECORD = " + JSON.stringify(record));
      if (err) {
        console.error(err);
        return;
      }
      resolve(record);
    });
  });
}

module.exports = getUserRecord;
