const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
	entry: './test-original.js',

	output: {
		path: __dirname,
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
            threshold: 10240,
            minRatio: 0.8
        })
	]
};
