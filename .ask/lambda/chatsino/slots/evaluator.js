const position = require('./position.js');

function evaluator(spinResult) {
  switch (spinResult.join(' ')) {
    case '💎 💎 💎': return position.THREEDIAMONDS;
    case '🍋 🍋 🍋': return position.THREELEMONS;
    case '🔔 🔔 🔔': return position.THREEBELLS;
    case '🔔 🔔 💎': return position.TWOBELLSDIAMOND;
    case '🍇 🍇 🍇': return position.THREEGRAPES;
    case '🍇 🍇 💎': return position.TWOGRAPESDIAMOND;
    case '🍊 🍊 🍊': return position.THREEORANGES;
    case '🍊 🍊 💎': return position.TWOORANGESDIAMOND;
    case '🍒 🍒 🍒': return position.THREECHERRIES;
    default:
      if (spinResult[0] === '🍒' && spinResult[1] === '🍒') return position.TWOCHERRIES;
      if (spinResult[0] === '🍒') return position.ONECHERRY;
      return position.NOTHING;
      break;
  }
}

module.exports = evaluator;
