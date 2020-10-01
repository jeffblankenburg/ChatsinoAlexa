const data = require("../data");

async function achievement(user) {
    let achievementArray = [];

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.RouletteGames)) {
        const ach = await data.giveAchievement(user, `ROULETTE_SPIN_${user.fields.RouletteGames}`);
        achievementArray.push(ach);
    }
    
    return achievementArray.filter(a => a != undefined);
}

module.exports = achievement;