function poker(user, result) {
    console.log({result});
    const pokerAPL = require("./poker.json");
        //const temp = result.result;
    let handOutcome = "";
    //console.log(`RESULT.OUTCOME ${JSON.stringify(result.outcome)}`)
    //THIS IS BROKEN.  WE NEED TO ONLY SHOW A NAME WHEN WE HAVE AN OUTCOME NAME.  NOT SURE WHY I AM DUMB.
    if (result && result.outcome && result.outcome.name) handOutcome = result.outcome.name.toUpperCase();
    const directive = {
        type: 'Alexa.Presentation.APL.RenderDocument',
        document: pokerAPL,
        datasources: {
            "pokerData": {
                "outcome": handOutcome,
                "balance": `$${user.fields.AvailableBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                "cards": [
                    {
                        "suit": `${result.result[0].suit.name.toLowerCase()}`,
                        "value": `${result.result[0].value.id}`,
                        "symbol": result.result[0].value.symbol.toLowerCase(),
                        "isHeld": result.result[0].held
                    },
                    {
                        "suit": `${result.result[1].suit.name.toLowerCase()}`,
                        "value": `${result.result[1].value.id}`,
                        "symbol": result.result[1].value.symbol.toLowerCase(),
                        "isHeld": result.result[1].held
                    },
                    {
                        "suit": `${result.result[2].suit.name.toLowerCase()}`,
                        "value": `${result.result[2].value.id}`,
                        "symbol": result.result[2].value.symbol.toLowerCase(),
                        "isHeld": result.result[2].held
                    },
                    {
                        "suit": `${result.result[3].suit.name.toLowerCase()}`,
                        "value": `${result.result[3].value.id}`,
                        "symbol": `${result.result[3].value.symbol.toLowerCase()}`,
                        "isHeld": result.result[3].held
                    },
                    {
                        "suit": `${result.result[4].suit.name.toLowerCase()}`,
                        "value": `${result.result[4].value.id}`,
                        "symbol": `${result.result[4].value.symbol.toLowerCase()}`,
                        "isHeld": result.result[4].held
                    }
                ]  
            }
        }
    }

    return directive;
}

module.exports = poker;