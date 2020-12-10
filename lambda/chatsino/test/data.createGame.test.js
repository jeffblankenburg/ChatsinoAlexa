const data = require("../data");
const helper = require("../helper");
const userFactory = require("./user.factory");

test("Has correct game type ID", async () => {
    const user = userFactory.createUser(100);
    const pokerGame = helper.VIDEOPOKER;
    const result = await data.createGame(user, pokerGame);
    expect(result.fields.GameTypeId[0]).toBe(pokerGame);
});