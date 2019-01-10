# unly-utils-slack

This project is a transversal project, tools to help and improve slack notifications

Install:

npm or yarn

```
    npm install https://github.com/UnlyEd/unly-utils-slack.git
```

Use:

```
const logger = require('unly-utils-slack');
```

### Library:

#### sendSlackMessage
post message to slack Api

| param(s)  |  type  |     |
| :---------|:------:|:---:|
| url | string | required |
| data | object | optionnal|

> return Promise

#### createSlackAttachment
[docs](https://api.slack.com/docs/message-attachments#attachment_structure)

| param(s)  |  type  |     |
| :---------|:------:|:----:|
| {color, title, text, fallback, footer, footerIcon, ts} | object | required |
|  { key: 'string or number' } | object |  optionnal |

> return attachment


#### createSlackMessage
[docs](https://api.slack.com/docs/messages/builder)

At least one of the two parameters is required

| param(s)  |  type  |     |
| :---------|:------:|:----:|
| attachments | Array \[ objects \] | optionnal |
|  text | string |  optionnal |

> return a message to send

## Development

### Test

Run once:
```
yarn run test:once
```

Watch:
```
yarn test
```

Coverage:
```
yarn run test:coverage
```

### Lint

```
yarn run lint
```

### Build

```
yarn run build
```
