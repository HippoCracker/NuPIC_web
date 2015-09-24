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
					'<%= config.app %>/js/main.js': ['<%= config.app %>/components/js/main.js']
				}
			}
		},//uglify

		watch: {
			options: { livereload: true },
			scripts: {
				files: ['<%= config.app %>/components/js/main.js'],
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
		}//wiredep

	}); // initConfig
}
















