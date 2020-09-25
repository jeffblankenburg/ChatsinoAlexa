function isValidWager(user, wager) {
    //if (user.fields.TwitchUsername === 'jeffblankenburg') return true;
    if (Number.isNaN(parseInt(wager))) return { status: "NOT_A_NUMBER", isValid: false};;
    if (wager <= 0) return { status: "NEGATIVE_BET", isValid: false};
    if (wager > (user.fields.AvailableBalance)) return { status: "BET_ABOVE_AVAILABLE_BALANCE", isValid: false};
    if (isBelowMinimumBet(user.fields.Balance, wager)) return { status: "BELOW_MINIMUM_LIMIT", isValid: false};
    if (isAboveMaximumBet(user.fields.Balance, wager)) return { status: "ABOVE_MAXIMUM_LIMIT", isValid: false};
    return {status: "VALID_WAGER", isValid: true};
}

function isBelowMinimumBet(balance, wager) {
    if (balance < 20000 && wager >=0) return false;
    else if (balance >= 20000 && balance < 40000 && wager >= 5) return false;
    else if (balance >= 40000 && balance < 80000 && wager >= 10) return false;
    else if (balance >= 80000 && balance < 250000 && wager >= 25) return false;
    else if (balance >= 250000 && balance < 1000000 && wager >= 50) return false;
    else if (balance >= 1000000 && balance < 2500000 && wager >= 100) return false;
    else if (balance >= 2500000 && wager >= 250) return false;
    return true;
}

function isAboveMaximumBet(balance, wager) {
    if (balance < 20000 && wager <= 50) return false;
    else if (balance >= 20000 && balance < 40000 && wager <= 100) return false;
    else if (balance >= 40000 && balance < 80000 && wager <= 500) return false;
    else if (balance >= 80000 && balance < 250000 && wager <= 1000) return false;
    else if (balance >= 250000 && balance < 1000000 && wager <= 5000) return false;
    else if (balance >= 1000000 && balance < 2500000 && wager <= 10000) return false;
    else if (balance >= 2500000 && wager <= 50000) return false;
    return true;
}

module.exports = isValidWager;