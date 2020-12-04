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

test("PASSODDS returns false.", async () =>{
    const game = gameFactory.createGame("roulette");
    const result = await cashier.isValidPosition("PASSODDS", game);
    expect(result).toBe(false);
});

for (const p of roulette.position) {
    test(`${p.id} returns true.`, async () =>{
        const game = gameFactory.createGame("roulette");
        const result = await cashier.isValidPosition(p.id, game);
        expect(result).toBe(true);
    });
};


