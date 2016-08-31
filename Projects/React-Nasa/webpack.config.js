module.exports = {
	entry: {
		main: './public/app/reactApp.js'
	},
	output: {
		filename: 'bundle.js',
		path: './public/dist'
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
