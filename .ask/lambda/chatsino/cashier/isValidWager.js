function isValidWager(user, wager) {
    //if (user.fields.TwitchUsername === 'jeffblankenburg') return true;
    if (Number.isNaN(parseInt(wager))) return { status: "NOT_A_NUMBER", isValid: false};;
    if (wager > (user.fields.AvailableBalance)) return { status: "BET_ABOVE_AVAILABLE_BALANCE", isValid: false};
    return checkWagerRange(user.fields.AvailableBalance, wager);
}

function checkWagerRange(balance, wager) {
    const range = getWagerRange(balance);
    if (wager < range.minimum) return {status: "BELOW_MINIMUM_LIMIT", minimum: range.minimum, maximum: range.maximum, isValid: false};
    else if (wager > range.maximum) return {status: "ABOVE_MAXIMUM_LIMIT", minimum: range.minimum, maximum: range.maximum, isValid: false};
    return {status: "VALID_WAGER", isValid: true, minimum: range.minimum, maximum: range.maximum};
}

function getWagerRange(balance) {
    if (balance < 20000) return {minimum:1, maximum:50};
    else if (balance >= 20000 && balance < 40000) return {minimum: 5, maximum: 100};
    else if (balance >= 40000 && balance < 80000) return {minimum: 10, maximum: 500};
    else if (balance >= 80000 && balance < 250000) return {minimum: 25, maximum: 1000};
    else if (balance >= 250000 && balance < 1000000) return {minimum: 50, maximum: 5000};
    else if (balance >= 1000000 && balance < 2500000) return {minimum: 100, maximum: 10000};
    else if (balance >= 2500000) return {minimum: 250, maximum: 50000};

}

module.exports = isValidWager;