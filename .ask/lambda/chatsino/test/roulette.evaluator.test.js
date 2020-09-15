const roulette = require('../roulette');

test('SPIN 0 returns _0', () => { expect(roulette.evaluator(0).win).toContain(eval(roulette.position.ZERO)); });
test('SPIN 0 DOES NOT return _00', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.DOUBLEZERO)); });
test('SPIN 0 DOES NOT return RED', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.RED)); });
test('SPIN 0 DOES NOT return BLACK', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.BLACK)); });
test('SPIN 0 DOES NOT return ODD', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.ODD)); });
test('SPIN 0 DOES NOT return EVEN', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.EVEN)); });
test('SPIN 0 DOES NOT return HIGH', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.HIGH)); });
test('SPIN 0 DOES NOT return LOW', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.LOW)); });
test('SPIN 0 DOES NOT return TOP', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.TOP)); });
test('SPIN 0 DOES NOT return MIDDLE', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.MIDDLE)); });
test('SPIN 0 DOES NOT return BOTTOM', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.BOTTOM)); });
test('SPIN 0 DOES NOT return COL1', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.COL_1)); });
test('SPIN 0 DOES NOT return COL2', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.COL_2)); });
test('SPIN 0 DOES NOT return COL3', () => { expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.COL_3)); });

test('SPIN 00 returns _00', () => { expect(roulette.evaluator(-1).win).toContain(eval(roulette.position.DOUBLEZERO)); });
test('SPIN 00 DOES NOT return _0', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.ZERO)); });
test('SPIN 00 DOES NOT return RED', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.RED)); });
test('SPIN 00 DOES NOT return BLACK', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.BLACK)); });
test('SPIN 00 DOES NOT return ODD', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.ODD)); });
test('SPIN 00 DOES NOT return EVEN', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.EVEN)); });
test('SPIN 00 DOES NOT return HIGH', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.HIGH)); });
test('SPIN 00 DOES NOT return LOW', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.LOW)); });
test('SPIN 00 DOES NOT return TOP', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.TOP)); });
test('SPIN 00 DOES NOT return MIDDLE', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.MIDDLE)); });
test('SPIN 00 DOES NOT return BOTTOM', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.BOTTOM)); });
test('SPIN 00 DOES NOT return COL1', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.COL_1)); });
test('SPIN 00 DOES NOT return COL2', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.COL_2)); });
test('SPIN 00 DOES NOT return COL3', () => { expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.COL_3)); });

for (var i = 0; i < roulette.color.RED.length; i++) {
  const x = roulette.color.RED[i];
  test(`SPIN ${x} returns RED`, () => { expect(roulette.evaluator(x).win).toContain(roulette.position.RED); });
  doEvenOdd(x);
  doBottomTop(x);
  doHighMiddleLow(x);
  doColumn(x);
}

for (var i = 0; i < roulette.color.BLACK.length; i++) {
  const x = roulette.color.BLACK[i];
  //test(`SPIN ${x} returns NUMBER`, () => { expect(roulette.evaluator(x).win).toContain(eval(`roulette.position._${x}`)); });
  test(`SPIN ${x} returns BLACK`, () => { expect(roulette.evaluator(x).win).toContain(roulette.position.BLACK); });
  doEvenOdd(x);
  doBottomTop(x);
  doHighMiddleLow(x);
  doColumn(x);
}

