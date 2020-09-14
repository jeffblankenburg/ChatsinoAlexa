function isValidPosition(position, game) {
  switch (game.fields.GameType.toString().toLowerCase()) {
    case "roulette":
      console.log({position});
      const roulettePosition = require("../roulette/position.js");
      position = eval(`roulettePosition.${position}`);
      if (position) return true;
      return false;
      break;
     case "craps":
      const point = game.fields.Point;
      const crapsPosition = require("../craps/position.js");
      const betPosition = eval(`crapsPosition.${position}`);
      if (betPosition) return true;
      return false;
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
       break;
    default:
      return false;
  }
  return false;
}

module.exports = isValidPosition;
