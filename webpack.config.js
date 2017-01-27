var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: __dirname + '/src'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css')
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
};