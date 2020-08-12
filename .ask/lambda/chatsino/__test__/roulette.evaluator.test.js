const roulette = require("../roulette");

test("SPIN 0 returns _0", () => {
  expect(roulette.evaluator(0).win).toContain(eval(roulette.position._0));
});
test("SPIN 0 DOES NOT return _00", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position._00));
});
test("SPIN 0 DOES NOT return RED", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.RED));
});
test("SPIN 0 DOES NOT return BLACK", () => {
  expect(roulette.evaluator(0).win).not.toContain(
    eval(roulette.position.BLACK)
  );
});
test("SPIN 0 DOES NOT return ODD", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.ODD));
});
test("SPIN 0 DOES NOT return EVEN", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.EVEN));
});
test("SPIN 0 DOES NOT return HIGH", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.HIGH));
});
test("SPIN 0 DOES NOT return LOW", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.LOW));
});
test("SPIN 0 DOES NOT return TOP", () => {
  expect(roulette.evaluator(0).win).not.toContain(eval(roulette.position.TOP));
});
test("SPIN 0 DOES NOT return MIDDLE", () => {
  expect(roulette.evaluator(0).win).not.toContain(
    eval(roulette.position.MIDDLE)
  );
});
test("SPIN 0 DOES NOT return BOTTOM", () => {
  expect(roulette.evaluator(0).win).not.toContain(
    eval(roulette.position.BOTTOM)
  );
});
test("SPIN 0 DOES NOT return COL1", () => {
  expect(roulette.evaluator(0).win).not.toContain(
    eval(roulette.position.COL_1)
  );
});
test("SPIN 0 DOES NOT return COL2", () => {
  expect(roulette.evaluator(0).win).not.toContain(
    eval(roulette.position.COL_2)
  );
});
test("SPIN 0 DOES NOT return COL3", () => {
  expect(roulette.evaluator(0).win).not.toContain(
    eval(roulette.position.COL_3)
  );
});

test("SPIN 00 returns _00", () => {
  expect(roulette.evaluator(-1).win).toContain(eval(roulette.position._00));
});
test("SPIN 00 DOES NOT return _0", () => {
  expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position._0));
});
test("SPIN 00 DOES NOT return RED", () => {
  expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.RED));
});
test("SPIN 00 DOES NOT return BLACK", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.BLACK)
  );
});
test("SPIN 00 DOES NOT return ODD", () => {
  expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.ODD));
});
test("SPIN 00 DOES NOT return EVEN", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.EVEN)
  );
});
test("SPIN 00 DOES NOT return HIGH", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.HIGH)
  );
});
test("SPIN 00 DOES NOT return LOW", () => {
  expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.LOW));
});
test("SPIN 00 DOES NOT return TOP", () => {
  expect(roulette.evaluator(-1).win).not.toContain(eval(roulette.position.TOP));
});
test("SPIN 00 DOES NOT return MIDDLE", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.MIDDLE)
  );
});
test("SPIN 00 DOES NOT return BOTTOM", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.BOTTOM)
  );
});
test("SPIN 00 DOES NOT return COL1", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.COL_1)
  );
});
test("SPIN 00 DOES NOT return COL2", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.COL_2)
  );
});
test("SPIN 00 DOES NOT return COL3", () => {
  expect(roulette.evaluator(-1).win).not.toContain(
    eval(roulette.position.COL_3)
  );
});

for (var i = 0; i < roulette.color.RED.length; i++) {
  const x = roulette.color.RED[i];
  test(`SPIN ${x} returns NUMBER`, () => {
    expect(roulette.evaluator(x).win).toContain(
      eval(`roulette.position._${x}`)
    );
  });
  test(`SPIN ${x} returns RED`, () => {
    expect(roulette.evaluator(x).win).toContain(roulette.position.RED);
  });
  doEvenOdd(x);
  doBottomTop(x);
  doHighMiddleLow(x);
  doColumn(x);
}

for (var i = 0; i < roulette.color.BLACK.length; i++) {
  const x = roulette.color.BLACK[i];
  test(`SPIN ${x} returns NUMBER`, () => {
    expect(roulette.evaluator(x).win).toContain(
      eval(`roulette.position._${x}`)
    );
  });
  test(`SPIN ${x} returns BLACK`, () => {
    expect(roulette.evaluator(x).win).toContain(roulette.position.BLACK);
  });
  doEvenOdd(x);
  doBottomTop(x);
  doHighMiddleLow(x);
  doColumn(x);
}

function doEvenOdd(i) {
  if (i % 2 === 0)
    test(`SPIN ${i} returns EVEN`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.EVEN);
    });
  else
    test(`SPIN ${i} returns ODD`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.ODD);
    });
}

function doBottomTop(i) {
  if (i >= 1 && i <= 18)
    test(`SPIN ${i} returns BOTTOM`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.BOTTOM);
    });
  else if (i >= 19 && i <= 36)
    test(`SPIN ${i} returns TOP`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.TOP);
    });
}

function doHighMiddleLow(i) {
  if (i >= 1 && i <= 12)
    test(`SPIN ${i} returns LOW`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.LOW);
    });
  else if (i >= 13 && i <= 24)
    test(`SPIN ${i} returns MIDDLE`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.MIDDLE);
    });
  else if (i >= 25 && i <= 36)
    test(`SPIN ${i} returns HIGH`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.HIGH);
    });
}

function doColumn(i) {
  if (roulette.column.COLUMN1.includes(i))
    test(`SPIN ${i} returns COL1`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.COL_1);
    });
  else if (roulette.column.COLUMN2.includes(i))
    test(`SPIN ${i} returns COL2`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.COL_2);
    });
  else if (roulette.column.COLUMN3.includes(i))
    test(`SPIN ${i} returns COL3`, () => {
      expect(roulette.evaluator(i).win).toContain(roulette.position.COL_3);
    });
}
