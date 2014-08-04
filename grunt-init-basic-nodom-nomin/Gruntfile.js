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

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    /**
      jshint validation of javascript code.
      @see {@link https://github.com/gruntjs/grunt-contrib-jshint About jshint grunt plugin}
      @see {@link http://jshint.com/docs/options/ jshint options}
      @see {@link https://github.com/jshint/jshint/blob/master/src/messages.js Warning codes for jshint}
    */
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
