const fetch = require("node-fetch");
const keys = require("../keys");

async function getWagersByGame(game) {
  const url = `https://api.airtable.com/v0/${
    keys.airtable_base_data
  }/Wager?api_key=${
    keys.airtable_api_key
  }&filterByFormula=AND(GameId%3D"${encodeURIComponent(
    game.fields.RecordId
  )}",Status%3D"Active")`;
  //console.log(`FULL PATH ${url}`);
  const options = { method: "GET" };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records);
}

module.exports = getWagersByGame;
