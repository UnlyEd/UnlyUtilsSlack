const axios = require('axios');

// By default, axios serializes JavaScript objects to JSON

/**
 * Create a field with title, value and short option default to false
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
 * Fields are defined as an array. Each entry in the array is a single field. Each field is defined as a dictionary with key-value pairs.
 *  see https://api.slack.com/docs/message-attachments#fields
 * @param stackTrace
 * @returns {Array<{title: string, value: string, short: boolean}>}
 */
export const addSlackFieldsToAttachment = (stackTrace = {}) => Object.keys(stackTrace).map((el) => createField(el, stackTrace[el], stackTrace[el].length < 30));

/**
 * Send a message to slack with Webhooks (post messages from apps into Slack)
 * see https://api.slack.com/incoming-webhooks
 * @param url
 * @param data
 * @returns {Promise}
 */
export const sendSlackMessage = (url, data = {}) => {
  if (!url) {
    throw new Error('You must provided a url to sendSlackMessage');
  }
  return axios({ url, method: 'post', data });
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
export const createSlackAttachment = ({
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
 * Return a formatted message with attachments, text or both
 * @param attachments
 * @param text
 * @returns {{text: *, attachments: Array}}
 */
export const createSlackMessage = (attachments = [], text) => {
  if (!text && !attachments.length) {
    throw new Error('you must provide a text message or an array of attachments');
  }

  return {
    text,
    attachments,
  };
};
