# Power of Attorney

An online Power of Attorney form for Tennessee immigrants at risk of deportation.

This project was bootrapped using [Create React App](https://github.com/facebook/create-react-app).  Check out [the Create React App User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for a complete list of commands, how-tos, and FAQs.

## Background

Immigrant parents may face detainment or deportation with little warning. Since parents may work in the same location or be in the same location when picked up by ICE/immigration, their children can be left without any legal guardian. When picked up by ICE/Immigration, parents are often unavailable or inaccessible for days or weeks (and can even be deported before ever having access to their children or family). Parents can sign a power of attorney for the minor children to give guardianship of their child to someone they trust, which takes effect only if they are detained or deported.

This app provides a streamlined form with fields specifically tailored to immigrants being detained or deported.

## Design

The designs for this project are available on [Zeplin](https://app.zeplin.io/project/5adb2c9f32cffe0d11d2de86). Contact the current maintainer for access to the Zeplin project.

## Installation

Make sure you have [`yarn`](https://yarnpkg.com/) and a recent version of [`node.js`](https://nodejs.org/en/) installed.  Clone the repository, install the dependencies with `yarn install` then run `yarn start` to start the dev server.

Check out the [Create React App User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for additional commands.

## Custom Commands

We've added a few commands that don't come out-of-the-box for Create React App.

### `yarn watch-css`

Watches changes to your sass files for development.

### `yarn build-css`

Compiles sass files into css for production

## ENV VARS
## `REACT_APP_MOCK_FORM=true`
Start the with mocked form data. This is useful if you are working on the form and don't want to repeatedly enter form information to get to the screen you are working on. 
## `REACT_APP_FORM_STEP=4`
Sets the default form step to a specific value.

Sample values
```
REACT_APP_MOCK_FORM=true
REACT_APP_FORM_STEP=3
```
For example, you could put the above values in a file called `.env.development.local`.
Or you can use any other way you set environment variables.

Check out the [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables) for more details on how create react app handles env variables.


## Styling

This project is built with [Grommet](http://grommet.io/), and ships with a custom [SCSS](http://sass-lang.com/) Grommet theme in  `styles/grommet/`.

SCSS file will be automatically watched and built when you run `yarn start`.  The built `.css` output will have the same filename and live in the same directory as it's `.scss` counterpart.  Make sure to import the `.css` output in JavaScript files, not the raw `.scss`.  Create React App is not configured to import `.scss`.

## Flow
Library definitions can be installed with `node_modules/.bin/flow-typed install <library>@<version>`

## Partners

Music City Legal Hackers

## Deployment

This is deployed to Github Pages automatically by our [Travis configuration](.travis.yml).

## License
[MIT](LICENSE)
