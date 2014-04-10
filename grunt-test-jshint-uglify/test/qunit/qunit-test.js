/*jshint indent: 4, maxstatements: 50 */
// test/qunit/quint-test.js
/*global TestMe, QUnit, test, deepEqual, expect, equal, notDeepEqual,
	notEqual, notPropEqual, notStrictEqual, ok, propEqual, strictEqual, throws */

(function () {
	'use strict';

	// TODO pull this out into an npm module qunit-assert-match-regex
	// Custom assertion handlers for regular expression matching
	/**
	 * Checks that the first argument matches the regular expression second argument.
	 *
	 * @example assert.matches("line 34: error", '^line \d+: error$');
	 * @example assert.matches("line 34: error", /^line \d+: error$/);
	 *
	 * @param String result
	 * @param RegExp regex (converted to RegExp if a string passed in)
	 * @param String message (optional)
	 */
	QUnit.assert.matches = function( result, regex, message ) {
		if ('string' === typeof regex) {
			regex = new RegExp(regex);
		}
		var match = regex.test(result);
		QUnit.push(match, result, regex,
			message || (result + ' should match RegExp ' + regex));
	};
	/**
	 * Checks that the first argument does not match the regular expression second argument.
	 *
	 * @example assert.notMatches("line 34: error", '^line \d+: error$');
	 * @example assert.notMatches("line 34: error", /^line \d+: error$/);
	 *
	 * @param String result
	 * @param RegExp notRegex (converted to RegExp if a string passed in)
	 * @param String message (optional)
	 */
	QUnit.assert.notMatches = function( result, notRegex, message ) {
		if ('string' === typeof notRegex) {
			notRegex = new RegExp(notRegex);
		}
		var match = notRegex.test(result);
		QUnit.push(!match, result, 'not ' + notRegex,
			message || (result + ' should not match RegExp' + notRegex));
	};

	QUnit.module('QUnit core assert tests', {
		setup: function() {
			this.oTest = new TestMe();
			this.extraTests = 2;
			ok(true, 'setup tests: one extra assert per test');
		},
		teardown: function() {
			ok(true, 'teardown tests: and one extra assert after each test');
		}
	});
	test('deepEqual() test', function()
	{
		expect(1 + this.extraTests);
		var expected = { 'name': 'JO DOE', 'mode': 'success', 'age': 32 },
		    result = this.oTest.deep();
		deepEqual(result, expected, 'deep() should be ' + JSON.stringify(expected));
	});
	test('notDeepEqual() test', function()
	{
		expect(1 + this.extraTests);
		var shouldnotbe = { 'name': 'JO DOE FAIL', 'mode': 'failure', 'age': 32 },
		    result = this.oTest.deep();
		notDeepEqual(result, shouldnotbe, 'deep() should not be ' + JSON.stringify(shouldnotbe));
	});

	test('equal() test', function()
	{
		expect(1 + this.extraTests);
		var expected = 'BILLY BOB',
		    result = this.oTest.name('Billy Bob');
		equal(result, expected, 'name(Billy Bob) should be ' + expected);
	});
	test('notEqual() test', function()
	{
		expect(1 + this.extraTests);
		var shouldnotbe = 'BILLY BOB FAIL',
		    result = this.oTest.name('Billy Bob');
		notEqual(result, shouldnotbe, 'name(Billy Bob) should not be ' + shouldnotbe);
	});

	test('strictEqual() test', function()
	{
		expect(1 + this.extraTests);
		var expected = 42,
		    result = this.oTest.number();
		strictEqual(result, expected, 'number() should strictly be (number) ' + expected);
	});
	test('notStrictEqual() test', function()
	{
		expect(1 + this.extraTests);
		var shouldnotbe = '42',
		    result = this.oTest.number();
		notStrictEqual(result, shouldnotbe,
		    'number() should not strictly be (string) ' + shouldnotbe);
	});

	test('propEqual() test', function()
	{
		expect(1 + this.extraTests);
		var expected = { 'x': 1, 'y': '2', 'z': [] },
		    result = new this.oTest.Prop( 'result', 1, '2', [] );
		propEqual(result, expected, 'Prop ' + JSON.stringify(result) +
		    ' properties should be ' + JSON.stringify(expected));
	});

	test('notPropEqual() test', function()
	{
		expect(1 + this.extraTests);
		var shouldnotbe = new this.oTest.Prop( 'expected', 1, '2', [] ),
		    result = new this.oTest.Prop( '!result', '1', 2, [] );
		notPropEqual(result, shouldnotbe, 'Prop ' + JSON.stringify(result) +
		    ' should not be ' + JSON.stringify(shouldnotbe));
	});

	test('throws() something test', function()
	{
		expect(1 + this.extraTests);
		var self = this,
			result = function () {
				self.oTest.error('result');
			};
		throws(result, 'error() should throw some message');
	});
	test('throws a message test', function()
	{
		expect(1 + this.extraTests);
		var self = this, expected = 'error message',
			result = function () {
				self.oTest.error('resultmsg');
			};
		throws(result, expected, 'error() should throw "' + expected + '"');
	});
	test('throws a custom error message test', function()
	{
		expect(1 + this.extraTests);
		var self = this,
			expected = this.oTest.CustomError,
			result = function () {
				self.oTest.error('resultcustom',
					new self.oTest.CustomError('custom error message type'));
			};
		throws(result, expected, 'error() should throw custom "' +
			expected.prototype.typeName + '"');
	});
	test('regex match thrown custom error message test', function()
	{
		expect(1 + this.extraTests);
		var self = this,
			expected = new RegExp('custom error'),
			result = function () {
				self.oTest.error('resultcustomregex',
					new self.oTest.CustomError('custom error message type'));
			};

		throws(result, expected, 'error() thrown should match ' +
			expected);
	});

	// TODO pull this out into an npm module qunit-assert-match-regex
	QUnit.module('Custom assert for regexes test suite', {
		setup: function() {
			this.oTest = new TestMe();
			this.extraTests = 0;
		},
		teardown: function() {
		}
	});

	test('assert.matches/notMatches tests', function(assert)
	{
		expect(4 + this.extraTests);
		assert.matches('line 34: error', '^line \\d+: error$');
		assert.matches('line 34: error', /^line \d+: error$/);
		assert.notMatches('line AB: error', '^line \\d+: error$');
		assert.notMatches('line AB: error', /^line \d+: error$/);
	});

	QUnit.module('Custom assert for regex', {
		setup: function() {
			this.oTest = new TestMe();
			this.extraTests = 0;
		},
		teardown: function() {
		}
	});
	test('assert.matches string test', function(assert)
	{
		expect(2 + this.extraTests);
		var expected = 'BOB$',
		    result = this.oTest.name('Billy Bob');
		assert.matches(result, expected, 'name(Billy Bob) should match ' + expected);
		// omit message see what it says on failure
		assert.matches(result, expected);
	});
	test('assert.matches regex test', function(assert)
	{
		expect(2 + this.extraTests);
		var expected = new RegExp('BOB$'),
		    result = this.oTest.name('Billy Bob');
		assert.matches(result, expected, 'name(Billy Bob) should match ' + expected);
		// omit message see what it says on failure
		assert.matches(result, expected);
	});

	test('assert.notMatches string test', function(assert)
	{
		expect(2 + this.extraTests);
		var shouldnotbe = 'BOB FAIL$',
		    result = this.oTest.name('Billy Bob');
		assert.notMatches(result, shouldnotbe, 'name(Billy Bob) should not match ' + shouldnotbe);
		// omit message see what it says on failure
		assert.notMatches(result, shouldnotbe);
	});
	test('assert.notMatches regex test', function(assert)
	{
		expect(2 + this.extraTests);
		var shouldnotbe = new RegExp('BOB FAIL$'),
		    result = this.oTest.name('Billy Bob');
		assert.notMatches(result, shouldnotbe, 'name(Billy Bob) should not match ' + shouldnotbe);
		// omit message see what it says on failure
		assert.notMatches(result, shouldnotbe);
	});

/* Will always fail
	test('QUnit deepEqual() real number test', function()
	{
		expect(1 + this.extraTests);
		var expected = 0.3,
		    result = this.oTest.real();
		deepEqual(result, expected, 'real() should be ' + expected);
	});
*/
	QUnit.module('qunit-assert-close module for real numbers', {
		setup: function() {
			this.oTest = new TestMe();
			this.extraTests = 0;
		},
		teardown: function() {
		}
	});

	test('assert.close() real number test', function(assert)
	{
		expect(2 + this.extraTests);
		var epsilon = 1e-16,
		    expected = 0.3,
		    result = this.oTest.real('result');
		assert.close(result, expected, epsilon,
			'real() should be close[' + epsilon + '] to ' + expected);
		// omit message because it explains well enough on failure
		assert.close(result, expected, epsilon);
	});
	test('assert.notClose() real number test', function(assert)
	{
		expect(2 + this.extraTests);
		var epsilon = 1e-18,
		    expected = 0.3,
		    result = this.oTest.real('resultnot');
		assert.notClose(result, expected, epsilon,
			'real() should not be close[' + epsilon + '] to ' + expected);
		// omit message because it explains well enough on failure
		assert.notClose(result, expected, epsilon);
	});
	test('assert.close.percent() real number test', function(assert)
	{
		expect(2 + this.extraTests);
		var percent = 1e-13,
		    expected = 0.3,
		    result = this.oTest.real('result');
		assert.close.percent(result, expected, percent,
			'real() should be close[' + percent + '%] to ' + expected);
		// omit message because it explains well enough on failure
		assert.close.percent(result, expected, percent);
	});
	test('assert.notClose.percent() real number test', function(assert)
	{
		expect(2 + this.extraTests);
		var percent = 1e-15,
		    expected = 0.3,
		    result = this.oTest.real('resultnot');
		assert.notClose.percent(result, expected, percent,
			'real() should not be close[' + percent + '%] to ' + expected);
		// omit message because it explains well enough on failure
		assert.notClose.percent(result, expected, percent);
	});
})();
