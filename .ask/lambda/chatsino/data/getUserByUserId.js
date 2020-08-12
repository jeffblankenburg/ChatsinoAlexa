//const d = debug("index:data:getUserByUsername");
const Airtable = require("airtable");
const fetch = require("node-fetch");
const dotenv = require('dotenv');

dotenv.config();

function getUserByUserId(userId) {
  const url = `https://api.airtable.com/v0/${
    process.env.airtable_base_data
  }/User?api_key=${
    process.env.airtable_api_key
  }&filterByFormula=AND(UserId%3D"${encodeURIComponent(userId)}")`;
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
  const values = { UserId: userId, Currency: 100 };
  const airtable = new Airtable({ apiKey: process.env.airtable_api_key }).base(
    process.env.airtable_base_data
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
  const airtable = new Airtable({ apiKey: process.env.airtable_api_key }).base(
    process.env.airtable_base_data
  );
  return new Promise((resolve, reject) => {
    airtable("User").update(
      user.fields.RecordId,
      {
        Currency: user.fields.Currency + 1,
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
