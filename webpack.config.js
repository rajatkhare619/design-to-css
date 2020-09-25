const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve('./dist/index.html'),
			template: path.resolve('./src/index.html'),
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
	}
};

module.exports = config;
