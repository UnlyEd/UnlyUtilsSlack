"use strict";

var axios = require('axios'); // By default, axios serializes JavaScript objects to JSON

/**
 *
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
 *
 * @param stackTrace
 * @returns {{title: string, value: string, short: boolean}[]}
 */


var addSlackFieldsToAttachment = function addSlackFieldsToAttachment() {
  var stackTrace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(stackTrace).map(function (el) {
    return createField(el, stackTrace[el], stackTrace[el].length < 30);
  });
};
/**
 *
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
 *
 * @param color
 * @param title
 * @param text
 * @param fallback
 * @param footer
 * @param footer_icon
 * @param ts
 * @param stackTrace
 * @returns {{
 * color: string,
 * title: *, text: *,
 * fallback: *,
 * fields: {title: string, value: string, short: boolean}[],
 * footer: string, footer_icon: string, ts: number
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
 *
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

module.exports = {
  sendSlackMessage: sendSlackMessage,
  createSlackAttachment: createSlackAttachment,
  createSlackMessage: createSlackMessage
};