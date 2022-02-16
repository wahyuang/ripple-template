const path = require('path');

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
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: ["autoprefixer"],
							}
						}
					},
					"sass-loader"
				]
			}
		]
	}
}