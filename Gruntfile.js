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
			app: {
				files: {
					'<%= config.app %>/js/main.js': [
												'<%= config.app %>/components/js/main.js',
												'<%= config.app %>/components/js/controller.js',
												'<%= config.app %>/components/js/dom.js',
												'<%= config.app %>/components/js/chart_conf.js',
												]
				}
			},//app
			dist: {
				files: {
					'<%= config.dist %>/js/main.js': [
						'<%= config.app %>/js/main.js',
						'<%= config.app %>/../bower_components/angular/angular.js',
						'<%= config.app %>/../bower_components/ng-file-upload/ng-file-upload.js',
					]
				}
			},//dist
			bower: {
				options: {
					mangle: true,
					compress: true
				},//options
				files: {
					'<%= config.app %>/js/bower.min.js':'<%= config.app %>/js/bower.js'
				},//files
			},//bower
		},//uglify

		watch: {
			options: { livereload: true },
			scripts: {
				files: [
								'<%= config.app %>/components/js/main.js',
								'<%= config.app %>/components/js/controller.js',
								'<%= config.app %>/components/js/dom.js',
								'<%= config.app %>/components/js/chart_conf.js',
							 ],
				tasks: ['uglify:app']
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
					base: '<%= config.app %>',
					port: 5000,
					keepalive: true,
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
						'<%= config.dist %>/**/*',
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

		cssmin: {
			dist: {
				files: {
					'<%= config.dist %>/css/style.css': [
						'<%= config.app %>/css/style.css'
					]
				}//files
			}//dist
		},//cssmin

		copy: {
			dist: {
				files: {
					'<%= config.dist %>/':'<%= config.app %>/*.{ico,png,txt}',
					'<%= config.dist %>/images':'images/{,*/}*.webp',
					'<%= config.dist %>/styles/style.css':'<%= config.app %>/styles/style.css',
					'<%= config.dist %>/scripts/scripts.js':'<%= config.app %>/js/main.js',
					'<%= config.dist %>/index.html':'<%= config.app %>/index.html'
				}//files
			}//dist
		},//copy

		bower_concat: {
			all: {
				dest: '<%= config.app %>/js/bower.js'
			}//all
    },//bower_concat

    htmlmin: {
    	dist: {
    		options: {
    			removeComments: true,
    			collapseWhiteSpace: true
    		},
    		files: {
    			'<%= config.dist %>/index.html':'<%= config.app %>/index.html'
    		}
    	},//dist
    },//htmlmin

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

	grunt.registerTask('build', [
		'clean:dist',
		'useminPrepare',
		'cssmin',
		'uglify:dist',
		'copy:dist',
		'htmlmin'
	]);

}//exports
















