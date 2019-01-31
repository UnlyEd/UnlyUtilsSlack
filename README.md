[![Build Status](https://travis-ci.com/UnlyEd/utils-slack.svg?branch=master)](https://travis-ci.com/UnlyEd/utils-slack)
[![Maintainability](https://api.codeclimate.com/v1/badges/2607f73efd03371599b8/maintainability)](https://codeclimate.com/github/UnlyEd/utils-slack/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2607f73efd03371599b8/test_coverage)](https://codeclimate.com/github/UnlyEd/utils-slack/test_coverage)

# Utils Slack

This project is a transversal project, tools to help and improve slack notifications

<!-- toc -->

- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## Getting started

npm or yarn

```
    npm install https://github.com/UnlyEd/unly-utils-slack.git
```

Use:

```
const logger = require('unly-utils-slack');
```


## API

[API](./API.md)

---

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Getting started

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

### Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT
