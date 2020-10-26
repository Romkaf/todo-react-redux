const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': 'src/components',
		'@styles': 'src/styles',
		'@constants': 'src/constants',
		'@models': 'src/models',
	})(config);

	return config;
};
