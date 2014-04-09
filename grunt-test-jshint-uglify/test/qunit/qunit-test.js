/*jshint indent: 4 */
// test/qunit/quint-test.js
/*global QUnit, test, expect, equal, name */

(function () {
	'use strict';

	QUnit.module('Basic Unit Test');
	test('Sample test', function()
	{
		expect(1);
		var expected = 'BILLY BOB',
		    result = name('Billy Bob');
		equal(result, expected, 'name(Billy Bob) should be ' + expected);
	});
})();
