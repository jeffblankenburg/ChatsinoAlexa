const data = require("../data");

async function achievement(user) {
    let achievementArray = [];

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerGames)) {
        const ach = await data.giveAchievement(user, `POKER_GAME_${user.fields.PokerGames}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerPairCount)) {
        const ach = await data.giveAchievement(user, `POKER_PAIR_${user.fields.PokerPairCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerTwoPairCount)) {
        const ach = await data.giveAchievement(user, `POKER_TWOPAIR_${user.fields.PokerTwoPairCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerThreeOfAKindCount)) {
        const ach = await data.giveAchievement(user, `POKER_THREEOFAKIND_${user.fields.PokerThreeOfAKindCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerStraightCount)) {
        const ach = await data.giveAchievement(user, `POKER_STRAIGHT_${user.fields.PokerStraightCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerFlushCount)) {
        const ach = await data.giveAchievement(user, `POKER_FLUSH_${user.fields.PokerFlushCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerFourOfAKindCount)) {
        const ach = await data.giveAchievement(user, `POKER_FOUROFAKIND_${user.fields.PokerFourOfAKindCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerStraightFlushCount)) {
        const ach = await data.giveAchievement(user, `POKER_STRAIGHTFLUSH_${user.fields.PokerStraightFlushCount}`);
        achievementArray.push(ach);
    }

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.PokerRoyalFlushCount)) {
        const ach = await data.giveAchievement(user, `POKER_ROYALFLUSH_${user.fields.PokerRoyalFlushCount}`);
        achievementArray.push(ach);
    }

    return achievementArray.filter(a => a != undefined);
}

module.exports = achievement;