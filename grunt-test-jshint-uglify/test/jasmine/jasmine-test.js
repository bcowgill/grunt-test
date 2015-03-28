/**
	Test plan for XXX module (jasmine)

	Jasmine test runs in browser:
	http://localhost:9999/test/jasmine/jasmine-test.html

	@file
	@author Brent S.A. Cowgill
	@requires XXX
	@requires jasmine

	@see {@link http://jasmine.github.io/2.0/introduction.html Jasmine API Documentation}

*/
/*jshint browser: true, indent: 4, smarttabs: true, maxstatements: 50 */
/*global TestMe, afterEach, describe, beforeEach, expect, it, xdescribe, xit */

/*
	======== A Handy Little Jasmine Test Reference ========
	http://jasmine.github.io/2.0/introduction.html

	Test suites/specs (jasmine):
		describe(suite, [fn]);  // omitting function marks it as a pending suite/spec
		it(spec, [fn]);
		xdescribe/xit(suite, fn); // test marked pending and skips execution
		pending(); // call anywhere in a test to mark it pending
		beforeEach(fn);
		afterEach(fn);

	Test expectation matchers:
		expect(actual).toBe(expected);  // ===
		expect(actual).not.toBe(expected);
		expect(actual).toEqual(expected);
		expect(actual).toMatch(regex);  // TODO does it work on arrays?
		expect(actual).toBeDefined();
		expect(actual).toBeUndefined();
		expect(actual).toBeNull();
		TODO finish documenting this
*/