test(`SPIN 1 returns ONE`, () => { expect(roulette.evaluator(1).win).toContain(roulette.position.ONE); });
test(`SPIN 2 returns TWO`, () => { expect(roulette.evaluator(2).win).toContain(roulette.position.TWO); });
test(`SPIN 3 returns THREE`, () => { expect(roulette.evaluator(3).win).toContain(roulette.position.THREE); });
test(`SPIN 4 returns FOUR`, () => { expect(roulette.evaluator(4).win).toContain(roulette.position.FOUR); });
test(`SPIN 5 returns FIVE`, () => { expect(roulette.evaluator(5).win).toContain(roulette.position.FIVE); });
test(`SPIN 6 returns SIX`, () => { expect(roulette.evaluator(6).win).toContain(roulette.position.SIX); });
test(`SPIN 7 returns SEVEN`, () => { expect(roulette.evaluator(7).win).toContain(roulette.position.SEVEN); });
test(`SPIN 8 returns EIGHT`, () => { expect(roulette.evaluator(8).win).toContain(roulette.position.EIGHT); });
test(`SPIN 9 returns NINE`, () => { expect(roulette.evaluator(9).win).toContain(roulette.position.NINE); });
test(`SPIN 10 returns TEN`, () => { expect(roulette.evaluator(10).win).toContain(roulette.position.TEN); });
test(`SPIN 11 returns ELEVEN`, () => { expect(roulette.evaluator(11).win).toContain(roulette.position.ELEVEN); });
test(`SPIN 12 returns TWELVE`, () => { expect(roulette.evaluator(12).win).toContain(roulette.position.TWELVE); });
test(`SPIN 13 returns THIRTEEN`, () => { expect(roulette.evaluator(13).win).toContain(roulette.position.THIRTEEN); });
test(`SPIN 14 returns FOURTEEN`, () => { expect(roulette.evaluator(14).win).toContain(roulette.position.FOURTEEN); });
test(`SPIN 15 returns FIFTEEN`, () => { expect(roulette.evaluator(15).win).toContain(roulette.position.FIFTEEN); });
test(`SPIN 16 returns SIXTEEN`, () => { expect(roulette.evaluator(16).win).toContain(roulette.position.SIXTEEN); });
test(`SPIN 17 returns SEVENTEEN`, () => { expect(roulette.evaluator(17).win).toContain(roulette.position.SEVENTEEN); });
test(`SPIN 18 returns EIGHTEEN`, () => { expect(roulette.evaluator(18).win).toContain(roulette.position.EIGHTEEN); });
test(`SPIN 19 returns NINETEEN`, () => { expect(roulette.evaluator(19).win).toContain(roulette.position.NINETEEN); });
test(`SPIN 20 returns TWENTY`, () => { expect(roulette.evaluator(20).win).toContain(roulette.position.TWENTY); });
test(`SPIN 21 returns TWENTYONE`, () => { expect(roulette.evaluator(21).win).toContain(roulette.position.TWENTYONE); });
test(`SPIN 22 returns TWENTYTWO`, () => { expect(roulette.evaluator(22).win).toContain(roulette.position.TWENTYTWO); });
test(`SPIN 23 returns TWENTYTHREE`, () => { expect(roulette.evaluator(23).win).toContain(roulette.position.TWENTYTHREE); });
test(`SPIN 24 returns TWENTYFOUR`, () => { expect(roulette.evaluator(24).win).toContain(roulette.position.TWENTYFOUR); });
test(`SPIN 25 returns TWENTYFIVE`, () => { expect(roulette.evaluator(25).win).toContain(roulette.position.TWENTYFIVE); });
test(`SPIN 26 returns TWENTYSIX`, () => { expect(roulette.evaluator(26).win).toContain(roulette.position.TWENTYSIX); });
test(`SPIN 27 returns TWENTYSEVEN`, () => { expect(roulette.evaluator(27).win).toContain(roulette.position.TWENTYSEVEN); });
test(`SPIN 28 returns TWENTYEIGHT`, () => { expect(roulette.evaluator(28).win).toContain(roulette.position.TWENTYEIGHT); });
test(`SPIN 29 returns TWENTYNINE`, () => { expect(roulette.evaluator(29).win).toContain(roulette.position.TWENTYNINE); });
test(`SPIN 30 returns THIRTY`, () => { expect(roulette.evaluator(30).win).toContain(roulette.position.THIRTY); });
test(`SPIN 31 returns THIRTYONE`, () => { expect(roulette.evaluator(31).win).toContain(roulette.position.THIRTYONE); });
test(`SPIN 32 returns THIRTYTWO`, () => { expect(roulette.evaluator(32).win).toContain(roulette.position.THIRTYTWO); });
test(`SPIN 33 returns THIRTYTHREE`, () => { expect(roulette.evaluator(33).win).toContain(roulette.position.THIRTYTHREE); });
test(`SPIN 34 returns THIRTYFOUR`, () => { expect(roulette.evaluator(34).win).toContain(roulette.position.THIRTYFOUR); });
test(`SPIN 35 returns THIRTYFIVE`, () => { expect(roulette.evaluator(35).win).toContain(roulette.position.THIRTYFIVE); });
test(`SPIN 36 returns THIRTYSIX`, () => { expect(roulette.evaluator(36).win).toContain(roulette.position.THIRTYSIX); });

function doEvenOdd(i) {
  if (i % 2 === 0) test(`SPIN ${i} returns EVEN`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.EVEN); });
  else test(`SPIN ${i} returns ODD`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.ODD); });
}

function doBottomTop(i) {
  if (i >= 1 && i <= 18) test(`SPIN ${i} returns BOTTOM`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.BOTTOM); });
  else if (i >= 19 && i <= 36) test(`SPIN ${i} returns TOP`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.TOP); });
}

function doHighMiddleLow(i) {
  if (i >= 1 && i <= 12) test(`SPIN ${i} returns LOW`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.LOW); });
  else if (i >= 13 && i <= 24) test(`SPIN ${i} returns MIDDLE`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.MIDDLE); });
  else if (i >= 25 && i <= 36) test(`SPIN ${i} returns HIGH`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.HIGH); });
}

function doColumn(i) {
  if (roulette.column.COLUMN1.includes(i)) test(`SPIN ${i} returns COL1`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.COL_1); });
  else if (roulette.column.COLUMN2.includes(i)) test(`SPIN ${i} returns COL2`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.COL_2); });
  else if (roulette.column.COLUMN3.includes(i)) test(`SPIN ${i} returns COL3`, () => { expect(roulette.evaluator(i).win).toContain(roulette.position.COL_3); });
}
