const poker = require("../poker/position");
const slots = require("../slots/position");

function getPositionsByGameType(gameType) {
    console.log(`GAME TYPE ${gameType}`);
    switch(gameType) {
        case "slots": return slots;
        case "poker": return poker;
        case "roulette": return {
            NUMBERS: {name: 'Individual numbers, which includes zero, double zero, and one to thirty-six,', odds:35},
            RED: {name: 'Betting Red, black, even, or odd,', odds: 1, symbol: 'Red', id: 'RED'},
            BOTTOM: {name: 'Bottom, which includes the numbers one to eighteen,', odds: 1},
            TOP: {name: 'Top, which is nineteen to thirty-six,', odds:1},
            LOW: {name: 'Low, which is one through twelve,', odds:2},
            MIDDLE: {name: 'Middle, which includes thirteen through twenty-four,', odds:2},
            HIGH: {name: 'High, which is twenty-five through thirty-six,', odds:2},
            COL_1: {name: 'Column One, which is the entire column that includes the number one,', odds: 2},
            COL_2: {name: 'Column Two, which includes the middle column of the table,', odds: 2},
            COL_3: {name: 'Column Three, which is the entire top column,', odds: 2},
        };
    }
}

module.exports = getPositionsByGameType;