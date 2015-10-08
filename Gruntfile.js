'user strict'

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var config = {
		app: 'app',
		dist: 'dist'
	}

	grunt.initConfig({
		config: config,

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass

		uglify: {
			my_target: {
				files: {
					'<%= config.app %>/js/main.js': [
												'<%= config.app %>/components/js/main.js',
												'<%= config.app %>/components/js/controller.js',
												'<%= config.app %>/components/js/dom.js'
												]
				}
			}
		},//uglify

		watch: {
			options: { livereload: true },
			scripts: {
				files: [
								'<%= config.app %>/components/js/main.js',
								'<%= config.app %>/components/js/controller.js',
								'<%= config.app %>/components/js/dom.js'
							 ],
				tasks: ['uglify']
			}, //scripts
			sass: {
				files: ['<%= config.app %>/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['<%= config.app %>/*.html']
			} //html
		}, //watch

		wiredep: {
			app: {
				src: ['<%= config.app %>/index.html'],
			}//app
		},//wiredep

		php: {
			dist: {
				options: {
					base: 'app',
					port: 8000,
					open: true
				}//options
			}//dist
		},//php

		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
					]//src
				}]//files
			},//dist
			server: '.tmp'
		},//clean

		useminPrepare: {
			options: {
				dest: '<%= config.dist %>'
			},
			html: '<%= config.app %>/index.html'
		},//userminPrepare

	}); // initConfig

	grunt.registerTask('serve', 'Compile then start connect a web server', function(target) {
		if (target == 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'php',
			'watch'
		]);
	});
}//exports
















