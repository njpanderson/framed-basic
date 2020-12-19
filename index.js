const rollup = require('rollup');
const rollupConfig = require('./rollup.config.js');

module.exports = {
	root: __dirname,
	builder: (options, outputFile) => {
		// Return the promise
		return new Promise((resolve, reject) => {
			let jsFilename = 'bundle.js',
				config, compiler;

			config = rollupConfig(options);

			config.outputOptions = Object.assign({}, config.outputOptions, {
				file: outputFile
			});

			rollup.rollup(config.inputOptions)
				.then((bundle) => bundle.write(config.outputOptions))
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
