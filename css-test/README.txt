Installation

# globally so lessc compiler command is available
npm install -g less

then:

# just check syntax
lessc --lint --strict-imports styles.less

lessc styles.less > styles.css
# minified output
lessc --compress styles.less > styles.min.css
# even more minified output
lessc --clean-css styles.less > styles.min.css

# include filename and line numbers in included ouput
lessc --line-numbers=comments mediaquery or all

# override a value defined in the .less file
lessc --modify-var='mode=debug' styles.less > styles.css

Grunt, package.json

npm install less --save-dev
npm install grunt-contrib-less --save-dev

Use in front end for dev/debugging

wget https://raw.github.com/less/less.js/master/dist/less-1.7.0.js
wget https://raw.github.com/less/less.js/master/dist/less-1.7.0.min.js

# wget https://github.com/less/less.js/archive/master.zip

Also available on CDN
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.0/less.min.js"></script>


Installing Sass, compass, foundation

with ruby installed

gem install sass --version=3.4.2
gem install compass compass-validator foundation

