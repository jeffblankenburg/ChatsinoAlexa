const cashier = require("../cashier");
const data = require("../data");

beforeEach(async (done) => {
    user = await data.resetTestUser();
    done();
});

function setUserBalance(balance) {
    user.fields.Balance = balance;
    user.fields.AvailableBalance = balance;
}

test('User bets 10, returns true object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 10);
    expect(validWagerCheck.isValid).toBe(true);
    expect(validWagerCheck.status).toBe("VALID_WAGER");
});

test('User bets -10, returns false object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, -10);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BELOW_MINIMUM_LIMIT");
});

test('User bets 100, returns false object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 100);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("ABOVE_MAXIMUM_LIMIT");
});

test('User bets 1000, returns false object', () => {
    setUserBalance(100);
    const validWagerCheck = cashier.isValidWager(user, 1000);
    expect(validWagerCheck.isValid).toBe(false);
    expect(validWagerCheck.status).toBe("BET_ABOVE_AVAILABLE_BALANCE");
});