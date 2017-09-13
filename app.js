const { WOLFRAM_ALPHA_API_URL, WOLFRAM_ALPHA_APP_ID } = require("./constants");

const restify = require('restify');
const builder = require('botbuilder');
const request = require('superagent');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, async function (session) {
    percentagesText = await getPercentagesAsText();
    session.send(`**${percentagesText}**`);
});

function getPercentagesAsText() {
  return new Promise(function(resolve, reject) {
    request.get(WOLFRAM_ALPHA_API_URL)
           .query({
             input: "today",
             appid: WOLFRAM_ALPHA_APP_ID,
             format: "plaintext",
             output: "json",
             podstate: "TimeInYear__More"
           })
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .end((err, res) => {
             if (err) {
               reject(err);
             } else {
               resolve(JSON.parse(res.text).queryresult.pods[3].subpods[4].plaintext);
             }
           });
  });
}
