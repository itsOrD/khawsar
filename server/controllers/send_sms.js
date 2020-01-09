const secret = require('../../secrets.js');

const accountSid = secret.accountSid;
const authToken = secret.authToken;

const client = require('twilio')(accountSid, authToken);

const sendSMS = (to, message) => {
  client.messages
    .create({
      body: `${message}`,
      from: `+17035964943`,
      to: `+${to}`
    })
    .then(message => console.log(message.sid))
};

module.exports = sendSMS;
