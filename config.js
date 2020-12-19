import scss from 'rollup-plugin-scss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

module.exports = (options) => {
	return {
		inputOptions: {
			input: './src/main.js',
			plugins: [
				nodeResolve(),
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
