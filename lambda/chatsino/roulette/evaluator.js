const color = require('./color.js');
const column = require('./column.js');
const position = require('./position.js');

function evaluator(spin) {
  const result = { win: [], lose: [] };

  if (spin >= 1) {
    result.win.push(eval(`position._${spin}`));

    if (color.RED.includes(spin)) result.win.push(position.RED);
    else if (color.BLACK.includes(spin)) result.win.push(position.BLACK);

    if (spin % 2 === 0) result.win.push(position.EVEN);
    else if (spin % 2 === 1) result.win.push(position.ODD);

    if (spin >= 1 && spin <= 18) result.win.push(position.BOTTOM);
    else if (spin >= 19 && spin <= 36) result.win.push(position.TOP);

    if (spin >= 1 && spin <= 12) result.win.push(position.LOW);
    else if (spin >= 13 && spin <= 24) result.win.push(position.MIDDLE);
    else if (spin >= 25 && spin <= 36) result.win.push(position.HIGH);

    if (column.COLUMN1.includes(spin)) result.win.push(position.COL_1);
    else if (column.COLUMN2.includes(spin)) result.win.push(position.COL_2);
    else if (column.COLUMN3.includes(spin)) result.win.push(position.COL_3);
  } else if (spin === -1) result.win.push(eval('position._00'));
  else if (spin === 0) result.win.push(eval('position._0'));

  return result;
}

module.exports = evaluator;
