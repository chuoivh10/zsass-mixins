const sass = require('node-sass');

module.exports = function (grunt) {

	var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */' + '\n';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		concat: {
			options: {
				banner: banner
			},
			build: {
				src: ['mixins/*.scss', '!mixins/_zsass-mixins.scss'],
				dest: 'mixins.scss',
			}
		},

		sass: {
			css: {
				options: {
					implementation: sass,
					unixNewlines: true,
					style: 'expanded',
					banner: banner,
					sourceMap: true
				},
				dist: {
					files: {
						'test/css/main.css': 'test/scss/main.scss'
					}
				}
			}
		},

		sassdoc: {
			default: {
				src: 'mixins.scss',
				options: {
					dest: 'doc',
					basePath: 'https://github.com/chuoivh10/zsass-mixins',
				},
			},
		}
	});

	grunt.event.on('sassdoc.start', function (target, src, dest) {
		grunt.log.writeln(target + ': compiling ' + src + ' to ' + dest)
	})

	grunt.event.on('sassdoc.done', function (target, src, dest) {
		grunt.log.writeln(target + ': ' + src + ' compiled to ' + dest)
	})

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-sassdoc');

	// Default task
	grunt.registerTask('default', ['concat', 'sass']);
	grunt.registerTask('doc', ['concat', 'sassdoc']);

};