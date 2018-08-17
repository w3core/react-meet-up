const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('./config');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	plugins: [
		new CleanWebpackPlugin([ 'dist' ]),
		new HtmlWebpackPlugin(config)
	],
	output: {
		filename: '[name].bundle.js',
		path: `${ __dirname }/dist`
	}
};
