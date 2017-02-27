const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
	entry: './src/test-original.js',

	output: {
		path: path.resolve(__dirname, 'src'),
		filename: `test-webpack.js`
	},
	resolve: {
		extensions: ['.js']

	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},
	devServer: {
		contentBase: '.',
		noInfo: true,
		compress: true,
		clientLogLevel: 'warning',
		stats: 'errors-only',
		historyApiFallback: true,
		port: 3001,
		host: 'localhost'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$/,
			threshold: 0,
			minRatio: 0.8
		})
	]
};
