/*jshint indent: 2, maxlen: 110, maxstatements: 100 */
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
*/
module.exports = function(grunt) {
  'use strict';
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
      jshint validation of javascript code.
      @see {@link https://github.com/gruntjs/grunt-contrib-jshint About jshint grunt plugin}
      @see {@link http://jshint.com/docs/options/ jshint options}
      @see {@link https://github.com/jshint/jshint/blob/master/src/messages.js Warning codes for jshint}
    */
    jshint: {
      options: {
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
    },
    /**
      less compiler for css.
      @see {@link https://github.com/gruntjs/grunt-contrib-less About less grunt plugin}
	  @see {@link http://lesscss.org/ less compiler documentation}
    */
    less: {
      development: {
        options: {
          paths: ['css'],
		  dumpLineNumbers: 'comments',  // comments, mediaquery, all
          modifyVars: {
            frontend: false,
            theme: 'server'
          }
        },
        files: {
          'dist/styles.less.css': 'less/styles.less'
        }
      },
      production: {
        options: {
          paths: ['css'],
          cleancss: false // true
        },
        files: {
          'dist/styles.front.css': 'less/styles.less'
        }
      }
    },
    /**
	  Validate css with csslint
      @see {@link https://github.com/gruntjs/grunt-contrib-csslint Grunt csslint plugin}
    */
    csslint: {
      strict: {
        options: { import: 2 },
        src: ['dist/*.css']
      },
      lax: {
        options: { import: false },
        src: ['dist/*.css']
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
      templates: [
        'html/less-test.html',
        'html/less-test-client-side.html'
      ],
      ignoreList: [
        'message to be ignored'
      ]
    },
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
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-lint5');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['all']);
  grunt.registerTask('all', ['jshint:gruntfile', 'less',
    'csslint:strict', 'lint5:validate', 'lint5:legacy']);
  grunt.registerTask('single', ['jshint:gruntfile', 'less']);

};
