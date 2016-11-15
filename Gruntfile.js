'use strict';

module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	
	var config = {
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		config: config,

		copy: {
			dist_html: {
				files: [
					{
						expand: true,
						cwd: '<%= config.app %>/',
						src: '*.html',
						dest: '<%= config.dist %>/',
						ext: '.min.html'
					}
				]
			},
			dist_styles: {
				files: [
					{
						expand: true,
						cwd: '<%= config.app %>/styles/',
						src: '*.css',
						dest: '<%= config.dist %>/styles/',
						ext: '.min.css'
					}
				]
			}
		},
		clean: {
			dist: {
				src: ['<%= config.dist %>/**/*'],
				dot: true //命中“.”开头的文件
			}
		}
	});

}