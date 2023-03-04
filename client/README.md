# Getting Started with Ukraine NOW client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook` or `yarn storybook`

Runs Storybook for components development. Default port is :6006

## Main Used Libraries

- [Chakra UI](https://chakra-ui.com/) - the main components library.
- [@tanstack/react-query](https://tanstack.com/query/latest) - make AJAX calls and handle state
- [axios](https://axios-http.com/docs/intro) - React-Query uses it as a main library to make AJAX calls
- [@tanstack/react-table](https://tanstack.com/table/v8) - Headless UI for building powerful tables & datagrids
- [mobX](https://mobx.js.org/) - Simple, scalable state management.
- [highcharts](https://www.highcharts.com/) - charts on the dashboard
- [highcharts-react-official](https://www.npmjs.com/package/highcharts-react-official) - React wrapper for Highcharts library
- [i18next](https://www.i18next.com/) - an internationalization-framework to support English and Ukrainian languages
- [react-helmet](https://www.npmjs.com/package/react-helmet) - manage all of your changes to the document head (add page title, description, meta tags)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) - Unit tests
- [Prettier](https://prettier.io/) - code formatter

## Before run application

In the client folder create two environment files:

- .env.development - for dev configuration
- .env.production - for prod configuration (Firebase hosting)

Sample of content for these files:

`REACT_APP_API_HOST=<API Server host>`

`REACT_APP_API_KEY=<Firebase API key>`

`REACT_APP_RE_CAPTCHA_SITE_KEY=<Firebase App check Captch key>`
