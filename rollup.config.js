const scss = require('rollup-plugin-scss');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
	input: './src/main.js',
	plugins: [
		nodeResolve(),
		commonjs(),
		scss({
			sass: require('sass')
		})
	],
	output: {
		format: 'iife'
	}
};
