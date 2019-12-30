const path = require('path');

const rules = [
	{
		//add rules in here if u want webpack to read in images and css
		test: /\.tsx?/,
		exclude: /node_modules/,
		loader: 'babel-loader'
	}
];

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'), //tells where to put minified build
		filename: 'bundle.js' //all js compiled to here
	},
	module: { rules },
	resolve: { extensions: [ '.ts', '.tsx', '.js' ] },
	devServer: {
		contentBase: './',
		port: 5000
	}
};
