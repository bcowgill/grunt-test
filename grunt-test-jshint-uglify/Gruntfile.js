/*jshint node: true, indent: 4, maxlen: 110, maxstatements: 100 */
/*global module:false*/
/**
	@file Gruntfile.js
	@author Brent S.A. Cowgill
	@see {@link module:Gruntfile}
	@description
	Grunt build configuration.

	@see {@link http://usejsdoc.org/ JSDoc Documentation}
*/

/**
	Grunt build configuration.
	@module Gruntfile
	@todo Need to add a test and build target. got mocha test running in browser, 
	need to get running on command line see perljs or jsclass-test for example
*/


module.exports = function(grunt) {
	'use strict';
	var glob = require('glob'), oGlobOptions = {},
		aTemplates = glob.sync('test/**/*-test.html', oGlobOptions);
	aTemplates.push('html/index.html');
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		/**
			clean up files on disk before build.
			@see {@link https://github.com/gruntjs/grunt-contrib-clean About clean grunt plugin}
		*/
		clean: {
			jsdoc: {
				src: ['doc/']
			}
		},
		/**
			concatenate files into one big file.
			@see {@link https://github.com/gruntjs/grunt-contrib-concat About concat grunt plugin}
		*/
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: ['lib/object-to-test.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},
			qunit: {
				src: [
					'node_modules/qunitjs/qunit/qunit.js',
					'node_modules/qunit-assert-close/qunit-assert-close.js'
				],
				dest: 'dist/qunit/qunit-bundle.js'
			},
			jasmine: {
				src: [
					'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
					'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
					'node_modules/jasmine-core/lib/jasmine-core/boot.js'
				],
				dest: 'dist/jasmine/jasmine-bundle.js'
			}
		},
		/**
			minimize the size of code with uglify.
			@see {@link https://github.com/gruntjs/grunt-contrib-uglify About uglify grunt plugin}
		*/
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			},
			qunit: {
				src: '<%= concat.qunit.dest %>',
				dest: 'dist/qunit/qunit-bundle.min.js'
			},
			jasmine: {
				src: '<%= concat.jasmine.dest %>',
				dest: 'dist/jasmine/jasmine-bundle.min.js'
			}
		},
		/**
			jshint validation of javascript code.
			@see {@link https://github.com/gruntjs/grunt-contrib-jshint About jshint grunt plugin}
			@see {@link http://jshint.com/docs/options/ jshint options}
			@see {@link https://github.com/jshint/jshint/blob/master/src/messages.js Warning codes for jshint}
		*/
		jshint: {
			options: {
				//j s hintrc: '.jshintrc',
				//'indent': 3,
				'maxparams': 4,
				'maxdepth': 3,
				'maxstatements': 11,
				'maxcomplexity': 5,
				'maxlen': 100,
				'bitwise': true,
				'curly': true,
				'eqeqeq': true,
				'forin': true,
				'freeze': true,
				'immed': true,
				'latedef': true,
				'newcap': true,
				'noarg': true,
				'noempty': true,
				'nonew': true,
				'plusplus': true,
				'quotmark': true,
				'undef': true,
				'unused': 'strict',
				'strict': true,
				'trailing': true,
				'laxcomma': true,
				'laxbreak': true,
				'multistr': true,
				'smarttabs': true,
				'maxerr': 5000,
				'globals': '{}'
			},
			gruntfile: {
				src: ['package.json', 'Gruntfile.js']
			},
			single: {
				// grunt jshint:single --check-file filename
				src: [grunt.option('check-file') || 'package.json']
			},
			lib_test: {
				src: ['lib/**/*.js', 'test/**/*.js']
			},
			dist: {
				options: { 'maxstatements': 100 },
				src: ['dist/**/*.js']
			},
			permissive: { // when you want to jshint with more permissive settings
				options: {
					'bitwise': false,
					'curly': false,
					'eqeqeq': false,
					'forin': false,
					'freeze': false,
					'immed': false,
					'latedef': false,
					'newcap': false,
					'noarg': false,
					'noempty': false,
					'nonew': false,
					'plusplus': false,
					'quotmark': false,
					'undef': false,
					'unused': false,
					'strict': false,
					'trailing': false,
					'asi': true,
					'boss': true,
					'debug': true,
					'esnext': true,
					'evil': true,
					'expr': true,
					'funcscope': true,
					'gcl': true,
					'globalstrict': true,
					'iterator': true,
					'lastsemic': true,
					'laxbreak': true,
					'laxcomma': true,
					'loopfunc': true,
					'moz': true,
					'multistr': true,
					'notypeof': true,
					'proto': true,
					'scripturl': true,
					'smarttabs': true,
					'shadow': true,
					'sub': true,
//					'noyield': true,
					'maxerr': 5000,
					'globals': '{}'
				},
				src: ['lib/**/*.js', 'test/**/*.js']
			}
		},
		/**
		Validate css with csslint
			@see {@link https://github.com/gruntjs/grunt-contrib-csslint Grunt csslint plugin}
		*/
		csslint: {
			strict: {
				options: { import: 2 },
				src: ['css/style.css']
			},
			lax: {
				options: { import: false },
				src: ['css/*.css']
			}
		},
		/**
			Validate html with lint5
			@see {@link https://www.npmjs.org/package/grunt-lint5 Grunt lint5 plugin}
		*/
		lint5: {
			dirPath: './',
			defaults: {
				'email': 'a@a.com',
				'username': 'abcd'
			},
			templates: aTemplates,
			ignoreList: [
				'message to be ignored'
			]
		},
		qunit: {
			files: ['test/**/*.html']
		},
		/**
			Create code documentation
			@see {@link https://github.com/krampstudio/grunt-jsdoc Grunt jsdoc plugin}
			@see {@link http://usejsdoc.org/ jsdoc documentation tags}
			@see {@link http://usejsdoc.org/about-commandline.html jsdoc command line options}
		*/
		jsdoc: {
			docs : {
				dest: 'doc',
				tutorials: 'tutorial',
				src: [
					'test/**/*.js',
					'lib/**/*.js',
					'Gruntfile.js'
					//'README.md'
				],
				options: {
					configure: 'jsdoc.conf.json'
				}
			}
		},
		/**
			Watch files and run build targets on change
			@see {@link https://github.com/gruntjs/grunt-contrib-watch Grunt watch plugin}
		*/
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			lib_test: {
				files: '<%= jshint.lib_test.src %>',
				tasks: ['jshint:lib_test', 'qunit']
			}
		}
	});

	// These plugins provide necessary tasks.
	[
		'grunt-contrib-clean',
		'grunt-contrib-concat',
		'grunt-contrib-uglify',
		'grunt-contrib-qunit',
		'grunt-contrib-jshint',
		'grunt-contrib-csslint',
		'grunt-lint5',
		'grunt-jsdoc',
		'grunt-contrib-watch'
	].forEach(function (task) {
		grunt.loadNpmTasks(task);
	});


	// Default task.
	grunt.registerTask('default', ['all']);
	grunt.registerTask('all', ['windows', 'docs']);
	grunt.registerTask('docs', ['clean:jsdoc', 'jsdoc']);
	grunt.registerTask('windows', [
		'jshint:gruntfile',
		'concat',
		'uglify',
		'csslint:strict',
		'lint5',
		'jshint:lib_test',
		'jshint:dist'
	]);
	grunt.registerTask('single', ['jshint:single']);
	grunt.registerTask('permissive', ['jshint:permissive']);
	grunt.registerTask('qunit', ['jshint', 'qunit', 'concat', 'uglify']);

};
