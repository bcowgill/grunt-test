/*
 * grunt-init-test-jq-plugin
 * https://github.com/brent.cowgill/grunt-init-test-jq-plugin
 *
 * Copyright (c) 2014 Brent S.A. Cowgill
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.grunt_init_test_jq_plugin = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.grunt_init_test_jq_plugin = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.grunt_init_test_jq_plugin.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.grunt_init_test_jq_plugin.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].grunt_init_test_jq_plugin = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
