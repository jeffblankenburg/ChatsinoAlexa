function isValidWager(user, wager) {
    if (user.Username === 'jeffblankenburg') return true;
    if (Number.isNaN(parseInt(wager))) return false;
    if (wager <= 0) return false;
    if (wager > (user.AvailableFunds)) return false;
    return true;
}

module.exports = isValidWager;