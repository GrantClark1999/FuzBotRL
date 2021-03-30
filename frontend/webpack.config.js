const { resolve } = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const pkg = require('./package.json');

const componentToPage = {
  App: ['Mobile', 'Panel', 'VideoComponent', 'VideoOverlay'],
  Config: ['Config'],
  LiveConfig: ['LiveConfig'],
};

const devPlugins = [new webpack.HotModuleReplacementPlugin()];
const prodPlugins = [new CleanWebpackPlugin()];

const { entry, plugins } = Object.entries(componentToPage).reduce(
  ({ entry, plugins }, [component, pages]) => {
    entry[component] = `./src/pages/${component}.tsx`;
    for (const page of pages) {
      plugins.push(
        new HtmlWebpackPlugin({
          title: `${pkg.description} ${page}`,
          inject: true,
          chunks: [component],
          template: resolve(__dirname, 'template.html'),
          filename: `${page
            .split(/(?=[A-Z])/)
            .join('_')
            .toLowerCase()}.html`,
        })
      );
    }
    return { entry, plugins };
  },
  {
    entry: {},
    plugins: [new webpack.ProvidePlugin({ process: 'process' })],
  }
);

const babelOptions = {
  presets: [require('@babel/preset-env'), require('@babel/preset-react')],
};

module.exports = (_env, { mode, devrig }) => ({
  entry,
  plugins: plugins.concat(mode === 'development' ? devPlugins : prodPlugins),
  optimization: {
    minimize: false, // this setting is default to false to pass review more easily. you can opt to set this to true to compress the bundles, but also expect an email from the review team to get the full source otherwise.
  },
  devServer:
    mode === 'development'
      ? {
          contentBase: resolve(__dirname, 'dist'),
          https: true,
          port: 8080,
          host: devrig ? 'localhost.rig.twitch.tv' : 'localhost',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          allowedHosts: ['localhost.rig.twitch.tv', 'localhost'],
        }
      : undefined,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
    },
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
});
