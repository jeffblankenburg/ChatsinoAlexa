const converter = require("number-to-words");

function evaluator(cards) {
    let userCount = 0;
    let userHasAce = false;
    let userValue = "";

    for (let i = 0;i<cards.userHand.length;i++) {
        if ([1, 14].includes(cards.userHand[i].value.id)) { userHasAce = true; cards.userHand[i].value.id = 1;}
        else if (cards.userHand[i].value.id > 10) cards.userHand[i].value.id = 10;
        userCount += cards.userHand[i].value.id;
    }
    
    if (userHasAce && userCount <= 11) {
        userValue = `${converter.toWords(userCount)} or ${converter.toWords(userCount + 10)} `;
    }
    else {
        userValue = `${converter.toWords(userCount)} `;
    }

    return {
        userValue: userValue,
        //possibleActions = []
    };
}

module.exports = evaluator;