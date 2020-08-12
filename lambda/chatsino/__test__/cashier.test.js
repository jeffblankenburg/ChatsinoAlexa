const cashier = require("../cashier");

let user = { fields: { AvailableFunds: 10 } };
let rouletteGame = { fields: { GameType: "roulette" } };
let crapsGame = { fields: { GameType: "craps" } };

beforeEach(() => {
  user = { fields: { AvailableFunds: 10 } };
  rouletteGame = { fields: { GameType: "roulette" } };
  crapsGame = { fields: { GameType: "craps" } };
});

// IS VALID WAGER?
test("taco is NOT VALID", () => {
  expect(cashier.isValidWager(user, "taco")).toBe(false);
});
test("10 is VALID", () => {
  expect(cashier.isValidWager(user, 10)).toBe(true);
});
test("11 is NOT VALID", () => {
  expect(cashier.isValidWager(user, 11)).toBe(false);
});
test("0 is NOT VALID", () => {
  expect(cashier.isValidWager(user, 0)).toBe(false);
});
test("-22 is NOT VALID", () => {
  expect(cashier.isValidWager(user, -22)).toBe(false);
});
test("taco47 is NOT VALID", () => {
  expect(cashier.isValidWager(user, "taco47")).toBe(false);
});
test("!27 is NOT VALID", () => {
  expect(cashier.isValidWager(user, !27)).toBe(false);
});

// IS VALID POSITION?
test("RED is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("red", rouletteGame)).toBe(true);
});
test("red is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("RED", rouletteGame)).toBe(true);
});
test("black is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("black", rouletteGame)).toBe(true);
});
test("BLACK is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("BLACK", rouletteGame)).toBe(true);
});
test("odd is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("odd", rouletteGame)).toBe(true);
});
test("ODD is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("ODD", rouletteGame)).toBe(true);
});
test("even is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("even", rouletteGame)).toBe(true);
});
test("EVEN is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("EVEN", rouletteGame)).toBe(true);
});
test("top is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("top", rouletteGame)).toBe(true);
});
test("TOP is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("TOP", rouletteGame)).toBe(true);
});
test("bottom is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("bottom", rouletteGame)).toBe(true);
});
test("BOTTOM is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("BOTTOM", rouletteGame)).toBe(true);
});
test("low is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("low", rouletteGame)).toBe(true);
});
test("LOW is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("LOW", rouletteGame)).toBe(true);
});
test("middle is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("middle", rouletteGame)).toBe(true);
});
test("MIDDLE is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("MIDDLE", rouletteGame)).toBe(true);
});
test("high is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("high", rouletteGame)).toBe(true);
});
test("HIGH is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("HIGH", rouletteGame)).toBe(true);
});

test("0 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("0", rouletteGame)).toBe(true);
});
test("1 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("1", rouletteGame)).toBe(true);
});
test("2 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("2", rouletteGame)).toBe(true);
});
test("3 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("3", rouletteGame)).toBe(true);
});
test("4 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("4", rouletteGame)).toBe(true);
});
test("5 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("5", rouletteGame)).toBe(true);
});
test("6 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("6", rouletteGame)).toBe(true);
});
test("7 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("7", rouletteGame)).toBe(true);
});
test("8 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("8", rouletteGame)).toBe(true);
});
test("9 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("9", rouletteGame)).toBe(true);
});
test("10 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("10", rouletteGame)).toBe(true);
});
test("11 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("11", rouletteGame)).toBe(true);
});
test("12 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("12", rouletteGame)).toBe(true);
});
test("13 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("13", rouletteGame)).toBe(true);
});
test("14 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("14", rouletteGame)).toBe(true);
});
test("15 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("15", rouletteGame)).toBe(true);
});
test("16 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("16", rouletteGame)).toBe(true);
});
test("17 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("17", rouletteGame)).toBe(true);
});
test("18 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("18", rouletteGame)).toBe(true);
});
test("19 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("19", rouletteGame)).toBe(true);
});
test("20 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("20", rouletteGame)).toBe(true);
});
test("21 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("21", rouletteGame)).toBe(true);
});
test("22 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("22", rouletteGame)).toBe(true);
});
test("23 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("23", rouletteGame)).toBe(true);
});
test("24 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("24", rouletteGame)).toBe(true);
});
test("25 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("25", rouletteGame)).toBe(true);
});
test("26 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("26", rouletteGame)).toBe(true);
});
test("27 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("27", rouletteGame)).toBe(true);
});
test("28 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("28", rouletteGame)).toBe(true);
});
test("29 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("29", rouletteGame)).toBe(true);
});
test("30 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("30", rouletteGame)).toBe(true);
});
test("31 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("31", rouletteGame)).toBe(true);
});
test("32 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("32", rouletteGame)).toBe(true);
});
test("33 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("33", rouletteGame)).toBe(true);
});
test("34 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("34", rouletteGame)).toBe(true);
});
test("35 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("35", rouletteGame)).toBe(true);
});
test("36 is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("36", rouletteGame)).toBe(true);
});
test("37 is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("37", rouletteGame)).toBe(false);
});
test("100 is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("100", rouletteGame)).toBe(false);
});
test("-42 is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("-42", rouletteGame)).toBe(false);
});
test("23skidoo is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("23skidoo", rouletteGame)).toBe(true);
});
test("skidoo23 is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("skidoo23", rouletteGame)).toBe(false);
});
test("ski23doo is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("ski23doo", rouletteGame)).toBe(false);
});

test("odd is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition(" odd ", rouletteGame)).toBe(true);
});
test("ODD is VALID for ROULETTE", () => {
  expect(cashier.isValidPosition(" ODD ", rouletteGame)).toBe(true);
});

test("TACO is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("TACO", rouletteGame)).toBe(false);
});
test("PASS is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("PASS", rouletteGame)).toBe(false);
});
test("hard_4 is NOT VALID for ROULETTE", () => {
  expect(cashier.isValidPosition("hard_4", rouletteGame)).toBe(false);
});

// test("PASS is VALID for CRAPS", () => {
//   expect(cashier.isValidPosition("PASS", crapsGame)).toBe(true);
// });
// test("TACO is NOT VALID for CRAPS", () => {
//   expect(cashier.isValidPosition("TACO", crapsGame)).toBe(false);
// });
