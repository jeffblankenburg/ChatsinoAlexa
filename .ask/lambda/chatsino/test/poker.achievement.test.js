const data = require("../data");
const poker = require("../poker");

let user;

beforeAll(async (done) => {
    user = await data.resetTestUser();
    done();
});

afterEach(async (done) => {
    user = await data.resetTestUser();
    done();
  });

test('User has 1 poker game, gets POKER_GAME_1 achievement', async () => {
    user.fields.PokerGames = 1;
    const result = await poker.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("POKER_GAME_1");
});

test('User has 5 poker games, gets POKER_GAME_5 achievement', async () => {
    user.fields.PokerGames = 5;
    const result = await poker.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("POKER_GAME_5");
});


test('User has 1 pair, gets POKER_PAIR_1 achievement', async () => {
    user.fields.PokerPairCount = 1;
    const result = await poker.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("POKER_PAIR_1");
});

test('User has 1 two pair, gets POKER_TWOPAIR_1 achievement', async () => {
    user.fields.PokerTwoPairCount = 1;
    const result = await poker.achievement(user);
    expect(result.length).toBe(1);
    expect(result[0].fields.Code).toBe("POKER_TWOPAIR_1");
});

// test('User has 1 three of a kind, gets POKER_THREEOFAKIND_1 achievement', async () => {
//     user.fields.PokerThreeOfAKindCount = 1;
//     const result = await poker.achievement(user);
//     expect(result.length).toBe(1);
//     expect(result[0].fields.Code).toBe("POKER_THREEOFAKIND_1");
// });

// test('User has one pair on first poker hand, gets POKER_GAME_1, POKER_PAIR_1 achievements', async () => {
//     user.fields.PokerGames = 1;
//     user.fields.PokerPairCount = 1;
//     const result = await poker.achievement(user);
//     expect(result.length).toBe(2);
//     expect(result[0].fields.Code).toBe("POKER_GAME_1");
//     expect(result[1].fields.Code).toBe("POKER_PAIR_1");
// });
