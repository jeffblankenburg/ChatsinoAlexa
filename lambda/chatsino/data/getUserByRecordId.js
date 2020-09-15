//const d = debug("index:data:getUserByUsername");
const Airtable = require("airtable");
const fetch = require("node-fetch");
const keys = require("../keys");

function getUserByRecordId(recordId) {
  const url = `https://api.airtable.com/v0/${
    keys.airtable_base_data
  }/User?api_key=${
    keys.airtable_api_key
  }&filterByFormula=AND(RecordId%3D"${encodeURIComponent(recordId)}")`;
  //console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records[0]);
}

module.exports = getUserByRecordId;
