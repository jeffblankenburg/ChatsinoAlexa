## Alexa Casino To-Do

## Must Happen Before Publication
* [ ] In-skill purchasing
* [ ] Achievements
* [ ] Daily Reward - each day for 7 days, you receive an escalated prize.  Day 1 - 1000 coins.  Day 7 - SOMETHING AWESOME.
* [ ] Randomize most speech strings
* [x] Website?  Not sure if this is required at launch, but Quick Links would be cool. (Quick links are only after certification.)
* [ ] Craps
* [ ] Blackjack
* [ ] APL all the things!
* [ ] Write all (ok most) of the tests!  (We need a good cleanup function too.)


## General Features
* [ ] What is the first-time experience like?  How do we detect it?
* [ ] Offer tips and statistics like "63% of users typically bet 40 or more coins on this."
* [ ] Review https://elements.envato.com/sound-effects/game-sounds/slots for sound effects from lockedinaus
* [ ] SOUND EFFECTS!
* [x] User analytics.  "You've played slots 89% of the time."
* [ ] On-stream lights and browser sources for big wins.  (What's a big win? 10000?)
* [ ] "It has been 32 days since you've played slots.  Time for a spin?"
* [x] Leaderboard (cards? APL?)
* [x] Paytable?  How do we communicate this with voice-only? (Intent constructed!)
* [ ] Rock Paper Scissors?
* [x] We need a contextual help engine.  What does that look like?
* [ ] Users should be able to buy more coins if they want more coins.  (You never really run out, because you get another coin with every interaction.)
* [ ] What do we do when a user wants to clear ALL of their bets?  Poker, roulette, craps, etc?
* [ ] BINGO? (Would this need to be multiplayer?  How does solo Bingo work?)
* [ ] Lottery scratchers?

## Poker
* [ ] Why does using multi-value slots with AMAZON.Number result in concatenating the digits into one number?
* [x] We need to add the turn that video poker allows.
* [ ] Add APL card reveal.
* [ ] When a user gets three of a kind, two pair, pair, or full house, tell them what they got.  Like "You won with a pair of 4s.";
* [x] If a user makes an invalid wager, we don't have an effective way to let them indicate a new bet.
* [x] What if a user says hold the 10s, when they have a pair of tens?  How do we handle references to the actual cards?

## Slots
* [x] Alexa pronounces the DIAMOND emoji as "gemstone."
* [x] Alexa pronounces the ORANGE emoji as "tangerine."
* [ ] Progressive slot machine grows the jackpot with each play that doesn't hit the jackpot.  Base amount is 5,000 coins, increases by 10 with every spin of the slot machine.  Can only win with a wager of 5 or more.  This should span all services.


## Roulette
* [x] We should probably allow a user to make multiple bets before spinning.
* [x] How do we assure that we have a bet AND a position? (Intent constructed!)
* [x] How does a user remove one bet from the table?
* [ ] How can a user create a set of standard bets, and make them all at once?
* [x] We need to give the user a way to hear all of their current wagers on the table (this will apply to craps later, also).
* [x] We haven't built a way to spin the wheel yet.
* [x] Record every spin for analytics purposes.

## Craps
* [ ] We need to check IsValidWager() to make sure that only valid bets are made at valid bet times.
* [ ] We need to compare the wagers to the evaluation to determine wins and losses.
* [ ] We need to recite the outcomes of the wagers to the user properly.

## Blackjack
* [ ] Have not even started this. 

## Account Linking
* [x] Provide a user with the last six digits of their Alexa skill user ID.
* [ ] Modify chatbot to catch a !link command with the user's user ID.
* [ ] Select the account with the highest balance, and delete the other one, including ledger and wager data.

