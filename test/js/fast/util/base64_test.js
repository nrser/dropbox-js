// Generated by CoffeeScript 1.9.1
(function() {
  describe('Dropbox.Util.atob', function() {
    it('decodes an ASCII string', function() {
      return expect(Dropbox.Util.atob('YTFiMmMz')).to.equal('a1b2c3');
    });
    return it('decodes a non-ASCII character', function() {
      return expect(Dropbox.Util.atob('/A==')).to.equal(String.fromCharCode(252));
    });
  });

  describe('Dropbox.Util.btoa', function() {
    it('encodes an ASCII string', function() {
      return expect(Dropbox.Util.btoa('a1b2c3')).to.equal('YTFiMmMz');
    });
    return it('encodes a non-ASCII character', function() {
      return expect(Dropbox.Util.btoa(String.fromCharCode(252))).to.equal('/A==');
    });
  });

}).call(this);
