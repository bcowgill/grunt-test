/**
	@file lib/jsdoc.js
	@author Brent S.A. Cowgill
	@version 0.0.0
	@license {@link http://unlicense.org The Unlicense}

	@description

	File to test jsdoc markup.

	@todo the next linkcode shows as monospace but not an active link
	@todo installation: {@linkcode npm install -g grunt # a code snippet}

	@todo the next linkplain shows as normal font but not an active link
	@todo installation: {@linkplain always a plain font link $escaped->{curlies}}

	@todo referring to a specific method or symbol you need a namespaced description
	static {@linkcode Person#say}
	instance {@link Person.say}
	inner {@link Person~say}
	module {@link module:foo/bar}
	external (built-in type) {@link external:String}

	@see Tutorial {@tutorial helpme}
	@see {@link Person}
	@see {@link MarkdownPlugin}
*/
/* jshint node: true */
/* global Person: true */

'use strict';

/**
	a Person object
	@constructor
*/
Person = function() {
	/**
		instance method to say something
		@instance
	*/
	this.say = function() {
		say();
		return 'I\'m an instance.';
	};

	/**
		inner method to say something
		@inner
	*/
	function say() {
		return 'I\'m inner.';
	}
};
/**
	static (prototype) method to say something
	@static
*/
Person.say = function() {
	return 'I\'m static.';
};

var p = new Person();
p.say();	  // I'm an instance.
Person.say(); // I'm static.
// there is no way to directly access the inner function from here

/*jshint -W101*/ // Line is too long.
/**
 * @constant MarkdownPlugin
 * @global
 * @default true
 * @description
 *	Markdown Plugin
 *	===============
 *	> *is* enabled
 *	> **if** the above is underlined.
 *	~~NOT~~ GitHub
 * Busted
 * ======
 * TODO this is not working how I expected it
 *	autolink url https://help.github.com/articles/github-flavored-markdown
 *	but your comments must use leading asterisks
 *	@see {@link https://help.github.com/articles/github-flavored-markdown GitHub Flavoured Markdown}
 *	@see {@link https://github.com/evilstreak/markdown-js Default Markdown Evilstreak}
 */
