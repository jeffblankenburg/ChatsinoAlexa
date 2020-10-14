const data = require("../data");
const color = require("./color");

async function achievement(user) {
    let achievementArray = [];

    if ([1, 5, 10, 25, 50, 100].includes(user.fields.RouletteGames)) {
        const ach = await data.giveAchievement(user, `ROULETTE_SPIN_${user.fields.RouletteGames}`);
        achievementArray.push(ach);
    }

    //GET THE COUNT OF EACH TYPE OF SPIN IN ROULETTE
    const rouletteSpins = await data.getAllRouletteSpinsByUser(user);
    let spinCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let redBlackCount = [0,0];
    let evenOddCount = [0,0];
    let topBottomCount = [0,0];
    let lowMiddleHighCount = [0,0,0];
    for (let i = 0;i<rouletteSpins.length; i++) {
        let spin = rouletteSpins[i].fields.Spin;
        if (spin > 0) {
            //INCREMENT THE INDIVIDUAL NUMBER
            spinCount[spin] += 1;
            //INCREMENT BLACK AND RED
            if (color.RED.includes(spin)) redBlackCount[0] += 1;
            else if (color.BLACK.includes(spin)) redBlackCount[1] += 1;
            //INCREMENT EVEN AND ODD
            if (spin % 2 === 0) evenOddCount[0] += 1;
            else if (spin % 2 === 1) evenOddCount[1] += 1;
            //INCREMENT TOP AND BOTTOM
            if (spin >= 1 && spin <= 18) topBottomCount[0] += 1;
            else if (spin >= 19 && spin <= 36) topBottomCount[1] += 1;
            //INCREMENT HIGH, MIDDLE, AND LOW
            if (spin >= 1 && spin <= 12) lowMiddleHighCount[0] += 1;
            else if (spin >= 13 && spin <= 24) lowMiddleHighCount[1] += 1;
            else if (spin >= 25 && spin <= 36) lowMiddleHighCount[2] += 1;
        }
        else spinCount[37] += 1;
    }

    console.log({redBlackCount});

    //RED
    if ([1, 5, 10, 25, 50, 100].includes(redBlackCount[0])) {
        const ach = await data.giveAchievement(user, `ROULETTE_RED_${redBlackCount[0]}`);
        achievementArray.push(ach);
    }

    //BLACK
    if ([1, 5, 10, 25, 50, 100].includes(redBlackCount[1])) {
        const ach = await data.giveAchievement(user, `ROULETTE_BLACK_${redBlackCount[1]}`);
        achievementArray.push(ach);
    }

    //EVEN
    if ([1, 5, 10, 25, 50, 100].includes(evenOddCount[0])) {
        const ach = await data.giveAchievement(user, `ROULETTE_EVEN_${evenOddCount[0]}`);
        achievementArray.push(ach);
    }

    //ODD
    if ([1, 5, 10, 25, 50, 100].includes(evenOddCount[1])) {
        const ach = await data.giveAchievement(user, `ROULETTE_ODD_${evenOddCount[1]}`);
        achievementArray.push(ach);
    }

    //TOP
    if ([1, 5, 10, 25, 50, 100].includes(topBottomCount[0])) {
        const ach = await data.giveAchievement(user, `ROULETTE_TOP_${topBottomCount[0]}`);
        achievementArray.push(ach);
    }

    //BOTTOM
    if ([1, 5, 10, 25, 50, 100].includes(topBottomCount[1])) {
        const ach = await data.giveAchievement(user, `ROULETTE_BOTTOM_${topBottomCount[1]}`);
        achievementArray.push(ach);
    }

    //LOW
    if ([1, 5, 10, 25, 50, 100].includes(lowMiddleHighCount[0])) {
        const ach = await data.giveAchievement(user, `ROULETTE_LOW_${lowMiddleHighCount[0]}`);
        achievementArray.push(ach);
    }

    //MIDDLE
    if ([1, 5, 10, 25, 50, 100].includes(lowMiddleHighCount[1])) {
        const ach = await data.giveAchievement(user, `ROULETTE_MIDDLE_${lowMiddleHighCount[1]}`);
        achievementArray.push(ach);
    }

    //HIGH
    if ([1, 5, 10, 25, 50, 100].includes(lowMiddleHighCount[2])) {
        const ach = await data.giveAchievement(user, `ROULETTE_HIGH_${lowMiddleHighCount[2]}`);
        achievementArray.push(ach);
    }

    // //INDIVIDUAL NUMBERS
    // for (let i = 0;i<=37;i++) {
    //     if ([1, 5, 10, 25, 50, 100].includes(spinCount[i])) {
    //         const shouldStop = false;
    //         if (i === 37) {
    //             i = -1;
    //             shouldStop = true;
    //         }
    //         const ach = await data.giveAchievement(user, `ROULETTE_${i}_${spinCount[i]}`);
    //         achievementArray.push(ach);
    //         if (shouldStop) i = 37;
    //     }
    // }


    
    return achievementArray.filter(a => a != undefined);
}

module.exports = achievement;