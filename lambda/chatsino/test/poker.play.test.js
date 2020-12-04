const poker = require("../poker");
const userFactory = require("./user.factory")
////const data = require("../data");

//let user;

// beforeEach(async (done) => {
//   user = await data.resetTestUser();
//   done();
// });

// afterAll(async (done) => {
//   user = await data.resetTestUser();
//   done();
// });

// test("Returns an active game when user has an active game.", async () => {
//   const gameStart = await poker.play(user, 10);
//   const result = await poker.play(user, 10);
//   expect(result.user.RecordId).toBe(user.RecordId);
//   expect(result.wager).toBe(10);
//   expect(result.hand.length).toBe(5);
//   expect(result.deck.length).toBe(47);
//   expect(result.status).toBe("ACTIVE_GAME");
// });

// test("Returns a new game when user starts a new game.", async () => {
//   const result = await poker.play(user, 10);
//   expect(result.user.RecordId).toBe(user.RecordId);
//   expect(result.wager).toBe(10);
//   expect(result.hand.length).toBe(5);
//   expect(result.deck.length).toBe(47);
//   expect(result.status).toBe("BEFORE_DRAW");
// });

jest.mock("../cashier");
const cashier = require("../cashier");


//return {user: user, wager: wager, status: checkWager.status, minimum: checkWager.minimum, maximum: checkWager.maximum};
// const mockIsValidWager = jest.fn();
// jest.mock('../cashier', () => {
//   return jest.fn().mockImplementation(() => {
//     return {isValidWager: mockIsValidWager};
//   });
// });


test("Returns invalid wager information.", async () => {
  const user = userFactory.createUser(100);
  const checkWagerResult = {isValid: false, status: "NOT_A_NUMBER", minimum: 0, maximum: 50};
  cashier.isValidWager.mockReturnValue(checkWagerResult);
  const result = await poker.play(user, "taco");
  expect(result.status).toBe("NOT_A_NUMBER");
  expect(result.user.fields.RecordId).toBe(user.fields.RecordId);
});

jest.mock("../data");
const data = require("../data");

test("Has active game", async () => {
  const user = userFactory.createUser(100);
  const checkWagerResult = {isValid: true, status: "VALID_WAGER", minimum: 0, maximum: 50};
  const checkOpeningHand = [{fields:{
          OpeningHand:'[{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Nine","id":9,"symbol":"9"},"held":false},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Eight","id":8,"symbol":"8"},"held":false},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Eight","id":8,"symbol":"8"},"held":false},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Four","id":4,"symbol":"4"},"held":false},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Two","id":2,"symbol":"2"},"held":false}]',
          Deck:'[{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Three","id":3,"symbol":"3"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Ace","id":14,"symbol":"A"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Five","id":5,"symbol":"5"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Four","id":4,"symbol":"4"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Ten","id":10,"symbol":"10"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Six","id":6,"symbol":"6"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Jack","id":11,"symbol":"J"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Ace","id":14,"symbol":"A"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Jack","id":11,"symbol":"J"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Eight","id":8,"symbol":"8"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Six","id":6,"symbol":"6"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Queen","id":12,"symbol":"Q"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Two","id":2,"symbol":"2"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Three","id":3,"symbol":"3"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Seven","id":7,"symbol":"7"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Five","id":5,"symbol":"5"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Six","id":6,"symbol":"6"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Seven","id":7,"symbol":"7"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Nine","id":9,"symbol":"9"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"King","id":13,"symbol":"K"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Two","id":2,"symbol":"2"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Five","id":5,"symbol":"5"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Five","id":5,"symbol":"5"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Ten","id":10,"symbol":"10"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Queen","id":12,"symbol":"Q"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"King","id":13,"symbol":"K"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Three","id":3,"symbol":"3"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"King","id":13,"symbol":"K"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Ace","id":14,"symbol":"A"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Four","id":4,"symbol":"4"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Queen","id":12,"symbol":"Q"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Ten","id":10,"symbol":"10"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Two","id":2,"symbol":"2"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Four","id":4,"symbol":"4"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Seven","id":7,"symbol":"7"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Six","id":6,"symbol":"6"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"Nine","id":9,"symbol":"9"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Three","id":3,"symbol":"3"}},{"suit":{"name":"Clubs","id":3,"symbol":"♣️"},"value":{"name":"Eight","id":8,"symbol":"8"}},{"suit":{"name":"Hearts","id":1,"symbol":"❤"},"value":{"name":"Queen","id":12,"symbol":"Q"}},{"suit":{"name":"Diamonds","id":2,"symbol":"♦️"},"value":{"name":"King","id":13,"symbol":"K"}},{"suit":{"name":"Spades","id":4,"symbol":"♠️"},"value":{"name":"Nine","id":9,"symbol":"9"}}]'
        }}];
  cashier.isValidWager.mockReturnValue(checkWagerResult);
  data.getGamesByUserRecordId.mockResolvedValue(checkOpeningHand);
  const result = await poker.play(user, 10);
  expect(result.status).toBe("ACTIVE_GAME");
  expect(result.hand[0].suit.name).toBe("Clubs");
  expect(result.outcome).toBe(poker.position.PAIR);
  
});
