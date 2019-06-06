const path = require('path');
const webpack = require('webpack');
const { exec } = require('child_process');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

const srcFolder = path.resolve(__dirname, './src');
const distFolder = path.resolve(__dirname, './dist');

const config = (env, argv) => {
  const PRODUCTION = argv && argv.mode !== 'development';
  const mainEntryPoint = './src/index.tsx';

  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
  ];

  if (env && env.analyze) {
    // Use option --env.analyze to enable analyzer
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (PRODUCTION) {
    plugins.push(new CompressionPlugin());
  }

  plugins.push(
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(PRODUCTION ? 'production' : 'development'),
    })
  );

  return {
    target: 'web',
    performance: { hints: false },
    entry: {
      platform: mainEntryPoint,
    },
    output: {
      publicPath: '/',
      path: distFolder,
      // This filename change is because webpack-dev-server can't handle [chunkHash]
      filename: PRODUCTION
        ? '[name].[chunkHash].bundle.js'
        : '[name].bundle.js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // TODO: Fix alias paths
      alias: {
        'main-styled-components': path.resolve(
          srcFolder,
          'themes/styledComponents.ts'
        ),
        'nv-pages': path.resolve(srcFolder, 'pages'),
        'nv-themes': path.resolve(srcFolder, 'themes'),
        'nv-src': srcFolder,
        'StyledRoot': path.resolve(__dirname, './src/StyledRoot/StyledRoot'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          use: [
            {
              loader: 'eslint-loader',
              options: {
                emitError: PRODUCTION,
                emitWarning: !PRODUCTION,
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                plugins: [
                  [
                    'babel-plugin-styled-components',
                    {
                      displayName: !PRODUCTION,
                      fileName: false,
                    },
                  ],
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                onlyCompileBundledFiles: true,
              },
            },
          ],
        },
        {
          // Images
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      compress: true,
      contentBase: distFolder,
    },
    devtool: PRODUCTION ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    plugins,
  };
};

module.exports = config;
