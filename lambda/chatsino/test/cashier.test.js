const cashier = require("../cashier");
const data = require("../data");
const craps = require("../craps");

let user;

beforeEach(async (done) => {
    user = await data.resetTestUser();
    done();
});

const validWager = {status: "VALID_WAGER", isValid: true};
const betAboveAvailableBalance = { status: "BET_ABOVE_AVAILABLE_BALANCE", isValid: false};

test('User bets 10, returns true object', () => {
    const validWagerCheck = cashier.isValidWager(user, 10);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets 110, returns false object', () => {
    const validWagerCheck = cashier.isValidWager(user, 110);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BET_ABOVE_AVAILABLE_BALANCE");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets "tacos", returns false object', () => {
    const validWagerCheck = cashier.isValidWager(user, "tacos");
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("NOT_A_NUMBER");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});

test('User bets -73, returns false object', () => {
    const validWagerCheck = cashier.isValidWager(user, -73);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("NEGATIVE_BET");
    //expect(craps.evaluator(1, 1, 0).win).toContain(craps.position.ONEROLL_2); 
});