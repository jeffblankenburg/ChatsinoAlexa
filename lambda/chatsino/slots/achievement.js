const data = require("../data");

async function achievement(user) {
    let achievementArray = [];

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsGames)) {
        const ach = await data.giveAchievement(user, `SLOTS_GAME_${user.fields.SlotsGames}`);
        achievementArray.push(ach);
    }
    
    return achievementArray.filter(a => a != undefined);
}

module.exports = achievement;