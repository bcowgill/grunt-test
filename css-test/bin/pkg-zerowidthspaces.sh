#!/bin/bash
[ -d dist ] || mkdir dist
NAME=zerowidthspaces
echo creating dist/$NAME.tgz
tar cvzf dist/$NAME.tgz html/no-spacing.html */$NAME.*
