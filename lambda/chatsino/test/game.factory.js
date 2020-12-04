function createGame(gameType = "Roulette") {
    return {
        fields: {
            GameType: gameType
        }
    }
}

module.exports = {
    createGame
}