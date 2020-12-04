const data = require("../data");

async function isValidPosition(position, game) {
  switch (game.fields.GameType.toString().toLowerCase()) {
    case "roulette":
      const roulettePosition = require("../roulette/position.js");
      if (Boolean(position)) position = position.toUpperCase();
      else position = undefined;
      position = eval(`roulettePosition.${position}`);
      if (position) return true;
      return false;
      break;
    case "craps":
      const point = game.fields.Point;
      const crapsPosition = require("../craps/position.js");
      const betPosition = eval(`crapsPosition.${position}`);
      const passBets = await data.doesUserHavePassOrDontPassBet(game.fields.UserId);
    
      //TODO: THIS IN NOT COMPLETE.  WE NEED TO MAKE SURE THAT USERS CAN ONLY MAKE BETS AT THE APPROPRIATE TIMES.

      if (passBets.length > 0 || betPosition === crapsPosition.PASS || betPosition === crapsPosition.DONTPASS) {
        //console.log({point})
        if (point === 0) {
          switch (betPosition) {
            case crapsPosition.COME: return false;
            case crapsPosition.COMEODDS: return false;
            case crapsPosition.DONTCOME: return false;
            case crapsPosition.DONTCOMEODDS: return false;
            case crapsPosition.PASSODDS: return false;
            case crapsPosition.DONTPASSODDS: return false;
            default: return true;
          }
        }
        else if ([4, 5, 6, 8, 9, 10].includes(game.fields.Point)) {
          switch (betPosition) {
            case crapsPosition.PASS: return false;
            case crapsPosition.DONTPASS: return false;
            //TODO: LOOP THROUGH THE passBets ARRAY TO DETERMINE IF PASSODDS OR DONTPASSODDS are allowed.  (They are only allowed if a PASS or DONTPASS bet already exists.)
            default: return true;
          }
        }
      }
    return false;
  }
}

module.exports = isValidPosition;
