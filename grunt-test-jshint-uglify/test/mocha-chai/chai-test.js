/**
	Test plan for XXX module

	@file test/XXX-test.js
	@author Brent S.A. Cowgill
	@requires XXX
	@requires chai
	@requires mocha

	@see {@link http://chaijs.com/api/ Chai API Documentation}
	@see {@link http://visionmedia.github.io/mocha/ Mocha Documentation}
*/
'use strict';

/*
	======== A Handy Little Mocha/Chai Test Reference ========
	http://chaijs.com/guide/styles/
	http://chaijs.com/api/bdd/
	http://visionmedia.github.io/mocha/

	Test suites (mocha):
		describe(suite, fn);
		it(tests, fn);
		describe/it.only(description, fn) // run only one test/case
		describe/it.skip(suite, fn); // test marked pending and skips execution
		before(fn);
		after(fn);
		beforeEach(fn);
		afterEach(fn);

	Test assertions:
		assert.ok(actual, [message]); // truthy
		assert.notOk(actual, [message]); // falsy
		assert.equal(actual, expected, [message]);              // ==
		assert.notEqual(actual, expected, [message]);
		assert.strictEqual(actual, expected, [message]);        // ===
		assert.operator(actual, operator, expected, [message]); // < > etc
		assert.closeTo(actual, expected, delta, [message]);
		TODO closeTopercent(actual, expected, percent, delta, [message]) add with plugin utilities
		assert.match(actual, regex, [message]); // string or array
		// object or array
		assert.deepEqual(actual, expected, [message]);
		assert.lengthOf(actual, length, [message]);     // string or array length
		assert.include(haystack, needle, [message]);    // string or array contains
		assert.property(actual, property, [message]);
		assert.deepProperty(actual, property, [message]);    // property supports dot.notation[idx]
		assert.propertyVal(actual, property, value, [message]);
		assert.sameMembers(actual, expected, [message]);     // arrays ignore order of values
		assert.includeMembers(actual, expected, [message]);  // array subset is included
		// exceptions
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
		assert.throw/throws/Throw(fn, [constructor/string/regexp], [string/regexp], [message]);
		assert.doesNotThrow(fn, [constructor/regexp], [message]);
		// objects/types
		assert.typeOf(actual, type, [message]);
		assert.instanceOf(actual, constructor, [message]);
		assert.isTrue(actual, [message]);  // actual true

	Test expectations: (node and browsers)
		expect(actual, [message]).to.be.a(type);
		expect(actual, [message]).to.equal(expected);
		expect(actual, [message]).to.have.length(length);
		expect(actual, [message]).to.have.property(property).with.length(length);

	Test should: (node and non IE browsers)
		should.exist(actual);
		should.not.exist(actual); // to handle null/undefined
		should.equal(expected);
		should.not.equal(expected);
		should.throw/Throw([constructor/string/regexp], [string/regexp]);
		should.not.throw/Throw([constructor/string/regexp], [string/regexp]);
		actual.should.be.a(type);
		actual.should.be.an(type);
		actual.should.equal(expected);
		actual.should.not.equal(expected);
		actual.should.have.length(length);
		actual.should.have.property(property).with.length(length);
*/

var chai = require('chai'),
	assert = chai.assert,
	expect = chai.expect,
	should = chai.should(), // note function call here
	XXX = {
		do: function (s) { return s.toUpperCase(); },
		die: function(s) { throw(Error(s)); }
	};//require('../lib/XXX');

chai.config.includeStack = true;   // turn on stack trace on assertion failure
chai.config.showDiff = false;      // turn off reporter diff display
chai.config.truncateThreshold = 0; // disable truncating actual/expected values

beforeEach(function() {
	;
})

describe('#XXX.method()', function() {
	it('does something useful', function() {
		XXX.do('something useful').should.equal('SOMETHING USEFUL');
	});
	it('throws an error', function() {
		assert.throws(function () { XXX.die('horribly and slow') });
	});
	it('throws an error matching regex', function() {
		assert.throws(
			function () { XXX.die('horribly and slow') },
			/slow/);
	});
	it('throws an error matching regex', function() {
		should.Throw(
			function () { XXX.die('horribly and slow') },
			/slow/);
	});
	it('found within an array', function() {
		assert.match(
			['string in array', 'does it match?'],
			/match/,
			"does .match() look in array elements?");
	});

	it('no callback is a pending test.');
	it.skip('SKIPPED TEST does something useful', function() {
		XXX.do('with data').should.equal('something useful');
	});
});

describe.skip('SKIPPED SUITE #XXX.method()', function() {
	it('does something useful', function() {
		XXX.do('with data').should.equal('something useful');
	});
});

