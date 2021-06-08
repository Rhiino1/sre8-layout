const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO dynamically find all dashboard html files for each entry
const dashboardConfig = {
	entry: {
		generalPanel: './src/dashboard/scripts/generalPanel.js',
		obsPanel: './src/dashboard/scripts/obsPanel.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dashboard')
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'generalPanel.html',
			template: './src/dashboard/generalPanel.html',
			chunks: ['generalPanel']
		}),
		new HtmlWebpackPlugin({
			filename: 'obsPanel.html',
			template: './src/dashboard/obsPanel.html',
			chunks: ['obsPanel']
		}),
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	mode: 'production'
};

const graphicsConfig = {
	entry: {
		timer: ['./src/graphics/scripts/timer.js'],
		layoutEspera: ['./src/graphics/scripts/layoutEspera.js'],
		layout169: ['./src/graphics/scripts/layout16-9.js'],
		music: ['./src/graphics/scripts/music.js'],
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'graphics')
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'timer.html',
			template: './src/graphics/timer.html',
			chunks: ['timer']
		}),
		new HtmlWebpackPlugin({
			filename: 'layoutEspera.html',
			template: './src/graphics/layoutEspera.html',
			chunks: ['layoutEspera']
		}),
		new HtmlWebpackPlugin({
			filename: 'layout16-9.html',
			template: './src/graphics/layout16-9.html',
			chunks: ['layout169']
		}),
		new HtmlWebpackPlugin({
			filename: 'music.html',
			template: './src/graphics/music.html',
			chunks: ['music']
		}),
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	mode: 'production'
};

module.exports = [
	dashboardConfig,
	graphicsConfig
];
