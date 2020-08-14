const slots = require('../slots');

test('💎 💎 💎 returns THREEDIAMONDS', () => {
  const result = slots.evaluator(['💎', '💎', '💎']);
  expect(result).toBe(slots.position.THREEDIAMONDS);
});

test('🍋 🍋 🍋 returns THREELEMONS', () => {
  const result = slots.evaluator(['🍋', '🍋', '🍋']);
  expect(result).toBe(slots.position.THREELEMONS);
});

test('🔔 🔔 🔔 returns THREEBELLS', () => {
  const result = slots.evaluator(['🔔', '🔔', '🔔']);
  expect(result).toBe(slots.position.THREEBELLS);
});

test('🔔 🔔 💎 returns TWOBELLSDIAMOND', () => {
  const result = slots.evaluator(['🔔', '🔔', '💎']);
  expect(result).toBe(slots.position.TWOBELLSDIAMOND);
});

test('🍇 🍇 🍇 returns THREEGRAPES', () => {
  const result = slots.evaluator(['🍇', '🍇', '🍇']);
  expect(result).toBe(slots.position.THREEGRAPES);
});

test('🍇 🍇 💎 returns TWOGRAPESDIAMOND', () => {
  const result = slots.evaluator(['🍇', '🍇', '💎']);
  expect(result).toBe(slots.position.TWOGRAPESDIAMOND);
});

test('🍊 🍊 🍊 returns THREEORANGES', () => {
  const result = slots.evaluator(['🍊', '🍊', '🍊']);
  expect(result).toBe(slots.position.THREEORANGES);
});

test('🍊 🍊 💎 returns TWOORANGEDIAMOND', () => {
  const result = slots.evaluator(['🍊', '🍊', '💎']);
  expect(result).toBe(slots.position.TWOORANGESDIAMOND);
});

test('🍒 🍒 🍒 returns THREECHERRIES', () => {
  const result = slots.evaluator(['🍒', '🍒', '🍒']);
  expect(result).toBe(slots.position.THREECHERRIES);
});

test('🍒 🍒 🍊 returns TWOCHERRIES', () => {
  const result = slots.evaluator(['🍒', '🍒', '🍊']);
  expect(result).toBe(slots.position.TWOCHERRIES);
});

test('🍒 💎 🍊 returns ONECHERRY', () => {
  const result = slots.evaluator(['🍒', '💎', '🍊']);
  expect(result).toBe(slots.position.ONECHERRY);
});
