const data = require("../data");
const poker = require("../slots");

let user;

beforeEach(async (done) => {
    user = await data.resetTestUser();
    done();
});

afterAll(async (done) => {
    user = await data.resetTestUser();
    done();
  });

test('User has 1 slots game, gets SLOTS_GAME_1 achievement', async () => {
    user.fields.SlotsGames = 1;
    const result = await poker.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("SLOTS_GAME_1");
});

test('User has 5 slots games, gets SLOTS_GAME_5 achievement', async () => {
    user.fields.SlotsGames = 5;
    const result = await poker.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("SLOTS_GAME_5");
});

