'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		index: path.resolve(__dirname, '../app/index.js')
	},
	output: {
		filename: '[name].js',
		path:path.resolve(__dirname, '../dist'),
		publicPath: '/'		
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		port: 2000,
		hot: true,
		proxy: {
			'/api': 'http://localhost:4000'
		}
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
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('styles.[hash:5].css')
	]	
};