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
        src: ['lib/*.js'],
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
    // the jshint warning codes are in:
    // node_modules/grunt-contrib-jshint/node_modules/jshint/src/messages.js
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
        src: ['package.json'] // set to just check a single file
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
//          'noyield': true,
          'maxerr': 5000,
          'globals': '{}'
        },
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
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
    lint5: {
      dirPath: './',
      defaults: {
        'email': 'a@a.com',
        'username': 'abcd'
      },
      templates: [
        'html/index.html',
        'test/benchmark-test.html',
        'test/qunit/qunit-test.html'
      ],
      ignoreList: [
        'message to be ignored'
      ]
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
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-lint5');

  // Default task.
  grunt.registerTask('default', ['all']);
  grunt.registerTask('all', ['jshint:gruntfile', 'concat', 'uglify',
    'csslint:strict', 'lint5', 'jshint:lib_test', 'jshint:dist']);
  grunt.registerTask('single', ['jshint:single']);
  grunt.registerTask('permissive', ['jshint:permissive']);
  grunt.registerTask('qunit', ['jshint', 'qunit', 'concat', 'uglify']);

};
