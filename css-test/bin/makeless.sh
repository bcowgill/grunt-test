#!/bin/bash
# run the less command to compile the server side CSS from the less file

pushd ..

lessc --line-numbers=comments --modify-var='frontend=false' --modify-var='theme=server' less/styles.less > dist/styles.less.css

popd
