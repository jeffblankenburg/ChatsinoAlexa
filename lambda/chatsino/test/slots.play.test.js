const slots = require("../slots");

let user;

beforeAll(() => {
  user = resetUser();
});

test("User ID should match on return", async () => {
  const result = await slots.play(user, 10);
  expect(result.user.RecordId).toBe(user.RecordId);
  expect(result.wager).toBe(10);
  if (result.outcome) expect(result.user.fields.Balance > 110);
  else expect(result.user.fields.Balance).toBe(100);
});

test("Invalid wager when more than AvailableBalance", async () => {
  const result = await slots.play(user, 111);
  expect(result.user.RecordId).toBe(user.RecordId);
  expect(result.wager).toBe(111);
});

function resetUser() {
  return {
    fields: {
      RecordId: "recbk1dFfqb0m8cLA",
      AvailableBalance: 110,
      Balance: 110,
    },
  };
}