(function () {
	'use strict';

	// describe() a test suite
	describe('Jasmine core matchers', function() {
		beforeEach(function() {
			// set up before each spec
			this.oTest = new TestMe();
		});
		afterEach(function() {
			// tear down after each spec
		});

		// it() is a single spec of what program should do
		it('checks expect(name(Billy Bob)).toEqual(BILLY BOB)', function() {
			var expected = 'BILLY BOB',
			    result = this.oTest.name('Billy Bob');
			// expect() is a matcher
			expect(result).toEqual(expected);
		});

		it('checks expect(name(Billy Bob)).not.toEqual(BILLY BOB FAIL)', function() {
			var shouldnotbe = 'BILLY BOB FAIL',
			    result = this.oTest.name('Billy Bob');
			expect(result).not.toEqual(shouldnotbe);
		});

		it('checks expect(deep()).toEqual() object equivalence', function() {
			var expected = { 'name': 'JO DOE', 'mode': 'success', 'age': 32 },
			    result = this.oTest.deep();
			expect(result).toEqual(expected);
		});
		it('checks expect(deep()).not.toEqual() object non-equivalence', function() {
			var shouldnotbe = { 'name': 'JO DOE FAIL', 'mode': 'failure', 'age': 32 },
			    result = this.oTest.deep();
			expect(result).not.toEqual(shouldnotbe);
		});

		it('checks expect(me()).toBe() the exact same object', function() {
			var expected = this.oTest,
			    result = this.oTest.me();
			expect(result).toBe(expected);
		});

		it('checks expect(defined()).toBeDefined()', function() {
			var result = this.oTest.defined();
			expect(result).toBeDefined();
		});
		it('checks expect(undef()).toBeUndefined()', function() {
			var result = this.oTest.undef();
			expect(result).toBeUndefined();
		});

		it('checks expect(nul()).toBeNull()', function() {
			var result = this.oTest.nul();
			expect(result).toBeNull();
		});
		it('checks expect(notnul()).not.toBeNull()', function() {
			var result = this.oTest.notnul();
			expect(result).not.toBeNull();
		});

		it('checks expect(defined()).toBeTruthy()', function() {
			var result = this.oTest.defined();
			expect(result).toBeTruthy();
		});

		it('checks expect(undef()).toBeFalsy()', function() {
			var result = this.oTest.undef();
			expect(result).toBeFalsy();
		});

		it('checks expect(something(Billy Bob)).toContain(BOB)', function() {
			var expected = 'BOB',
			    result = this.oTest.something('Billy Bob');
			expect(result).toContain(expected);
		});

		it('checks expect(name(Billy Bob)).toMatch(BOB$)', function() {
			var expected = 'BOB$',
			    result = this.oTest.name('Billy Bob');
			expect(result).toMatch(expected);
		});
		it('checks expect(name(Billy Bob)).toMatch(RegExp(BOB$))', function() {
			var expected = new RegExp('BOB$'),
			    result = this.oTest.name('Billy Bob');
			expect(result).toMatch(expected);
		});

		it('checks expect(name(Billy Bob)).not.toMatch(BOB FAIL$)', function() {
			var shouldnotbe = 'BOB FAIL$',
			    result = this.oTest.name('Billy Bob');
			expect(result).not.toMatch(shouldnotbe);
		});
		it('checks expect(name(Billy Bob)).not.toMatch(RegExp(BOB FAIL$))', function() {
			var shouldnotbe = new RegExp('BOB FAIL$'),
			    result = this.oTest.name('Billy Bob');
			expect(result).not.toMatch(shouldnotbe);
		});

		it('checks expect(real()).toBeLessThan(0.4)', function() {
			var expected = 0.4,
			    result = this.oTest.real('result');
			expect(result).toBeLessThan(expected);
		});
		it('checks expect(real()).not.toBeLessThan(0.2)', function() {
			var shouldntbe = 0.2,
			    result = this.oTest.real('resultnotless');
			expect(result).not.toBeLessThan(shouldntbe);
		});

		it('checks expect(real()).toBeGreaterThan(0.2)', function() {
			var expected = 0.2,
			    result = this.oTest.real('resultmore');
			expect(result).toBeGreaterThan(expected);
		});
		it('checks expect(real()).not.toBeGreaterThan(0.4)', function() {
			var expected = 0.4,
			    result = this.oTest.real('resultnotmore');
			expect(result).not.toBeGreaterThan(expected);
		});

		it('checks expect(throws()).toThrow() some message', function() {
			var self = this,
				result = function () {
					self.oTest.error('result');
				};
			expect(result).toThrow();
		});
		it('checks expect(throws()).toThrow() a message', function() {
			var self = this,
				expected = 'error message',
				result = function () {
					self.oTest.error('resultmsg');
				};
			expect(result).toThrow(expected);
		});
		it('checks expect(throws()).toThrow() a custom error message', function() {
			var self = this,
				expected = new self.oTest.CustomError('custom error message type'),
				result = function () {
					self.oTest.error('resultcustom',
						new self.oTest.CustomError('custom error message type'));
				};
			expect(result).toThrow(expected);
		});
/*
	TODO Fails, cannot regex a thrown error this way
		it('checks expect(throws()).toThrow() regex match thrown custom error message', function() {
			var self = this,
				expected = new RegExp('custom error'),
				result = function () {
					self.oTest.error('resultcustomregex',
						new self.oTest.CustomError('custom error message type'));
				};
			expect(result).toThrow(expected);
		});
*/
	});

	describe('TODO Custom assert for closeness test suite', function() {
		beforeEach(function() {
			// set up before each spec
			this.oTest = new TestMe();
			this.addMatchers({
				toBeClose: function() {
					return {
						compare: function(actual, expected, epsilon) {
							var result = {
								pass: Math.abs(actual - expected) < epsilon
							};
							if (result.pass) {
								result.message = actual + ' is within ' +
								    epsilon + ' of ' + expected;
							} else {
								result.message = actual + ' is not within ' +
								    epsilon + ' of ' + expected;
							}
							return result;
						}
					};
				}
			});

		});
		afterEach(function() {
			// tear down after each spec
		});

		it('A pending spec has no function');

		// Will always fail
		xit('Jasmine toEqual() real number test', function() {
			var expected = 0.3,
				result = this.oTest.real();
			expect(result).toEqual(expected);
		});

		xit('toBeClose() real number test', function() {
			var epsilon = 1e-16,
			    expected = 0.3,
			    result = this.oTest.real('result');
			expect(result).toBeClose(expected, epsilon);
		});
	});

	describe('TODO Spying on methods', function() {
	});

	describe('TODO Skip/only dark scheme', function() {
	});

	xdescribe('Suppress a test suite or spec with xdescribe / xit', function() {
	});

})();
