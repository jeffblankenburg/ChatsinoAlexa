function createUser(availableBalance=100) {
    return {
                fields: {
                    RecordId: "recbk1dFfqb0m8cLA",
                    AvailableBalance: availableBalance,
                    Balance: 100,
                }
            };
}

module.exports = {createUser};