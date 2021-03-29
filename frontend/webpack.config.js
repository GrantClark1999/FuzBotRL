const { resolve } = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');

const pages = [
	'Config',
	'LiveConfig',
	'Mobile',
	'Panel',
	'VideoComponent',
	'VideoOverlay',
];

module.exports = (_env, { mode, devrig }) => {
	const { entry, plugins } = pages.reduce(
		({ entry, plugins }, page) => {
			entry[page] = `./src/${page}.js`;
			plugins.push(
				new HtmlWebpackPlugin({
					title: `${pkg.description} ${entry}`,
					inject: true,
					chunks: [page],
					template: resolve(__dirname, 'template.html'),
					filename: `${page
						.split(/(?=[A-Z])/)
						.join('_')
						.toLowerCase()}.html`,
				})
			);
			return { entry, plugins };
		},
		{
			entry: {},
			plugins: [
				new CleanWebpackPlugin(),
				new webpack.HotModuleReplacementPlugin(),
				new webpack.ProvidePlugin({ process: 'process' }),
			],
		}
	);

	return {
		entry,
		plugins,
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
					test: /\.(t|j)sx?$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								require('@babel/preset-env'),
								require('@babel/preset-react'),
								require('@babel/preset-typescript'),
							],
						},
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
			extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
			fallback: {
				stream: require.resolve('stream-browserify'),
				crypto: require.resolve('crypto-browserify'),
			},
		},
		output: {
			filename: '[name].bundle.js',
			path: resolve(__dirname, 'dist'),
		},
	};
};
