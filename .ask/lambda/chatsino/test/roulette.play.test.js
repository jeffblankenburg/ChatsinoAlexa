const roulette = require("../roulette");
const data = require("../data");

beforeEach(async (done) => {
    user = await data.resetTestUser();
    done();
});

test("Values should match on return", async () => {
    const result = await roulette.wager(user, 10, "RED");
    //console.log(`RESULT USER FIELDS ${JSON.stringify(result.user.fields)}`);
    expect(result.user.fields.RecordId).toBe(user.fields.RecordId);
    expect(result.wager).toBe(10);
    expect(result.user.fields.AvailableBalance).toBe(90);
  });