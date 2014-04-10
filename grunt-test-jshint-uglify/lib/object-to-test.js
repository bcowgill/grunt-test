/*jshint indent: 4, maxstatements: 40 */
/*exported TestMe */
// lib/object-to-test.js

var TestMe = function () {
	'use strict';

	var FAIL = false ? {
		mode: 'failure',
		string: ' FAIL',
		number: '',
		real: 0.3
	} : {
		mode: 'success',
		string: '',
		number: 0,
		real: 0
	};

	this.mode = function () {
		return FAIL.mode;
	};

	this.name = function (string) {
		return string.toUpperCase() + FAIL.string;
	};

	this.number = function () {
		return 42 + FAIL.number;
	};

	this.real = function (resultExpect) {
		if (FAIL.mode === 'failure' && resultExpect === 'resultnot') {
			return 0.3;
		}
		return 0.1 + 0.2 + FAIL.real;
	};

	this.deep = function () {
		return {
			mode: FAIL.mode,
			name: this.name('jo doe'),
			age: 32
		};
	};

	// constructor for testing objects own properties
	this.Prop = function (resultExpect, x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		if (FAIL.mode === 'failure' && resultExpect === 'result') {
			this.x = y;
		}
		if (FAIL.mode === 'failure' && resultExpect === '!result') {
			this.x = parseInt(x);
			this.y = y.toString();
		}
		return this;
	};
	this.Prop.prototype.doA = function () {};
	this.Prop.prototype.doB = function () {};
	this.Prop.prototype.bar = 'prototype';

	this.CustomError = function ( message ) {
		this.message = message;
		return this;
	};
	this.CustomError.prototype.toString = function() {
		return this.message;
	};
	this.CustomError.prototype.typeName = 'CustomError';

	this.error = function (resultExpect, custom) {
		/*jshint maxcomplexity: 8 */
		if (FAIL.mode === 'failure') {
			if (resultExpect === 'result') {
				return 'did not throw error, returned a value';
			}
			if (resultExpect === 'resultmsg') {
				throw 'wrong error message';
			}
			if (resultExpect === 'resultcustom') {
				throw 'not custom error message';
			}
			if (resultExpect === 'resultcustomregex') {
				throw new this.CustomError('custom regex error message');
			}
		}
		throw custom || 'error message';
	};
	return this;
};