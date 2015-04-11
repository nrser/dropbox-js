// Generated by CoffeeScript 1.9.1
(function() {
  var runTests;

  runTests = function() {
    var runner;
    runner = null;
    runner = mocha.run();
    return runner.on('end', function() {
      var failures, image, total;
      failures = this.failures || 0;
      total = this.total || 0;
      image = new Image();
      image.src = "/diediedie?failed=" + failures + "&total=" + total;
      return image.onload = function() {
        return null;
      };
    });
  };

  if (window.cordova) {
    document.addEventListener('deviceready', runTests);
  } else {
    window.addEventListener('load', runTests);
  }

}).call(this);
