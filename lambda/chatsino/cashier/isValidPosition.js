const debug = require("debug");

const d = debug(`index:cashier:isValidPosition`);

function isValidPosition(position, game) {
  d(game);
  switch (game.fields.GameType.toString().toLowerCase()) {
    case "poker":
    case "slots":
      return true;
    case "roulette":
      const roulettePosition = require("../roulette/position.js");
      if (position === "00") return true;
      if (parseInt(position) >= 0 && parseInt(position) <= 36) return true;
      if (parseInt(position) < 0 || parseInt(position) > 36) return false;
      // if (wagerPosition === undefined) wagerPosition = "";
      const positionString = position
        .toString()
        .trim()
        .toUpperCase()
        .replace("-", "");
      position = eval(`roulettePosition.${positionString}`);
      if (position) return true;
      return false;
      break;
    // case "craps":
    //   const point = game.fields.Point;
    //   const betPosition = eval(`crapsPosition.${wagerPosition.toUpperCase()}`);
    //   // : NEED SOME LOGIC HERE TO MAKE SURE THAT BETS CAN ONLY HAPPEN AT THE RIGHT TIME.
    //   // THIS IS NOT DONE.
    //   if (betPosition) {
    //     if (point === 0) {
    //       switch (betPosition) {
    //         case crapsPosition.COME:
    //           return false;
    //         case crapsPosition.COMEODDS:
    //           return false;
    //         case crapsPosition.DONTCOME:
    //           return false;
    //         case crapsPosition.DONTCOMEODDS:
    //           return false;
    //         case crapsPosition.PASSODDS:
    //           return false;
    //         default:
    //           return true;
    //       }
    //     } else if ([4, 5, 6, 8, 9, 10].includes(game.fields)) {
    //       switch (betPosition) {
    //         case crapsPosition.PASS:
    //           return false;
    //         case crapsPosition.DONTPASS:
    //           return false;
    //         default:
    //           return true;
    //       }
    //     }
    //     return true;
    //   }
    //   return false;
    //   break;
    default:
      return false;
  }
  return false;
}

module.exports = isValidPosition;
