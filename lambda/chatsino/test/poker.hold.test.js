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

//TRIES TO HOLD WITHOUT AN ACTIVE GAME.
test("Returns no active game when there is no active game.", async () => {
  const result = await poker.hold(user, "discard", { name: 'Spades', id: 4, symbol: '♠️' }, { name: 'Seven', id: 7, symbol: '7' });
  expect(result.status).toBe("NO_ACTIVE_GAME");
});

//TRIES TO HOLD CARD THAT DOESN'T EXIST.
test("Makes no changes to hold status when requested card doesn't exist.", async () => {
    const game = await poker.play(user, 10);
    const result = await poker.hold(user, "hold", 4, 7);
    expect(game.hand).toMatchObject(result.hand);
    expect(result.status).toBe("CARD_HOLD_UPDATED");
});

//TRIES TO HOLD SUIT THAT DOESN'T EXIST.
test("Makes no changes to hold status when requested suit doesn't exist.", async () => {
    const game = await poker.play(user, 10);
    const result = await poker.hold(user, "hold", 5);
    expect(game.hand).toMatchObject(result.hand);
    expect(result.status).toBe("CARD_HOLD_UPDATED");
});

//TRIES TO HOLD VALUE THAT DOESN'T EXIST.
test("Makes no changes to hold status when requested value doesn't exist.", async () => {
    const game = await poker.play(user, 10);
    const result = await poker.hold(user, "hold", undefined, 1);
    expect(game.hand).toMatchObject(result.hand);
    expect(result.status).toBe("CARD_HOLD_UPDATED");
});

//TRIES TO DROP CARD THAT IS HELD.

//TRIES TO DROP CARD THAT ISN'T HELD.

//TRIES TO HOLD CARD THAT IS ALREADY HELD.

//USER JUST SAYS SPADES (WITHOUT DROP OR HOLD).

//USER JUST SAYS SEVENS (WITHOUT DROP OR HOLD).





////FUTURE FEATURES
//TRIES TO HOLD THE IMPORTANT CARDS.  LIKE, "HOLD THE PAIR."