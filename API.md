## Constants

<dl>
<dt><a href="#addSlackFieldsToAttachment">addSlackFieldsToAttachment</a> ⇒ <code>Array.&lt;{title: string, value: string, short: boolean}&gt;</code></dt>
<dd><p>Fields are defined as an array. Each entry in the array is a single field. Each field is defined as a dictionary with key-value pairs.
 see <a href="https://api.slack.com/docs/message-attachments#fields">https://api.slack.com/docs/message-attachments#fields</a></p>
</dd>
<dt><a href="#sendSlackMessage">sendSlackMessage</a> ⇒ <code>Promise</code></dt>
<dd><p>Send a message to slack with Webhooks (post messages from apps into Slack)
see <a href="https://api.slack.com/incoming-webhooks">https://api.slack.com/incoming-webhooks</a></p>
</dd>
<dt><a href="#createSlackAttachment">createSlackAttachment</a> ⇒ <code>Object</code></dt>
<dd><p>Generate an attachment structure for slack
test it online <a href="https://api.slack.com/docs/messages/builder">https://api.slack.com/docs/messages/builder</a>
see <a href="https://api.slack.com/docs/message-attachments#fields">https://api.slack.com/docs/message-attachments#fields</a></p>
</dd>
<dt><a href="#createSlackMessage">createSlackMessage</a> ⇒ <code>Object</code></dt>
<dd><p>Return a formatted message with attachments, text or both</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#createField">createField(title, value, bool)</a> ⇒ <code>Object</code></dt>
<dd><p>Create a field with title, value and short option default to false</p>
</dd>
</dl>

<a name="addSlackFieldsToAttachment"></a>

## addSlackFieldsToAttachment ⇒ <code>Array.&lt;{title: string, value: string, short: boolean}&gt;</code>
Fields are defined as an array. Each entry in the array is a single field. Each field is defined as a dictionary with key-value pairs.
 see https://api.slack.com/docs/message-attachments#fields

**Kind**: global constant  

| Param |
| --- |
| stackTrace | 

<a name="sendSlackMessage"></a>

## sendSlackMessage ⇒ <code>Promise</code>
Send a message to slack with Webhooks (post messages from apps into Slack)
see https://api.slack.com/incoming-webhooks

**Kind**: global constant  

| Param |
| --- |
| url | 
| data | 

<a name="createSlackAttachment"></a>

## createSlackAttachment ⇒ <code>Object</code>
Generate an attachment structure for slack
test it online https://api.slack.com/docs/messages/builder
see https://api.slack.com/docs/message-attachments#fields

**Kind**: global constant  

| Param |
| --- |
| color | 
| title | 
| text | 
| fallback | 
| footer | 
| footerIcon | 
| ts | 
| stackTrace | 

<a name="createSlackMessage"></a>

## createSlackMessage ⇒ <code>Object</code>
Return a formatted message with attachments, text or both

**Kind**: global constant  

| Param |
| --- |
| attachments | 
| text | 

<a name="createField"></a>

## createField(title, value, bool) ⇒ <code>Object</code>
Create a field with title, value and short option default to false

**Kind**: global function  

| Param | Default |
| --- | --- |
| title |  | 
| value |  | 
| bool | <code>false</code> | 

