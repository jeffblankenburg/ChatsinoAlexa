const { TestScheduler } = require("jest");
const cashier = require("../cashier");
const gameFactory = require("./game.factory");
const roulette = require("../roulette");

test("TACO returns false.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition("TACO", game);
    expect(result).toBe(false);
});

test("undefined returns false.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition(undefined, game);
    expect(result).toBe(false);
});

test("'' returns false.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition('', game);
    expect(result).toBe(false);
});

test("RED returns true.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition("RED", game);
    expect(result).toBe(true);
});

test("red returns true.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition("red", game);
    expect(result).toBe(true);
});

test("PASSODDS returns false for Roulette.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition("PASSODDS", game);
    expect(result).toBe(false);
});

//console.log(JSON.stringify(roulette.position));
const roulettePosition = Object.keys(roulette.position);
//const roulettePositions = "RED, BLACK, EVEN, ODD, BOTTOM, TOP, LOW, MIDDLE, HIGH, COL_1, COL_2, COL_3, DOUBLEZERO, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, ELEVEN, TWELVE, THIRTEEN, FOURTEEN, FIFTEEN, SIXTEEN, SEVENTEEN, EIGHTEEN, NINETEEN, TWENTY, TWENTYONE, TWENTYTWO, TWENTYTHREE, TWENTYFOUR, TWENTYFIVE, TWENTYSIX, TWENTYSEVEN, TWENTYEIGHT, TWENTYNINE, THIRTY, THIRTYONE, THIRTYTWO, THIRTYTHREE, THIRTYFOUR, THIRTYFIVE, THIRTYSIX".split(", ");

for (const p of roulettePosition) {
    test(`${p} returns true.`, async () =>{
        const game = gameFactory.createGame("roulette");
        const result = await cashier.isValidPosition(p, game);
        expect(result).toBe(true);
    });
};


