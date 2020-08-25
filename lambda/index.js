const Alexa = require('ask-sdk-core');
const AMAZON = require(`./AMAZON`);
const handlers = require(`./handlers`);
const helper = require(`./helper`);
const chatsino = require("./chatsino");

const BalanceIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'BalanceIntent';
    },
    handle(handlerInput) {
        return handlers.BalanceIntent(handlerInput);
    }
};

const BetSummaryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'BetSummaryIntent';
    },
    handle(handlerInput) {
        return handlers.BetSummaryIntent(handlerInput);
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return AMAZON.HelpIntent(handlerInput);
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlers.LaunchRequest(handlerInput);
    }
};

const RepeatIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.RepeatIntent';
    },
    handle(handlerInput) {
        return AMAZON.RepeatIntent(handlerInput);
    }
};

const SpinRouletteHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SpinRouletteIntent';
    },
    handle(handlerInput) {
        return handlers.SpinRouletteIntent(handlerInput);
    }
};

const StartPokerHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StartPokerIntent';
    },
    handle(handlerInput) {
        return handlers.StartPokerIntent(handlerInput);
    }
};

const StartSlotsHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StartSlotsIntent';
    },
    handle(handlerInput) {
        return handlers.StartSlotsIntent(handlerInput);
    }
};

const StartRouletteHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StartRouletteIntent';
    },
    handle(handlerInput) {
        return handlers.StartRouletteIntent(handlerInput);
    }
};

const UserAccountIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'UserAccountIntent';
    },
    handle(handlerInput) {
        return handlers.UserAccountIntent(handlerInput);
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        return AMAZON.StopIntent(handlerInput);
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        return handlers.IntentReflector(handlerInput);
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        return handlers.Error(handlerInput, error);
    }
};

const RequestLog = {
    async process(handlerInput) {
      //console.log(`REQ ENV ${JSON.stringify(handlerInput.requestEnvelope)}`);
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const userRecord = await chatsino.data.getUserByUserId(handlerInput.requestEnvelope.session.user.userId);
      sessionAttributes.user = userRecord;
      sessionAttributes.isError = false;
      //console.log("USER RECORD = " + JSON.stringify(userRecord.fields));
    },
  };
  
  const ResponseLog = {
    process(handlerInput) {
      console.log(
        `RESPONSE BUILDER = ${JSON.stringify(
          handlerInput.responseBuilder.getResponse()
        )}`
      );
      helper.putRepeatData(handlerInput);
    },
  };

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        StartPokerHandler,
        StartSlotsHandler,
        StartRouletteHandler,
        SpinRouletteHandler,
        BetSummaryIntentHandler,
        BalanceIntentHandler,
        HelpIntentHandler,
        RepeatIntentHandler,
        CancelAndStopIntentHandler,
        UserAccountIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
        ) 
        .addErrorHandlers(ErrorHandler)
        .addRequestInterceptors(RequestLog)
        .addResponseInterceptors(ResponseLog)
        .withApiClient(new Alexa.DefaultApiClient())
        .lambda();
