# BUILD

We use [webpack](https://webpack.github.io/) & [babel](https://babeljs.io/) to compile the assets for this project.

If you are serving the project, then no assets are compiled into the source tree, they are served directly from [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html). Hot reloading of React components is achieved with the [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) webpack plugin, which is integrated via the [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform/) plugin, configured in our .babel-plugin-react-transform

## Templates
We use handlebars to inject various artefacts from the webpack job into the index file that is used to serve the project. These template files are located in **/resources/webpack/templates**

NB: The assets that are served dynamically through webpack-dev-server get compiled to static assets in the **/build** folder if you run:

    npm run build
