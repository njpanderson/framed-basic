const rollup = require('rollup');
const config = require('./rollup.config.js');

module.exports = {
	root: __dirname,
	builder: (options, outputFile) => {
		// Return the promise
		return new Promise((resolve, reject) => {
			let jsFilename = 'bundle.js';

			config.output = {
				...config.outputOptions,
				file: outputFile
			};

			rollup.rollup(config.input)
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
