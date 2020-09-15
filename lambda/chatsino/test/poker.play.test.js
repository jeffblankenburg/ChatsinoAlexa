const poker = require("../poker");

let user;

beforeEach(() => {
  user = resetUser();
});

test("Values should match on return", async () => {
    const result = await poker.play(user, 10);
    //console.log(`RESULT USER FIELDS ${JSON.stringify(result.user.fields)}`);
    expect(result.user.fields.RecordId).toBe(user.fields.RecordId);
    expect(result.wager).toBe(10);
    expect(result.user.fields.AvailableBalance).toBe(90);
});

test("Should return ACTIVE_GAME because a game is already in progress", async () => {
    const result = await poker.play(user, 10);
    expect(result.status).toBe("ACTIVE_GAME");
    expect(result.user.fields.AvailableBalance).toBe(user.fields.AvailableBalance);
});

function resetUser() {
    return {
      fields: {
        RecordId: "recbk1dFfqb0m8cLA",
        AvailableBalance: 100,
        Balance: 100,
      },
    };
  }