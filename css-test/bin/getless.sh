#!/bin/bash
# Grab less.js for use in front end. not recommended for production but ok for developing/debugging

VER=1.7.0
DIR=../lib/3rdparty

[ -d $DIR ] || mkdir -p $DIR

pushd $DIR

rm less-$VER*.js
wget https://raw.github.com/less/less.js/master/dist/less-$VER.js
wget https://raw.github.com/less/less.js/master/dist/less-$VER.min.js

popd

