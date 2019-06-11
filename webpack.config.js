const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const srcFolder = path.resolve(__dirname, './src');
const distFolder = path.resolve(__dirname, './dist');

const config = (env, argv) => {
  const DEVELOPMENT = argv && argv.mode === 'development';
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

  plugins.push(
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('development'),
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
      filename:'[name].bundle.js',
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
        'pages': path.resolve(srcFolder, 'pages'),
        'themes': path.resolve(srcFolder, 'themes'),
        'src': srcFolder,
        'resources': path.resolve(srcFolder, 'resources'),
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
                emitError: DEVELOPMENT,
                emitWarning: DEVELOPMENT,
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
                      displayName: DEVELOPMENT,
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
    devtool:'cheap-module-eval-source-map',
    plugins,
  };
};

module.exports = config;
