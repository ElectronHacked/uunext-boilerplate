const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const path = require('path');
const sassExtract = require('sass-extract');

const themeVariables = sassExtract.renderSync({
  file: './src/styles/_theme.scss',
}, {
  plugins: [{
    plugin: 'sass-extract-js',
    options: {
      camelCase: false,
    },
  }, ],
});

module.exports = withPlugins(
  [
    [withSass],
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables.vars,
        },
      },
    ],
  ], {
    webpack: (config, {
      isServer
    }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];

        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }

      // config.resolve.alias['components'] = path.join(__dirname, 'components')

      return config;
    },
  }
);