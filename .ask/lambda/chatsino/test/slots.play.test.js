const slots = require("../slots");
const data = require("../data");

let user;

beforeEach(async (done) => {
  user = await data.resetTestUser();
  done();
});

test("User ID should match on return", async () => {
  const result = await slots.play(user, 10);
  //console.log({result});
  expect(result.user.RecordId).toBe(user.RecordId);
  expect(result.wager).toBe(10);
  if (result.outcome) expect(result.user.fields.Balance > 110);
  else expect(result.user.fields.Balance).toBe(100);
});

// test("Invalid wager when more than AvailableBalance", async () => {
//   const result = await slots.play(user, 111);
//   expect(result.user.RecordId).toBe(user.RecordId);
//   expect(result.wager).toBe(111);
// });
