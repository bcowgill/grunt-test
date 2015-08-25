#!/bin/bash
# make-mocha-dark.sh > mocha-dark.js
# grab the mocha.js file and change the canvas progress indicator to
# a dark colour scheme.
FILE=${1:-../../node_modules/mocha/mocha.js}

perl -pne 's{fillText}{fillStyle = "yellow"; // BSAC DARK SCHEME\n    ctx.fillText}xmsg' $FILE
