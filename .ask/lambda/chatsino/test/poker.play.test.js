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

test("Returns an active game when user has an active game.", async () => {
  const gameStart = await poker.play(user, 10);
  const result = await poker.play(user, 10);
  expect(result.user.RecordId).toBe(user.RecordId);
  expect(result.wager).toBe(10);
  expect(result.hand.length).toBe(5);
  expect(result.deck.length).toBe(47);
  expect(result.status).toBe("ACTIVE_GAME");
});

test("Returns a new game when user starts a new game.", async () => {
  const result = await poker.play(user, 10);
  expect(result.user.RecordId).toBe(user.RecordId);
  expect(result.wager).toBe(10);
  expect(result.hand.length).toBe(5);
  expect(result.deck.length).toBe(47);
  expect(result.status).toBe("BEFORE_DRAW");
});