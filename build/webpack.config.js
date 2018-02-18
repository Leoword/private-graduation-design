'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, '../app/index.js')
	},
	output: {
		filename: '[name].js',
		path:path.resolve(__dirname, '../dist'),
		publicPath: '/'		
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf|svg)([\?]?.*)$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader'
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'mainPage',
			filename: 'index.html',
			template: path.resolve(__dirname, './index.html')
		}),
		new ExtractTextPlugin('styles.css'),
		new CleanWebpackPlugin(
			['dist/styles.*.css', 'dist/*.jpg'],
			{
				root: path.resolve(__dirname, '../'),
				dry:false
			}
		)
	]		
};