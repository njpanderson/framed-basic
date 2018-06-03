const path = require('path');
const util = require('util');
const rollup = require('rollup');
const rollupConfig = require('./config.js');

module.exports = {
	root: __dirname,
	builder: (options, outputFile) => {
		// Return the promise
		return new Promise((resolve, reject) => {
			let jsFilename = 'bundle.js',
				config, compiler;

			config = rollupConfig(options);

			// Override config
			// if (typeof config.inputOptions.input === 'string') {
			// 	config.inputOptions.input = path.resolve(
			// 		this.template.root + path.sep + config.inputOptions.input
			// 	);
			// }

			config.outputOptions = Object.assign(config.outputOptions, {
				file: outputFile
			});

			console.log(util.inspect(config, {
				depth: 3,
				colors: true
			}));

			rollup.rollup(config.inputOptions)
				.then((bundle) => bundle.write(config.outputOptions))
				.then(() => {
					return {
						script: jsFilename
					};
				})
				.catch(reject);
		});
	},
	templates: {
		index: 'index.html'
	}
};
