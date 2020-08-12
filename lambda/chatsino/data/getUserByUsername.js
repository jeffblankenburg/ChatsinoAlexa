//const d = debug("index:data:getUserByUsername");
const fetch = require("node-fetch");
const dotenv = require('dotenv');

dotenv.config();

function getUserByUsername(username) {
  const url = `https://api.airtable.com/v0/${
    process.env.airtable_base_data
  }/User?api_key=${
    process.env.airtable_api_key
  }&filterByFormula=AND(Username%3D"${encodeURIComponent(username)}")`;
  // console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records[0]);
}

module.exports = getUserByUsername;
