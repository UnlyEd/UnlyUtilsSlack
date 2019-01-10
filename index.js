const {
  createSlackMessage,
  sendSlackMessage,
  createSlackAttachment,
} = require('./src/slackApi');

module.exports = {
  sendSlackMessage,
  createSlackAttachment,
  createSlackMessage
};
