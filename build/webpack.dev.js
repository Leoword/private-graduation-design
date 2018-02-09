'use strict';

const config = module.exports = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');

config.devtool = 'inline-source-map';
config.devServer = {
	contentBase: path.resolve(__dirname, '../dist'),
	port: 2000,
	hot: true,
	proxy: {
		'/api': 'http://localhost:4000'
	}
};

config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		'NODE_ENV': "'development'"
	}
}));