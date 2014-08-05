/*jshint indent: 4, smarttabs: true, maxstatements: 40 */
/*exported TestMe */
/**
	@file lib/object-to-test.js
	@author Brent S.A. Cowgill
	@see {@link http://usejsdoc.org/index.html JSDoc Index}
	@see {@link TestMe}

	@description

	A file with a simple object to be tested
*/
/**
	@classdesc A simple object to be tested.
	@module TestMe
	@constructor
*/
var TestMe = function () {
	'use strict';

	/**
		Used to force tests to fail so you can see what that looks like.
		@constant
	*/
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

	/**
		answers with a self reference.
		@method me
		@memberof TestMe#
	*/
	this.me = function () {
		return FAIL.mode === 'failure' ? new TestMe() : this;
	};

	/**
		answers with the failure mode of the object.
		@method mode
		@memberof TestMe#
	*/
	this.mode = function () {
		return FAIL.mode;
	};

	/**
		answers with the string converted to upper case.
		@method name
		@memberof TestMe#
		@param {string} string to be converted to upper case.
		@return {string} the string converted to upper case.
	*/
	this.name = function (string) {
		return string.toUpperCase() + FAIL.string;
	};

	/**
		answers with upper cased string
		@method something
		@memberof TestMe#
		@param {string} string to be converted to upper case.
		@return {string} the string converted to upper case.
	*/
	this.something = function (string) {
		return FAIL.mode === 'failure' ? string : string.toUpperCase();
	};

	/**
		answers with a numerical value.
		@method number
		@memberof TestMe#
		@return {number} the numerical value.
	*/
	this.number = function () {
		return 42 + FAIL.number;
	};

	/**
		answers with a real number value.
		@method real
		@memberof TestMe#
		@param {string} resultExpect what type of test result is being performed.
		@return {number} the real number value.
	*/
	this.real = function (resultExpect) {
		if (FAIL.mode === 'failure' && resultExpect === 'resultnot') {
			return 0.3;
		}
		if (FAIL.mode === 'failure' && resultExpect === 'resultnotless') {
			return 0.1;
		}
		if (FAIL.mode === 'failure' && resultExpect === 'resultmore') {
			return 0.1;
		}
		return 0.1 + 0.2 + FAIL.real;
	};

	this.defined = function () {
		return FAIL.mode === 'failure' ? void 0 : 'defined';
	};
	this.undef = function () {
		return FAIL.mode === 'failure' ? 'defined' : void 0;
	};
	this.nul = function () {
		return FAIL.mode === 'failure' ? void 0 : null;
	};
	this.notnul = function () {
		return FAIL.mode === 'failure' ? null : void 0;
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
