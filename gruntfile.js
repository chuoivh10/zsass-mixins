module.exports = function (grunt) {

	var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */' + '\n';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),
        
		sassdoc: {
			default: {
				src: 'mixins.scss',
				options: {
					dest: 'doc',
					basePath: 'https://github.com/chuoivh10/zsass-mixins',
				},
			},
		},
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-sassdoc');

	// Default task
	grunt.registerTask('default', ['sassdoc']);

};