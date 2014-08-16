#!/bin/bash
# on my winpc with cygwin grunt-jsdoc not working so do by hand
grunt windows
echo Run tests
mocha --reporter spec test/jasmine/ test/mocha-chai/
echo Create jsdoc documentation
rm -rf doc
jsdoc --destination doc --recurse lib/ --tutorials tutorial/ --configure jsdoc.conf.json
