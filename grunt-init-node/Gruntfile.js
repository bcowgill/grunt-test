/*jshint indent: 2, maxstatements: 100, maxlen: 110 */
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
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    /**
      jshint validation of javascript code.
      @see {@link https://github.com/gruntjs/grunt-contrib-jshint About jshint grunt plugin}
      @see {@link http://jshint.com/docs/options/ jshint options}
      @see {@link https://github.com/jshint/jshint/blob/master/src/messages.js Warning codes for jshint}
    */
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        globals: {},
      },
      gruntfile: {
        src: ['package.json', 'Gruntfile.js']
      },
      single: {
         // grunt jshint:single --check-file filename
         src: [grunt.option('check-file') || 'package.json']
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
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
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  [
    'grunt-contrib-nodeunit',
    'grunt-contrib-jshint',
    'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  // Default task.
  grunt.registerTask('default', ['all']);
  grunt.registerTask('all', ['jshint:gruntfile', 'jshint:lib', 'jshint:test', 'nodeunit']);
  grunt.registerTask('single', ['jshint:single']);
};
