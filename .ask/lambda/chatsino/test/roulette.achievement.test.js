const data = require("../data");
const roulette = require("../roulette");

let user;

beforeEach(async (done) => {
    user = await data.resetTestUser();
    done();
});

afterAll(async (done) => {
    user = await data.resetTestUser();
    done();
  });

test('User has 1 roulette game, gets ROULETTE_SPIN_1 achievement', async () => {
    user.fields.RouletteGames = 1;
    const result = await roulette.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("ROULETTE_SPIN_1");
});

test('User has 5 roulette games, gets ROULETTE_SPIN_5 achievement', async () => {
    user.fields.RouletteGames = 5;
    const result = await roulette.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("ROULETTE_SPIN_5");
});

