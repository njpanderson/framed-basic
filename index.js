const rollup = require('rollup');
const rollupConfig = require('./rollup.config.js');

module.exports = {
	root: __dirname,
	builder: (options, outputFile) => {
		// Return the promise
		return new Promise((resolve, reject) => {
			let jsFilename = 'bundle.js',
				config = {};

			config.output = {
				...rollupConfig.outputOptions,
				file: outputFile
			};

			rollup.rollup({
				input: rollupConfig.input,
				plugins: rollupConfig.plugins
			})
				.then((bundle) => bundle.write(config.output))
				.then(() => {
					resolve({
						script: jsFilename
					});
				})
				.catch(reject);
		});
	},
	templates: {
		index: 'index.html'
	}
};
