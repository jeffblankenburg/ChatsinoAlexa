const cashier = require("../cashier");
const data = require("../data");
const craps = require("../craps");

let user = {fields:{RecordId: "recbk1dFfqb0m8cLA", Balance:100, AvailableBalance:100}};

// beforeEach(async (done) => {
//     //user = await data.resetTestUser();
//     //done();
// });

afterAll(async (done) => {
    user = await data.resetTestUser();
    done();
  });

const validWager = {status: "VALID_WAGER", isValid: true};
const betAboveAvailableBalance = { status: "BET_ABOVE_AVAILABLE_BALANCE", isValid: false};

test('User bets 10, returns true object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 10);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets 110, returns false object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 110);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BET_ABOVE_AVAILABLE_BALANCE");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets "tacos", returns false object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, "tacos");
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("NOT_A_NUMBER");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets -73, returns false object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, -73);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("NEGATIVE_BET");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets 50 with balance of 100, returns true', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 50);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 51 with balance of 100, returns false', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 51);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 5 with balance of 20000, returns true', () => {
    setUserBalance(20000);
    const validWagerCheck = cashier.isValidWager(user, 5);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 4 with balance of 20000, returns false', () => {
    setUserBalance(20000);
    const validWagerCheck = cashier.isValidWager(user, 4);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 101 with balance of 20000, returns false', () => {
    setUserBalance(20000);
    const validWagerCheck = cashier.isValidWager(user, 101);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 10 with balance of 2=40000, returns true', () => {
    setUserBalance(40000);
    const validWagerCheck = cashier.isValidWager(user, 10);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 9 with balance of 40000, returns false', () => {
    setUserBalance(40000);
    const validWagerCheck = cashier.isValidWager(user, 9);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 501 with balance of 40000, returns false', () => {
    setUserBalance(40000);
    const validWagerCheck = cashier.isValidWager(user, 501);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 25 with balance of 80000, returns true', () => {
    setUserBalance(80000);
    const validWagerCheck = cashier.isValidWager(user, 25);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 24 with balance of 80000, returns false', () => {
    setUserBalance(80000);
    const validWagerCheck = cashier.isValidWager(user, 24);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 1001 with balance of 80000, returns false', () => {
    setUserBalance(80000);
    const validWagerCheck = cashier.isValidWager(user, 1001);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 50 with balance of 250000, returns true', () => {
    setUserBalance(250000);
    const validWagerCheck = cashier.isValidWager(user, 50);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 49 with balance of 250000, returns false', () => {
    setUserBalance(250000);
    const validWagerCheck = cashier.isValidWager(user, 49);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 5001 with balance of 250000, returns false', () => {
    setUserBalance(250000);
    const validWagerCheck = cashier.isValidWager(user, 5001);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 100 with balance of 1,000,000, returns true', () => {
    setUserBalance(1000000);
    const validWagerCheck = cashier.isValidWager(user, 100);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 99 with balance of 1,000,000, returns false', () => {
    setUserBalance(1000000);
    const validWagerCheck = cashier.isValidWager(user, 99);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 10001 with balance of 1,000,000 returns false', () => {
    setUserBalance(1000000);
    const validWagerCheck = cashier.isValidWager(user, 10001);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 250 with balance of 2,500,000, returns true', () => {
    setUserBalance(2500000);
    const validWagerCheck = cashier.isValidWager(user, 250);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets 249 with balance of 2,500,000, returns false', () => {
    setUserBalance(2500000);
    const validWagerCheck = cashier.isValidWager(user, 249);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 50001 with balance of 2,500,000 returns false', () => {
    setUserBalance(2500000);
    const validWagerCheck = cashier.isValidWager(user, 50001);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

/*
BETTING RANGES
0-20K: 1-50
20K-40K: 5-100
40K-80K: 10-500
80K-250K: 25-1000
250K-1M: 50-5000
1M-2.5M: 100-10,000
2.5M-10M: 250-50,000
*/

function setUserBalance(balance) {
    user.fields.Balance = balance;
    user.fields.AvailableBalance = balance;
}