/*
	======== A Handy Big Chai Test Reference ========
	http://chaijs.com/guide/styles/
	http://chaijs.com/api/bdd/
	http://visionmedia.github.io/mocha/

	Install / Use
		npm install -r mocha
		npm install chai --save-dev
		mocha --reporter spec  # add to package.json/scripts/test
		mocha --reporter nyan
		mocha --reporters      # list supported output reporters
		npm test

	Test suites:
		describe(suite, fn);
		it(tests, fn);
		xdescribe(suite, fn); // test marked pending and skips execution
		xit(tests, fn);

	Test assertions:
		assert(expression, [message]);
		assert.fail(actual, expected, [message], [operator]);
		assert.ok(actual, [message]); // truthy
		assert.notOk(actual, [message]); // falsy
		assert.equal(actual, expected, [message]);              // ==
		assert.notEqual(actual, expected, [message]);
		assert.strictEqual(actual, expected, [message]);        // ===
		assert.notStrictEqual(actual, expected, [message]);
		assert.operator(actual, operator, expected, [message]); // < > etc
		assert.closeTo(actual, expected, delta, [message]);
		TODO closeTopercent(actual, expected, percent, delta, [message]) add with plugin utilities
		assert.match(actual, regex, [message]); // string or array
		assert.notMatch(actual, regex, [message]);
		// object or array
		assert.deepEqual(actual, expected, [message]);
		assert.notDeepEqual(actual, expected, [message]);
		assert.lengthOf(actual, length, [message]);     // string or array length
		assert.include(haystack, needle, [message]);    // string or array contains
		assert.notInclude(haystack, needle, [message]); // string or array contains
		assert.property(actual, property, [message]);
		assert.notProperty(actual, property, [message]);
		assert.deepProperty(actual, property, [message]);    // property supports dot.notation[idx]
		assert.notDeepProperty(actual, property, [message]); // property supports dot.notation[idx]
		assert.propertyVal(actual, property, value, [message]);
		assert.propertyNotVal(actual, property, value, [message]);
		assert.deepPropertyVal(actual, property, value, [message]);    // property supports dot.notation
		assert.deepPropertyNotVal(actual, property, value, [message]); // property supports dot.notation
		assert.sameMembers(actual, expected, [message]);    // arrays ignore order of values
		assert.includeMembers(actual, expected, [message]); // array subset is included
		// exceptions
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
		assert.throw/throws/Throw(fn, [constructor/string/regexp], [string/regexp], [message]);
		assert.doesNotThrow(fn, [constructor/regexp], [message]);
		// objects/types
		assert.typeOf(actual, type, [message]);
		assert.notTypeOf(actual, type, [message]);
		assert.instanceOf(actual, constructor, [message]);
		assert.notInstanceOf(actual, constructor, [message]);
		assert.isTrue(actual, [message]);  // actual true
		assert.isFalse(actual, [message]); // actual false
		assert.isNull(actual, [message]);
		assert.isNotNull(actual, [message]);
		assert.isUndefined(actual, [message]);
		assert.isDefined(actual, [message]);
		assert.isFunction(actual, [message]);
		assert.isNotFunction(actual, [message]);
		assert.isObject(actual, [message]);
		assert.isNotObject(actual, [message]);
		assert.isArray(actual, [message]);
		assert.isNotArray(actual, [message]);
		assert.isString(actual, [message]);
		assert.isNotString(actual, [message]);
		assert.isNumber(actual, [message]);
		assert.isNotNumber(actual, [message]);
		assert.isBoolean(actual, [message]);
		assert.isNotBoolean(actual, [message]);
	Plugin Utilities
		 http://chaijs.com/guide/helpers
		TODO type(object)

	BDD Style
	Chains allowed for expect and should
		.to .be .been .is .that .and .has .have .with .at .of .same
		.not .deep
	Ends allowed for expect and should
		.ok .true .false .null .undefined .exist .empty
		.arguments // is a function arguments object
		.a/an(type)
		.equal(value)
		.eql(value) // deep equal
		.closeTo(value, delta)
		// TODO closeToPercent(value, percent, delta)
		.above(value)
		.below(value)
		.least(value) // also chain with .length.of.at.least()
		.most(value)
		.within(min, max)  // also chain with length.within()
		.include/contain(value)
		.include/contain.keys(key1, [key2], ...)
		.instanceof(constructor)
		.property(name, [value])
		.ownProperty(name)
		.deep.property(name, [value]) // supports dot.notation[idx]
		.length(value) // string or array
		.match(regex)
		.string(substr) // .to.have.string(...)
		.have.keys(key1, [key2], ...)
		.contain.keys(key1, [key2], ...)
		.members(set) // .include.members() .have.members() .deep.include.members()
		.throw(constructor)
		.throw(constructor).and.not.throw(/error message/)
TODO		.respondTo(method) // object/class has method (or prototype chain)
TODO		.itself.to.respondTo(method) // has static method (not through prototype chain)
		.satisfy(fn) // function evaluate true when passed the object under test

	Test expectations: (node and browsers)
		expect(actual, [message]).to.be.a(type);
		expect(actual, [message]).to.equal(expected);
		expect(actual, [message]).to.have.length(length);
		expect(actual, [message]).to.have.property(property).with.length(length);

	Test should: (node and non IE browsers)
		should.exist(actual);
		should.not.exist(actual); // to handle null/undefined
		should.equal(expected);
		should.not.equal(expected);
		should.throw/Throw([constructor/string/regexp], [string/regexp]);
		should.not.throw/Throw([constructor/string/regexp], [string/regexp]);
		actual.should.be.a(type);
		actual.should.be.an(type);
		actual.should.equal(expected);
		actual.should.not.equal(expected);
		actual.should.have.length(length);
		actual.should.have.property(property).with.length(length);
*/
