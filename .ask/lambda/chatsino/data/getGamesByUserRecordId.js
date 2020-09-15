//const d = debug("index:data:getUserByUsername");
const Airtable = require("airtable");
const fetch = require("node-fetch");
const keys = require("../keys");

function getGamesByUserRecordId(recordId, gameTypeId) {
  const url = `https://api.airtable.com/v0/${
    keys.airtable_base_data
  }/Game?api_key=${
    keys.airtable_api_key
  }&filterByFormula=AND(UserId%3D"${encodeURIComponent(recordId)}",Status%3D'Active',GameTypeId%3D'${gameTypeId}')`;
  //console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records);
}



module.exports = getGamesByUserRecordId;
