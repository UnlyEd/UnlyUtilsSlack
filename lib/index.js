'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios'); // By default, axios serializes JavaScript objects to JSON

/**
 * Create a field with title, value and short option default to false
 * @param title
 * @param value
 * @param bool
 * @returns {{title: string, value: string, short: boolean}}
 */


var createField = function createField() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var bool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    title: title,
    value: value,
    short: bool
  };
};
/**
 * Fields are defined as an array. Each entry in the array is a single field. Each field is defined as a dictionary with key-value pairs.
 *  see https://api.slack.com/docs/message-attachments#fields
 * @param stackTrace
 * @returns {Array<{title: string, value: string, short: boolean}>}
 */


var addSlackFieldsToAttachment = function addSlackFieldsToAttachment() {
  var stackTrace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(stackTrace).map(function (el) {
    return createField(el, stackTrace[el], stackTrace[el].length < 30);
  });
};
/**
 * Send a message to slack with Webhooks (post messages from apps into Slack)
 * see https://api.slack.com/incoming-webhooks
 * @param url
 * @param data
 * @returns {Promise}
 */

var sendSlackMessage = function sendSlackMessage(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!url) {
    throw new Error('You must provided a url to sendSlackMessage');
  }

  return axios({
    url: url,
    method: 'post',
    data: data
  });
};
/**
 * Generate an attachment structure for slack
 * test it online https://api.slack.com/docs/messages/builder
 * see https://api.slack.com/docs/message-attachments#fields
 * @param color
 * @param title
 * @param text
 * @param fallback
 * @param footer
 * @param footerIcon
 * @param ts
 * @param stackTrace
 * @returns {{
 * color: string,
 * footer: string,
 * footer_icon: string,
 * text: *, title: *,
 * fields: Array<{title: string, value: string, short: boolean}>,
 * fallback: *,
 * ts: number
 * }}
 */

var createSlackAttachment = function createSlackAttachment(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'danger' : _ref$color,
      title = _ref.title,
      text = _ref.text,
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === void 0 ? title : _ref$fallback,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? 'unly.org' : _ref$footer,
      _ref$footerIcon = _ref.footerIcon,
      footerIcon = _ref$footerIcon === void 0 ? 'https://storage.googleapis.com/unly/images/ICON_16x16.png' : _ref$footerIcon,
      _ref$ts = _ref.ts,
      ts = _ref$ts === void 0 ? Math.floor(Date.now() / 1000) : _ref$ts;
  var stackTrace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!title) {
    throw new Error('Slack Attachment title must be provide');
  }

  if (!text) {
    throw new Error('Slack Attachment text message must be provide');
  }

  return {
    color: color,
    title: title,
    text: text,
    fallback: fallback,
    fields: addSlackFieldsToAttachment(stackTrace),
    footer: footer,
    footer_icon: footerIcon,
    ts: ts
  };
};
/**
 * Return a formatted message with attachments, text or both
 * @param attachments
 * @param text
 * @returns {{text: *, attachments: Array}}
 */

var createSlackMessage = function createSlackMessage() {
  var attachments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var text = arguments.length > 1 ? arguments[1] : undefined;

  if (!text && !attachments.length) {
    throw new Error('you must provide a text message or an array of attachments');
  }

  return {
    text: text,
    attachments: attachments
  };
};

exports.createSlackMessage = createSlackMessage;
exports.addSlackFieldsToAttachment = addSlackFieldsToAttachment;
exports.createSlackAttachment = createSlackAttachment;
exports.sendSlackMessage = sendSlackMessage;
