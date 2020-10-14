//const d = debug("index:data:getUserByUsername");
const Airtable = require("airtable");
const fetch = require("node-fetch");
const keys = require("../keys");

function getUserByUserId(userId) {
  const url = `https://api.airtable.com/v0/${
    keys.airtable_base_data
  }/User?api_key=${
    keys.airtable_api_key
  }&filterByFormula=AND(AlexaUserId%3D"${encodeURIComponent(userId)}")`;
  //console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => {
      console.log(`R ${JSON.stringify(r)}`);
      if (r.records.length === 0) return createUserRecord(userId);
      return updateScore(r.records[0]);
    });
}

function createUserRecord(userId) {
  const values = { AlexaUserId: userId, Balance: 100 };
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("User").create(values, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(record);
    });
  });
}

function updateScore(user) {
  const airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(
    keys.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("User").update(
      user.fields.RecordId,
      {
        Balance: user.fields.Balance + 1,
      },
      (err, record) => {
        if (err) {
          console.error(err);
          return;
        }
        resolve(record);
      }
    );
  });
}

module.exports = getUserByUserId;
