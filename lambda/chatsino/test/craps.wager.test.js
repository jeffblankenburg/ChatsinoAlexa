const craps = require("../craps");
const data = require("../data");

let user;

beforeEach(async (done) => {
    user = await data.resetTestUser();
    done();
});

afterAll(async (done) => {
    user = await data.resetTestUser();
    done();
});

test("Invalid wager when more than AvailableBalance", async () => {
    const result = await craps.wager(user, 111, "PASS");
    expect(result.user.RecordId).toBe(user.RecordId);
    expect(result.wager).toBe(111);
    expect(result.status).toBe("INVALID_WAGER");
});

// test("Values should match on return", async () => {
//     const result = await craps.wager(user, 10, "PASS");
//     //console.log(`RESULT USER FIELDS ${JSON.stringify(result.user.fields)}`);
//     expect(result.user.fields.RecordId).toBe(user.fields.RecordId);
//     expect(result.wager).toBe(10);
//     expect(result.user.fields.AvailableBalance).toBe(90);
//   });