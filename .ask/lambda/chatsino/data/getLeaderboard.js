const Airtable = require('airtable');
const fetch = require('node-fetch');
const keys = require('../keys.js');

function getLeaderboard(user) {
  const url = `https://api.airtable.com/v0/${keys.airtable_base_data}/User?api_key=${keys.airtable_api_key}&sort%5B0%5D%5Bfield%5D=Balance&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=5`;
  // console.log(`FULL PATH ${url}`);
  const options = { method: 'GET' };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => r.records);
}

module.exports = getLeaderboard;
