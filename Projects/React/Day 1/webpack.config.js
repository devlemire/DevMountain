module.exports = {
	entry: {
		main: './react/app.js'
	},
	output: {
		filename: 'bundle.js',
		path: './public'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'css'
			}
		]
	}
};
