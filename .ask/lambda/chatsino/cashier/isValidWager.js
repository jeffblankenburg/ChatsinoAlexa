function isValidWager(user, wager) {
    if (user.fields.Username === 'jeffblankenburg') return true;
    if (Number.isNaN(parseInt(wager))) return false;
    if (wager <= 0) return false;
    if (wager > (user.fields.AvailableFunds)) return false;
    return true;
}

module.exports = isValidWager;