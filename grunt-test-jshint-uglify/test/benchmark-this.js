/*jshint indent: 2 */
// test/benchmark-this.js
/*global console, Benchmark */
// Sample benchmarking tests http://benchmarkjs.com/
(function () {
  'use strict';

  if ('object' === typeof navigator)
  {
    console.log(navigator.vendor, navigator.vendorSub);
    console.log(navigator.platform, navigator.language);
    console.log(navigator.product, navigator.productSub);
    console.log(navigator.appName, navigator.appCodeName, navigator.appVersion);
    console.log(navigator.userAgent, navigator);
  }
  if ('object' === typeof process)
  {
    console.log(process.platform, process.arch);
    console.log(process.execPath, process.version);
    console.dir(process.versions);
  }

/*jshint -W027 */ // : Unreachable 'suite' after 'return'.
  var suite = new Benchmark.Suite();
  console.log('Benchmark different ways to locate [o] in a string');
//  return void 0;

  // add tests
  suite.add('RegExp#test', function() {
    return (/o/).test('Hello World!');
  })
  .add('String#indexOf', function() {
    return 'Hello World!'.indexOf('o') > -1;
  })
  .add('String#match', function() {
    return !!'Hello World!'.match(/o/);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  // run async
  .run({ 'async': true });

})();
