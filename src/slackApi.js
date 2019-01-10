const axios = require('axios');

// By default, axios serializes JavaScript objects to JSON

/**
 *
 * @param title
 * @param value
 * @param bool
 * @returns {{title: string, value: string, short: boolean}}
 */
const createField = (title = '', value = '', bool = false) => ({
  title,
  value,
  short: bool,
});

/**
 *
 * @param stackTrace
 * @returns {{title: string, value: string, short: boolean}[]}
 */
const addSlackFieldsToAttachment = (stackTrace = {}) => Object.keys(stackTrace).map((el) => createField(el, stackTrace[el], stackTrace[el].length < 30));

/**
 *
 * @param url
 * @param data
 * @returns {Promise}
 */
const sendSlackMessage = (url, data = {}) => {
  if (!url) {
    throw new Error('You must provided a url to sendSlackMessage');
  }
  return axios({ url, method: 'post', data });
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
const createSlackAttachment = ({
  color = 'danger',
  title,
  text,
  fallback = title,
  footer = 'unly.org',
  footerIcon = 'https://storage.googleapis.com/unly/images/ICON_16x16.png',
  ts = Math.floor(Date.now() / 1000),
}, stackTrace = {}) => {
  if (!title) {
    throw new Error('Slack Attachment title must be provide');
  }
  if (!text) {
    throw new Error('Slack Attachment text message must be provide');
  }

  return {
    color,
    title,
    text,
    fallback,
    fields: addSlackFieldsToAttachment(stackTrace),
    footer,
    footer_icon: footerIcon,
    ts,
  };
};

/**
 *
 * @param attachments
 * @param text
 * @returns {{text: *, attachments: Array}}
 */
const createSlackMessage = (attachments = [], text) => {
  if (!text && !attachments.length) {
    throw new Error('you must provide a text message or an array of attachments');
  }

  return {
    text,
    attachments,
  };
};

module.exports = {
  sendSlackMessage,
  createSlackAttachment,
  createSlackMessage,
};
