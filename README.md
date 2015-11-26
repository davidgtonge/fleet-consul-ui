# Redux Skeleton


This project contains a bare bones redux setup

## Getting Started

This project is built using:

* [Babel](https://babeljs.io/)
* [React](https://facebook.github.io/react/)
* [redux](http://redux.js.org/)
* [redux-router](https://github.com/rackt/redux-router)
* [react-redux](https://github.com/rackt/react-redux)
* [webpack](https://webpack.github.io/)

### NPM Scripts

We have tried to avoid using heavier build tools like Grunt/Gulp and use NPM
scripts directly.

    npm i // install deps...duh
    npm run serve // serve site (dev mode)
    npm run build // generate build assets in ./build
    npm run test // run (unit) test suite


## Project Structure

    /docs
    /resources
    /githooks - see Githooks
    | /scripts
    | /webpack  
    /src
      /app
      | /container - binds the app to React Router
      |   /env
      |   | - dev.js
      |   | - prod.js
      |   /store - the root store of the application
      |   | - configure-store.js - binds middleware and reducers
      |   |                      to the store/router
      |   | - app-reducer.js - manages coarse application state,
      |   |                   i.e. initialized/error
      |   /utils - dev-tools, other stuff
      /packages
      | /action-creators
      | /components
      | /middleware
      | /pages
      | | /routes
      | | /<page-name>
      | | - index.js - returns the root controller
      | |              also: action-creators, reducers etc
      | /reducers
      | /services
      |   /guards - a series of components that are wrapped
      |             around the application to 'guard' it
      /styles - css

### Bootstrapping

Grab all the stuff you need to feed to the application in **main.js**

    import init from "./app/init"
    import middleware from "./packages/middleware"
    import reducers from "./packages/reducers"
    import routes from "./packages/pages/routes"
    import initializer from "./packages/action-creators/initialize"

    init(routes, middleware, reducers).dispatch(initializer)

The last line allows us to feed in an initialization function to perform any async required to fetch stuff from the server. If this is complete, the app will be marked as initialized, and the Initialization guard is (A loading spinner) removed.

### TroubleShooting

#### State changes don't update the view
Redux compares the state object returned from a reducer with the existing state. If you mutate that state and return it, then redux will disregard it. You need to return a fresh object reference if you want to trigger a re-render.

### Githooks

To safeguard the project quality, we like to enforce some tasks on commit & push.
Please ensure you have copied the githooks in the resources folder:

    cp ./resources/githooks/* ./.git/hooks/
