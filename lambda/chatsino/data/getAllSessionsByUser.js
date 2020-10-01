const Airtable = require("airtable");
const fetch = require("node-fetch");
const keys = require("../keys");

function getAllSessionsByUser(user) {
  const url = `https://api.airtable.com/v0/${
    keys.airtable_base_data
  }/UserSession?api_key=${
    keys.airtable_api_key
  }&filterByFormula=AND(User%3D"${encodeURIComponent(user.fields.RecordId)}")`;
  //console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records);
}



module.exports = getAllSessionsByUser;
