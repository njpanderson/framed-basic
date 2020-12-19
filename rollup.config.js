import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
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
