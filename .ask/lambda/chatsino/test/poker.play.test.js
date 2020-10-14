const poker = require("../poker");
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
  const result = await poker.play(user, 111);
  expect(result.user.RecordId).toBe(user.RecordId);
  expect(result.wager).toBe(111);
  expect(result.status).toBe("INVALID_WAGER");
});

// test("Values should match on return", async () => {
//   const result = await poker.play(user, 10);
//   //console.log(`RESULT USER FIELDS ${JSON.stringify(result.user.fields)}`);
//   expect(result.user.fields.RecordId).toBe(user.fields.RecordId);
//   expect(result.wager).toBe(10);
//   expect(result.user.fields.AvailableBalance).toBe(90);
// });

// test("Should return ACTIVE_GAME because a game is already in progress", async () => {
//     const firstresult = await poker.play(user, 10);
//     const result = await poker.play(user, 10);
//     expect(result.status).toBe("ACTIVE_GAME");
//     expect(result.user.fields.AvailableBalance).toBe(user.fields.AvailableBalance);
// });