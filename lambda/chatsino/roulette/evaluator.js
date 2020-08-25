const color = require('./color.js');
const column = require('./column.js');
const position = require('./position.js');

function evaluator(spin) {
  const result = { win: [], lose: [] };

  if (spin >= 1) {
    result.win.push(eval(`position._${spin}`));
    result.lose.push(position._0);
    result.lose.push(position._00);
    for (let i=1;i<=36;i++) {
      if (i != spin) result.lose.push(eval(`position._${i}`));
    }

    if (color.RED.includes(spin)){
      result.win.push(position.RED);
      result.lose.push(position.BLACK);
    }
    else if (color.BLACK.includes(spin)) {
      result.win.push(position.BLACK);
      result.lose.push(position.RED);
    }

    if (spin % 2 === 0) {
      result.win.push(position.EVEN);
      result.lose.push(position.ODD);
    }
    else if (spin % 2 === 1) {
      result.win.push(position.ODD);
      result.lose.push(position.EVEN);
    }

    if (spin >= 1 && spin <= 18) {
      result.win.push(position.BOTTOM);
      result.lose.push(position.TOP);
    }
    else if (spin >= 19 && spin <= 36) {
      result.win.push(position.TOP);
      result.lose.push(position.BOTTOM);
    }

    if (spin >= 1 && spin <= 12) {
      result.win.push(position.LOW);
      result.lose.push(position.MIDDLE);
      result.lose.push(position.HIGH);
    }
    else if (spin >= 13 && spin <= 24) {
      result.lose.push(position.LOW);
      result.win.push(position.MIDDLE);
      result.lose.push(position.HIGH);
    }
    else if (spin >= 25 && spin <= 36) {
      result.lose.push(position.LOW);
      result.lose.push(position.MIDDLE);
      result.win.push(position.HIGH);
    }

    if (column.COLUMN1.includes(spin)) {
      result.win.push(position.COL_1);
      result.lose.push(position.COL_2);
      result.lose.push(position.COL_3);
    }
    else if (column.COLUMN2.includes(spin)) {
      result.lose.push(position.COL_1);
      result.win.push(position.COL_2);
      result.lose.push(position.COL_3);
    }
    else if (column.COLUMN3.includes(spin)) {
      result.lose.push(position.COL_1);
      result.lose.push(position.COL_2);
      result.win.push(position.COL_3);
    }
  }
  else {
    if (spin === -1) result.win.push(eval('position._00'));
    else if (spin === 0) result.win.push(eval('position._0'));

    for (let i=1;i<=36;i++) {
      result.lose.push(eval(`position._${i}`));
    }

    result.lose.push(position.BLACK);
    result.lose.push(position.RED);
    result.lose.push(position.ODD);
    result.lose.push(position.EVEN);
    result.lose.push(position.TOP);
    result.lose.push(position.BOTTOM);
    result.lose.push(position.LOW);
    result.lose.push(position.MIDDLE);
    result.lose.push(position.HIGH);
    result.lose.push(position.COL_1);
    result.lose.push(position.COL_2);
    result.lose.push(position.COL_3);
  } 

  return result;
}

module.exports = evaluator;
