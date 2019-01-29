'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _require = require('./slackApi'),
    createSlackMessage = _require.createSlackMessage,
    addSlackFieldsToAttachment = _require.addSlackFieldsToAttachment,
    createSlackAttachment = _require.createSlackAttachment,
    sendSlackMessage = _require.sendSlackMessage;

var index = {
  createSlackMessage: createSlackMessage,
  addSlackFieldsToAttachment: addSlackFieldsToAttachment,
  createSlackAttachment: createSlackAttachment,
  sendSlackMessage: sendSlackMessage
};

exports.default = index;
