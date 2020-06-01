# webchat-fullstack-showcase

## What is it

Webchat full-stack showcase with Typescript, React, Redux, Socket.io, Node.js, Webpack

## How does it work

The webapp run automatically once we follow the instructions below. We have here a multi-users webchat that will it run locally and serve different browsers and windows as each different user. Can be easily implementd a CI/CD tasks trough GitHub and start the delivering the app on a running server for using it has small intranet livechat or simply for keep in touch with friends and family. History of chat, at moment, is only connected to the Node.js instance served trough the commend `yarn ts-script` (checkfile _package.json_ for details.)

## How could we setup and run it

For installing the dependencies after cloning the repo locally, run:

```shell
yarn install
```

Run locally the stack in dev mode with:

```shell
yarn start
```

Make a build and run only the server instace serving the app locally:

```shell
yarn serv-prod
```

Run units testing:

```shell
yarn test
```

Lint the codebase manually with command below without running the dev instance:

```shell
yarn lint
```

## Features and Requirements

- [x] You have to use React as your framework;
- [x] You have to use CSS preprocessors;
- [x] You have to write the app in TypeScript;
- [x] It should work on every desktop and phone, so you have to make responsive
      design. And it has to work both portrait and landscape orientation;
- [x] It should work on desktop/tablet/phone at least on the following browsers:
      Chrome, Firefox and Safari. Consider the latest versions for each browser;
- [x] Please, do not use any tool like or similar to create-react-app;
- [ ] Write at least some tests that would cover the main functionality of your app.
      We do not expect to be 100% test covered;
- [x] Write clean, commented, small and modularized code;
- [x] Working code, that works if we serve it with the http server and open in a
      browser;
- [ ] If the user is on another tab and he/she gets a message, the chat tab will blink,
      until he doesn’t read the message.
- [x] README;

### Optionals features

- [ ] JSdoc markdown.
- [x] CSS Modules or any other css solution.
- [x] If your application needs any state management tool, prefer one of the
      following: -Apollo (apollo-link-state), React Context API, Redux;
- [ ] Smiles support;
- [ ] Unread messages count in the chat tab;
- [ ] Add support to unread chat notifications;
- [ ] Link parser;
- [ ] YouTube link (embedded video should appear);
- [ ] Link to an image (embedded image should appear); o All other links should appear as anchor;
- [x] Internationalization (It’s enough to have just one additional language);

## Tools, plugins and paradigms

- Typescript;
- Eslint;
- Prettier;
- lint-staged;
- react-hot-loader;
- Material UI;
- Optimistic UI;
- Webpack;
- webpackbar;
- bitbar-webpack-progress-plugin.

## TODO

- [ ] Adding Offline capabilities (webpack.js.org/guides/progressive-web-application)
