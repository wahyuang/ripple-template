const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: [
		'./src/js/app.js',
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		static: './dist',
		port: 8080,
		watchFiles: path.join(__dirname, 'src')
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					// MiniCssExtractPlugin.loader,
					// "style-loader",
					// "css-loader",
					// {
					// 	loader: "postcss-loader",
					// 	options: {
					// 		postcssOptions: {
					// 			plugins: ["autoprefixer"],
					// 		}
					// 	}
					// },
					// 'resolve-url-loader',
					// "sass-loader",
					MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                ]
                            }
                        }
                    },
                    'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
	]
}