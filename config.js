const scss = require('rollup-plugin-scss');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = (options) => {
	return {
		inputOptions: {
			input: './src/main.js',
			plugins: [
				resolve(),
				commonjs(),
				scss({
					sass: require('sass')
				})
			]
		},
		outputOptions: {
			format: 'iife'
		}
	};
};
