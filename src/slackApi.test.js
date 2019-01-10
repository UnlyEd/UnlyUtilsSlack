require('dotenv').config();

const {
  addSlackFieldsToAttachment, createSlackMessage, sendSlackMessage, createSlackAttachment,
} = require('./slackApi');

describe('Slack_API', () => {
  const slackAttachment = [];
  let slackMessage;

  test('should return an array of object with title, value, and short keys', () => {
    const arrayOfFields = addSlackFieldsToAttachment(process.env);
    expect(arrayOfFields).toEqual(expect.arrayContaining([
      expect.objectContaining({
        title: expect.any(String),
        value: expect.any(String),
        short: expect.any(Boolean),
      }),
    ]));
  });

  test('should return an attachment object', () => {
    const attachment = createSlackAttachment({ text: 'done', title: 'Utils Test' });
    expect(attachment).toEqual(expect.objectContaining({
      title: expect.any(String),
      color: expect.any(String),
      text: expect.any(String),
      fallback: expect.any(String),
      footer: expect.any(String),
      footer_icon: expect.any(String),
      ts: expect.any(Number),
      fields: expect.any(Array),
    }));
    slackAttachment.push(attachment);
  });

  test('should return an message object with attachments keys', () => {
    const message = createSlackMessage(slackAttachment);
    expect(message).toEqual(expect.objectContaining({
      attachments: expect.any(Array),
    }));
    expect(message.text).toBeUndefined();
    slackMessage = message;
  });

  test('should return an message object with attachments and text keys', () => {
    const message = createSlackMessage(slackAttachment, 'hello');
    expect(message).toEqual(expect.objectContaining({
      attachments: expect.any(Array),
      text: expect.any(String),
    }));
    expect(message.text).toEqual('hello');
  });

  test('should send message to slack app', async () => {
    const response = await sendSlackMessage(process.env.SLACK_WEBHOOK_URL, slackMessage);
    expect(response).toBeDefined();
  });
});
