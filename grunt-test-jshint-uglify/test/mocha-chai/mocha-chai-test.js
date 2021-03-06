/*jshint node: true, indent: 4, smarttabs: true,
	maxstatements: 50, maxlen: 128 */
/*global
	TestMe,
	afterEach, beforeEach, describe, it, xdescribe, xit
*/
/**
	@file test/mocha-chai/XXX-test.js
	@author Brent S.A. Cowgill
	@requires XXX
	@requires mocha
	@requires chai

	@description
	Test plan for {@link module:XXX} module (chai)

	@see {@link http://chaijs.com/api/ Chai API Documentation}
	@see {@link http://visionmedia.github.io/mocha/ Mocha Documentation}
*/

/*
	======== A Handy Little Mocha/Chai Test Reference ========
	http://chaijs.com/guide/styles/
	http://chaijs.com/api/bdd/
	http://visionmedia.github.io/mocha/

	Test suites (mocha):
		describe(suite, [fn]);  // omitting function marks it as a pending suite/spec
		it(tests, [fn]);
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

(function (global) {
	'use strict';

	var chai = global.chai || require('chai'),
		assert = chai.assert,
		expect = chai.expect,
		should = chai.should(), // note function call here
		XXX = {
			do: function (s) { return s.toUpperCase(); },
			die: function(s) { throw(new Error(s)); }
		},//require('../lib/XXX'),
		MUSTDO = function () { it('MUSTDO test something'); };

	chai.config.includeStack = true;   // turn on stack trace on assertion failure
	chai.config.showDiff = false;      // turn off reporter diff display
	chai.config.truncateThreshold = 0; // disable truncating actual/expected values

	// If a memory leak happens, show a stack trace for the leaker
	Object.defineProperty(global, 'name_of_leaking_property', {
		set : function() {
			throw new Error('MEMORY LEAK DETECTED');
		}
	});

	describe('jshint', function() {
		// it('should fail', function () { expect(expect).to.be.a('failure'); });
		it('expect to be happy', function () { expect(expect).to.be.a('function'); });
		it('should be happy', function () { should.exist(should); });
		it('must do something useful', function () { expect(MUSTDO).to.be.a('function'); });
	});

	beforeEach(function() {
		// setup code before every test
	});

	describe('#XXX', function () {

		describe('.method()', function() {
			it('.should do something useful', function() {
				XXX.do('something useful').should.equal('SOMETHING USEFUL');
			});
			it('assert.throws an error', function() {
				assert.throws(function () { XXX.die('horribly and slow'); });
			});
			it('assert.throws an error matching regex', function() {
				assert.throws(
					function () { XXX.die('horribly and slow'); },
					/slow/);
			});
			it('should.throw an error matching regex', function() {
				should.Throw(
					function () { XXX.die('horribly and slow'); },
					/slow/);
			});
			it('expect.to.match found within an array', function() {
				expect(
					['string in array', 'does it match?'],
					'does .match() look in array elements?').to.match(/match/);
			});

			it('no callback is a pending test.');
			it.skip('SKIPPED TEST does something useful', function() {
				XXX.do('with data').should.equal('something useful');
			});
			xit('ALTERNATIVE SKIPPED TEST does something useful', function() {
				XXX.do('with data').should.equal('something useful');
			});
		});

		describe.skip('SKIPPED SUITE .method()', function() {
			it('does something useful', function() {
				XXX.do('with data').should.equal('something useful');
			});
		});

		describe('IMPLEMENT THIS suite', MUSTDO);
		xdescribe('Can also suppress a test suite or spec with xdescribe / xit', MUSTDO);
	});

	// describe() a test suite
	describe('Chai core matchers - to compare with Jasmine sample tests', function() {
		beforeEach(function() {
			// set up before each spec
			this.oTest = new TestMe();
		});
		afterEach(function() {
			// tear down after each spec
		});

		// it() is a single spec of what program should do
		it('checks expect(name(Billy Bob)).to.be.equal(BILLY BOB)', function() {
			var expected = 'BILLY BOB',
				result = this.oTest.name('Billy Bob');
			// expect() is a matcher
			expect(result).to.be.equal(expected);
		});

		it('checks expect(name(Billy Bob)).not.to.be.equal(BILLY BOB FAIL)', function() {
			var shouldnotbe = 'BILLY BOB FAIL',
				result = this.oTest.name('Billy Bob');
			expect(result).not.to.be.equal(shouldnotbe);
		});

		it('checks expect(deep()).to.be.equal() object equivalence', function() {
			var expected = { 'name': 'JO DOE', 'mode': 'success', 'age': 32 },
				result = this.oTest.deep();
			expect(result).to.be.deep.equal(expected);
		});
		it('checks expect(deep()).not.to.be.equal() object non-equivalence', function() {
			var shouldnotbe = { 'name': 'JO DOE FAIL', 'mode': 'failure', 'age': 32 },
				result = this.oTest.deep();
			expect(result).not.to.be.deep.equal(shouldnotbe);
		});

		it('checks expect(me()).to.equal() the exact same object', function() {
			var expected = this.oTest,
				result = this.oTest.me();
			expect(result).to.equal(expected);
		});

		it('checks should.exist(result) to check defined/undefined', function() {
			var result = this.oTest.defined();
			should.exist(result);
		});
		it('checks should.not.exist(undef())', function() {
			var result = this.oTest.undef();
			should.not.exist(result);
		});

		/*jshint -W030 */ // Expected an assignment or function call and instead saw an expression.
		it('checks expect(nul()).to.be.null', function() {
			var result = this.oTest.nul();
			expect(result).to.be.null;
		});
		it('checks expect(notnul()).not.to.be.null', function() {
			var result = this.oTest.notnul();
			expect(result).not.to.be.null;
		});

		it('checks expect(defined()).to.be.ok - truthy', function() {
			var result = this.oTest.defined();
			expect(result).to.be.ok;
		});

		it('checks expect(undef()).to.not.be.ok - falsy', function() {
			var result = this.oTest.undef();
			expect(result).to.be.not.ok;
		});
		/*jshint +W030 */ // Expected an assignment or function call and instead saw an expression.

		it('checks expect(something(Billy Bob)).to.match(/BOB/)', function() {
			var expected = /BOB/,
				result = this.oTest.something('Billy Bob');
			expect(result).to.match(expected);
		});

		it('checks expect(name(Billy Bob)).to.match(/BOB$/)', function() {
			var expected = /BOB$/,
				result = this.oTest.name('Billy Bob');
			expect(result).to.match(expected);
		});
		it('checks expect(name(Billy Bob)).to.match(RegExp(BOB$))', function() {
			var expected = new RegExp('BOB$'),
				result = this.oTest.name('Billy Bob');
			expect(result).to.match(expected);
		});

		it('checks expect(name(Billy Bob)).not.to.match(/BOB FAIL$/)', function() {
			var shouldnotbe = /BOB FAIL$/,
				result = this.oTest.name('Billy Bob');
			expect(result).not.to.match(shouldnotbe);
		});
		it('checks expect(name(Billy Bob)).not.to.match(RegExp(BOB FAIL$))', function() {
			var shouldnotbe = new RegExp('BOB FAIL$'),
				result = this.oTest.name('Billy Bob');
			expect(result).not.to.match(shouldnotbe);
		});

		it('checks expect(real()).to.be.below(0.4)', function() {
			var expected = 0.4,
				result = this.oTest.real('result');
			expect(result).to.be.below(expected);
		});
		it('checks expect(real()).not.to.be.below(0.2)', function() {
			var shouldntbe = 0.2,
				result = this.oTest.real('resultnotless');
			expect(result).not.to.be.below(shouldntbe);
		});

		it('checks expect(real()).to.be.above(0.2)', function() {
			var expected = 0.2,
				result = this.oTest.real('resultmore');
			expect(result).to.be.above(expected);
		});
		it('checks expect(real()).not.to.be.above(0.4)', function() {
			var expected = 0.4,
				result = this.oTest.real('resultnotmore');
			expect(result).not.to.be.above(expected);
		});

		it('checks should.Throw(function () {throws()}) some message', function() {
			var self = this,
				result = function () {
					self.oTest.error('result');
				};
			should.Throw(result);
		});
		it('checks should.Throw(function () {throws()}) a message', function() {
			var self = this,
				expected = 'error message',
				result = function () {
					self.oTest.error('resultmsg');
				};
			should.Throw(result, expected);
		});
		it('checks should.Throw(function () {throws()}) a custom error message', function() {
			var self = this,
				expected = new self.oTest.CustomError('custom error message type'),
				result = function () {
					self.oTest.error('resultcustom',
						new self.oTest.CustomError('custom error message type'));
				};
			should.Throw(result, expected);
		});
		it('checks should.Throw(function () {throws()}) '
			+ 'regex match thrown custom error message', function() {
			var self = this,
				expected = new RegExp('custom error'),
				result = function () {
					self.oTest.error('resultcustomregex',
						new self.oTest.CustomError('custom error message type'));
				};
			should.Throw(result, expected);
		});
		// Will always fail
		it.skip('to.be.equal() real number test', function() {
			var expected = 0.3,
				result = this.oTest.real();
			expect(result).to.be.equal(expected);
		});
		it('to.be.closeTo() real number test', function() {
			var epsilon = 1e-16,
				expected = 0.3,
				result = this.oTest.real('result');
			expect(result).to.be.closeTo(expected, epsilon);
		});

	});

	describe('TODO Spying on methods', MUSTDO);
	describe('TODO Skip/only dark scheme', MUSTDO);
})(this);

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
