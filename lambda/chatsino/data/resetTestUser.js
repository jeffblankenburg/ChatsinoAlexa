const deleteAllAchievementsByUser = require("./deleteAllAchievementsByUser");
const deleteAllVideoPokerHandsByUser = require("./deleteAllVideoPokerHandsByUser");
const deleteAllRouletteSpinsByUser = require("./deleteAllRouletteSpinsByUser");
const deleteAllCrapsRollsByUser = require("./deleteAllCrapsRollsByUser");
const deleteAllUserWagers = require("./deleteAllUserWagers");
const deleteAllGamesByUser = require("./deleteAllGamesByUser");
const updateBalance = require("./updateBalance");

async function resetTestUser() {

    const user = {
        fields: {
            RecordId: "recbk1dFfqb0m8cLA",
            AvailableBalance: 100,
            Balance: 100,
        },
    };

    const updatedUser = await updateBalance(user, 0);
    const videopoker = await deleteAllVideoPokerHandsByUser(user);
    const roulette = await deleteAllRouletteSpinsByUser(user);
    const craps = await deleteAllCrapsRollsByUser(user);
    const wagers = await deleteAllUserWagers(user);
    const games = await deleteAllGamesByUser(user);
    const achievements = await deleteAllAchievementsByUser(user);

    return user;
}

module.exports = resetTestUser;