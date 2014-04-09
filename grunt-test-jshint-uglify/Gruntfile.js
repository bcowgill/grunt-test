/*jshint indent: 2 */
/*global module:false*/
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
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        'indent': 3,
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
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      },
    },
    qunit: {
      files: ['test/**/*.html']
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('qunit', ['jshint', 'qunit', 'concat', 'uglify']);

};
