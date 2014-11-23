#!/bin/bash
# on my winpc with cygwin grunt-jsdoc not working so do by hand
grunt windows
echo Run tests
mocha --reporter spec test/jasmine/ test/mocha-chai/
echo in browser jasmine tests file:///D:/d/s/github/grunt-test/grunt-test-jshint-uglify/test/jasmine/jasmine-test.html
echo in browser qunit tests file:///D:/d/s/github/grunt-test/grunt-test-jshint-uglify/test/qunit/qunit-test.html
node test/benchmark-test.js
echo in browser benchmark file:///D:/d/s/github/grunt-test/grunt-test-jshint-uglify/test/benchmark-test.html
echo Create jsdoc documentation
rm -rf doc
jsdoc --destination doc --recurse lib/ test/ --tutorials tutorial/ --configure jsdoc.conf.json
echo jsdoc - file:///D:/d/s/github/grunt-test/grunt-test-jshint-uglify/doc/index.html