test:
	./node_modules/.bin/mocha --reporter spec test/jasmine/ test/mocha-chai/

docs:
	rm -rf doc
	jsdoc --destination doc --recurse lib/ --tutorials tutorial/ --configure jsdoc.conf.json


doc: docs

.PHONY: test

.PHONY: docs
