function isValidWager(user, wager) {
    //if (user.fields.TwitchUsername === 'jeffblankenburg') return true;
    if (Number.isNaN(parseInt(wager))) return { status: "NOT_A_NUMBER", isValid: false};;
    if (wager <= 0) return { status: "NEGATIVE_BET", isValid: false};
    if (wager > (user.fields.AvailableBalance)) return { status: "BET_ABOVE_AVAILABLE_BALANCE", isValid: false};
    return {status: "VALID_WAGER", isValid: true};
}

module.exports = isValidWager;