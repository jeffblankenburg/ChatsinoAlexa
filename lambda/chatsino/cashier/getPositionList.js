async function getPositionList(gameType) {
    switch (gameType) {
        case "roulette":
            return "The valid positions you can bet on are double zero, any of the numbers zero through thirty-six, and also red, black, even, odd, top, bottom, high, middle, low, and even column 1, column 2, and column 3.";
        case "craps":
            return "This is the list of positions for craps."
    }
    return "NOPE."
}

module.exports = getPositionList;