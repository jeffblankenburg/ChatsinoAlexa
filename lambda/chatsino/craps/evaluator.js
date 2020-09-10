const position = require('./position');

function evaluator(die1, die2, point) {
  const total = parseInt(die1) + parseInt(die2);
  const result = { win: [], lose: [] };

  // IF WE HIT THE POINT
  if (total === point) {
    result.win.push(position.PASS, position.COME, position.PASSODDS, position.COMEODDS);
    result.lose.push(position.DONTPASS, position.DONTCOME, position.DONTPASSODDS, position.DONTCOMEODDS);
  }

  switch (total) {
    case 2:
      result.win.push(position.ONEROLL_2,
        position.HI_LO,
        position.ANYCRAPS,
        position.C_E,
        position.FIELD,
        position.HORN,
        position.WORLD);
      result.lose.push(position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.ANY_7);
      if (point === 0) {
        result.win.push(position.DONTPASS, position.DONTCOME);
        result.lose.push(position.PASS, position.COME);
      }
      break;
    case 3:
      result.win.push(position.ONEROLL_3,
        position.ANYCRAPS,
        position.C_E,
        position.FIELD,
        position.HORN,
        position.WORLD);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.ANY_7);
      if (point === 0) {
        result.win.push(position.DONTPASS, position.DONTCOME);
        result.lose.push(position.PASS, position.COME);
      }
      break;
    case 4:
      result.win.push(position.FIELD,
        position.PLACE_4,
        position.BUY_4);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.ANY_7,
        position.HORN,
        position.WORLD,
        position.LAY_4);

      if (die1 === 2 && die2 === 2) result.win.push(position.HARD_4);
      else result.lose.push(position.HARD_4);
      break;
    case 5:
      result.win.push(position.PLACE_5,
        position.BUY_5);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.ANY_7,
        position.FIELD,
        position.HORN,
        position.WORLD,
        position.LAY_5);
      break;
    case 6:
      result.win.push(position.BIG_6,
        position.PLACE_6,
        position.BUY_6);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.ANY_7,
        position.FIELD,
        position.HORN,
        position.WORLD,
        position.LAY_6);
      if (die1 === 3 && die2 === 3) result.win.push(position.HARD_6);
      else result.lose.push(position.HARD_6);
      break;
    case 7:
      result.win.push(position.ANY_7,
        position.WORLD);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.FIELD,
        position.HORN,
        position.BIG_6,
        position.BIG_8);
      switch (point) {
        case 0:
          result.win.push(position.PASS,
            position.COME);
          result.lose.push(position.DONTPASS,
            position.DONTCOME);
          break;
        case 4: case 5: case 6: case 8: case 9: case 10:
          result.win.push(position.DONTPASS,
            position.DONTCOME,
            position.DONTPASSODDS,
            position.DONTCOMEODDS,
            position.LAY_4,
            position.LAY_5,
            position.LAY_6,
            position.LAY_8,
            position.LAY_9,
            position.LAY_10);
          result.lose.push(position.PASS,
            position.COME,
            position.PASSODDS,
            position.COMEODDS,
            position.HARD_4,
            position.HARD_6,
            position.HARD_8,
            position.HARD_10,
            position.PLACE_4,
            position.PLACE_5,
            position.PLACE_6,
            position.PLACE_8,
            position.PLACE_9,
            position.PLACE_10,
            position.BUY_4,
            position.BUY_5,
            position.BUY_6,
            position.BUY_8,
            position.BUY_9,
            position.BUY_10);
          break;
      }
      break;
    case 8:
      result.win.push(position.BIG_8,
        position.PLACE_8,
        position.BUY_8);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.ANY_7,
        position.FIELD,
        position.HORN,
        position.WORLD,
        position.LAY_8);

      if (die1 === 4 && die2 === 4) result.win.push(position.HARD_8);
      else result.lose.push(position.HARD_8);
      break;
    case 9:
      result.win.push(position.FIELD,
        position.PLACE_9,
        position.BUY_9);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.ANY_7,
        position.HORN,
        position.WORLD,
        position.LAY_9);
      break;
    case 10:
      result.win.push(position.FIELD,
        position.PLACE_10,
        position.BUY_10);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ONEROLL_12,
        position.C_E,
        position.ANYCRAPS,
        position.ANY_7,
        position.HORN,
        position.WORLD,
        position.LAY_10);
      if (die1 === 5 && die2 === 5) result.win.push(position.HARD_10);
      else result.lose.push(position.HARD_10);
      break;
    case 11:
      result.win.push(position.ONEROLL_11,
        position.C_E,
        position.FIELD,
        position.HORN,
        position.WORLD);
      result.lose.push(position.HI_LO,
        position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_12,
        position.ANYCRAPS,
        position.ANY_7);
      if (point === 0) {
        result.win.push(position.PASS, position.COME);
        result.lose.push(position.DONTPASS, position.DONTCOME);
      }
      break;
    case 12:
      result.win.push(position.ONEROLL_12,
        position.HI_LO,
        position.ANYCRAPS,
        position.C_E,
        position.FIELD,
        position.HORN,
        position.WORLD);
      result.lose.push(position.ONEROLL_2,
        position.ONEROLL_3,
        position.ONEROLL_11,
        position.ANY_7);
      if (point === 0) {
        result.lose.push(position.PASS, position.COME);
      }
      break;
  }
  return result;
}

module.exports = evaluator;
