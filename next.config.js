const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const path = require('path');
const sassExtract = require('sass-extract');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const themeVariables = sassExtract.renderSync(
  {
    file: './src/styles/_theme.scss',
  },
  {
    plugins: [
      {
        plugin: 'sass-extract-js',
        options: {
          camelCase: false,
        },
      },
    ],
  }
);

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
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
  ],
  {
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];

        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles) || request.match(/restful-react/)) return callback();

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

        config.plugins.push(
          new ExtractCssChunks({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
          })
        );

        config.module.rules.push({
          test: /\.css$/,
          use: [
            {
              loader: ExtractCssChunks.loader,
              options: {
                publicPath: '/public/static',
              },
            },
            'css-loader',
          ],
        });
      }

      return config;
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: 'public/static',
    },
    exportTrailingSlash: true,
    pageExtensions: ['tsx'],
  }
);
