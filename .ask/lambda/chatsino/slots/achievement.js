const data = require("../data");

async function achievement(user) {
    let achievementArray = [];

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsGames)) {
        const ach = await data.giveAchievement(user, `SLOTS_GAME_${user.fields.SlotsGames}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsOneCherryCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_ONECHERRY_${user.fields.SlotsOneCherryCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsTwoCherriesCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_TWOCHERRIES_${user.fields.SlotsTwoCherriesCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsThreeCherriesCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_THREECHERRIES_${user.fields.SlotsThreeCherriesCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsTwoOrangesDiamondCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_TWOORANGESDIAMOND_${user.fields.SlotsTwoOrangesDiamondCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsThreeOrangesCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_THREEORANGES_${user.fields.SlotsThreeOrangesCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsTwoGrapesDiamondCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_TWOGRAPESDIAMOND_${user.fields.SlotsTwoGrapesDiamondCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsThreeGrapesCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_THREEGRAPES_${user.fields.SlotsThreeGrapesCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsTwoBellsDiamondCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_TWOBELLSDIAMOND_${user.fields.SlotsTwoBellsDiamondCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsThreeBellsCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_THREEBELLS_${user.fields.SlotsThreeBellsCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsThreeLemonsCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_THREELEMONS_${user.fields.SlotsThreeLemonsCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.SlotsThreeDiamondsCount)) {
        const ach = await data.giveAchievement(user, `SLOTS_THREEDIAMONDS_${user.fields.SlotsThreeDiamondsCount}`);
        achievementArray.push(ach);
    }
    
    return achievementArray.filter(a => a != undefined);
}

module.exports = achievement;