/*jshint indent: 2, maxstatements: 100 */
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
        src: ['css/*.css'],
        dest: 'dist/<%= pkg.name %>.css'
      },
    },
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
    csslint: {
      strict: {
        options: { import: 2 },
        src: ['css/*.css']
      },
      lax: {
        options: { import: false },
        src: ['css/*.css']
      }
    },
    lint5: {
      dirPath: './',
      defaults: {
        'email': 'a@a.com',
        'username': 'abcd'
      },
      templates: [
        'html/index.html'
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-lint5');

  // Default task.
  grunt.registerTask('default', ['all']);
  grunt.registerTask('all', ['jshint:gruntfile', 'concat', 'uglify',
    'csslint:strict', 'lint5']);
  grunt.registerTask('single', ['jshint:single']);

};
