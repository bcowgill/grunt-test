Experimenting with grunt build system for javascript

References:
package.json Spec: https://www.npmjs.org/doc/json.html
example npm's package.json: http://registry.npmjs.org/npm/latest
tooling sublime text for grunt: https://www.npmjs.org/package/sublime-grunt-build
qunit npm package: https://www.npmjs.org/package/qunit

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


