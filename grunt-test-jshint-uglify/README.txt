Experimenting with grunt build system for javascript

References:
package.json Spec: https://www.npmjs.org/doc/json.html
example npm's package.json: http://registry.npmjs.org/npm/latest
tooling sublime text for grunt: https://www.npmjs.org/package/sublime-grunt-build
html5 lint https://github.com/alicoding/grunt-lint5
qunit npm package: https://www.npmjs.org/package/qunit
qunit cookbook: http://qunitjs.com/cookbook/
benchmark http://benchmarkjs.com/
jasmine http://jasmine.github.io/2.0/introduction.html
   http://evanhahn.com/how-do-i-jasmine/

Shell history:
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test (master)$ mkdir grunt-test-jshint-uglify
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test (master)$ cd grunt-test-jshint-uglify/
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-test-jshint-uglify (master)$ grunt-init basic
Running "init:basic" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

"basic" template notes:
This template tries to guess file and directory paths, but you will most likely
need to edit the generated Gruntfile.js file before running grunt. If you run
grunt after generating the Gruntfile, and it exits with errors, edit the file!

Please answer the following:
[?] Is the DOM involved in ANY way? (Y/n) y
[?] Will files be concatenated or minified? (Y/n) y
[?] Will you have a package.json file? (Y/n) y
[?] Do you need to make any changes to the above before continuing? (y/N) n

Writing Gruntfile.js...OK
Writing package.json...OK

Initialized from template "basic".

Done, without errors.
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-test-jshint-uglify (master %)$ vim package.json
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-test-jshint-uglify (master %)$ npm install
... installs all the grunt stuff.
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-test-jshint-uglify (master %)$ grunt
... runs the grunt build. jshint, qunit, etc fail because nothing there

Next jshint configuration based on https://github.com/bcowgill/jshint-test
Added csslint and lint5 configuration
Added benchmark.js  http://benchmarkjs.com/
  npm install benchmark --save-dev
  and a test/benchmark-test.html
Getting Qunit testing (in browser) going
   npm install qunit-assert-close --save-dev
cp node_modules/qunitjs/test/index.html test/qunit/qunit-test.html
added test/qunit/qunit-test.html .js and lib/object-to-test.js
Getting jasmine testing (in browser) going
   npm install jasmine-core --save-dev

Getting Mocha/Chai testing going
npm install -g mocha
npm install chai --save-dev

Getting jsdoc documentation generation going
npm install -g jsdoc



