# Percentages Bot
Code for a Skype Bot that responds with Elapsed/Remaining percentages of current year.

## Prerequisites

* [Sign up](https://products.wolframalpha.com/api/) for a Wolfram Alpha App ID, rename `constants-template.js` to `constants.js` and set `WOLFRAM_ALPHA_APP_ID`,
* Download and install the [Bot Framework Emulator](https://docs.microsoft.com/en-us/bot-framework/debug-bots-emulator).

## Running

1. From within the app folder, run `node app.js`:
    ![](https://i.imgur.com/8icu0Ac.png)

2. Open the Bot Framework Emulator:
    ![](https://i.imgur.com/jH8uTIs.png)
    
3. Add `http://localhost:3978/api/messages` to the Endpoint URL and click `Connect`:
    ![](https://i.imgur.com/nJWS795.png)
    
    [Note: Credentials are not needed for local testing.]
    
4. Type a message, hit Enter and **VOILÀ**! 🙌
    ![](https://i.imgur.com/kUi4mHR.png)
    
---
*Next Up: Deploying the bot and interacting with it from Skype. [Stay tuned!]*
