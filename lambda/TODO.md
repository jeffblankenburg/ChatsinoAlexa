## Alexa Casino To-Do

## Must Happen Before Publication
* [x] Change INVALID_WAGER cases to handle all of the new options.  This is currently broken. 
* [x] Achievements (poker done, slots done, roulette done)
* [x] Levels.  Each level allows you a specific minimum and maximum bet. 
* [x] Daily Reward - each day for 7 days, you receive an escalated prize.  Day 1 - 1000 coins.  Day 7.
* [x] Minimum and maximum bets based on your balance.
* [ ] Randomize most speech strings
* [x] Website?
* [ ] APL all the things!
* [ ] Write all (ok most) of the tests!  (We need a good cleanup function too.)
* [ ] Remove all of the unnecessary fields from our queries.
* [x] Legal approval to publish from Amazon.
* [ ] Revisit all of the help messages, and make sure you have good coverage.
* [ ] Add roulette achievements for each individual number.  (Zero and double zero are done.)
* [ ] What is the position intent for?

## Feedback
* [x] When you say “Alexa, open chatsino” it starts with letting me know my balance and asks “What would you like to do?” I answer with “What can I do?” it then exits.
* [x] When I ask “Help” after it doesn’t response to “What would you like to do” it also exists and doesn’t say anything.
* [ ] Playing video poker is actually tough not having visual.  When it said I had a pair I said "keep the pair" but that didn’t work.  Then it told me that I had 5 coins bet on video poker and asked what I wanted to play so I said video poker but it didn’t recognize that.
* [ ] In video poker it exits really quickly when trying to tell it to hold cards.
* [x] When you have an active game and you say play poker it asks for you to bet but then tells you that you already have a active game.
* [ ] It said I had 10 d 10 s 9 s 8 c 8 d but it wouldn’t let me drop the 9s and then deal only would allow me to deal
* [ ] Slots: When a user gets something like cherries, cherries, grapes, we should say "Two cherries and a grapes. (@CoachBear)

## Achievements
* [ ] Playing multiple games
* [ ] Winning an amount over a certain amount(s).
* [ ] Impressive losing streak?  Five losing spins on slots, for example?
* [ ] Dice rolling achievements?  You rolled 7 20 times.
* [ ] Roulette spin achievements?  You spun red 100 times.  

## General Features
* [ ] What is the first-time experience like?  How do we detect it?
* [ ] Build functions to handle the INVALID WAGER cases, rather than doing each game manually.
* [ ] Offer tips and statistics like "63% of users typically bet 40 or more coins on this."
* [ ] Quick Links would be cool on website. (Quick links are only after certification.)
* [ ] In-skill purchasing?
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
* [ ] @catull (Twitch) said they could help with Italian, German, and French translations.
* [ ] Sports betting?
* [ ] E-sports?

## Poker
* [x] We need to add the turn that video poker allows.
* [ ] Add APL card reveal.
* [x] When a user gets three of a kind, two pair, pair, or full house, tell them what they got.  Like "You won with a pair of 4s.";
* [ ] We still don't tell the user what their TWOPAIR is.  It was too hard at the time.
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
* [ ] If a user makes a bet on a position that they already have, the amount should be added to that wager, it shouldn't just create another wager.

## Craps
* [ ] We need to check IsValidWager() to make sure that only valid bets are made at valid bet times.
* [x] We need to compare the wagers to the evaluation to determine wins and losses.
* [x] We need to recite the outcomes of the wagers to the user properly.
* [ ] If a user makes a bet on a position that they already have, the amount should be added to that wager, it shouldn't just create another wager.

## Blackjack
* [ ] Have not even started this. 

## Account Linking
* [x] Provide a user with the last six digits of their Alexa skill user ID.
* [ ] Modify chatbot to catch a !link command with the user's user ID.
* [ ] Select the account with the highest balance, and delete the other one, including ledger and wager data.

