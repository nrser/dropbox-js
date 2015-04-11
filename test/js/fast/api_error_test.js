// Generated by CoffeeScript 1.9.1
(function() {
  describe('Dropbox.ApiError', function() {
    describe('.NETWORK_ERROR', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.NETWORK_ERROR;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('NETWORK_ERROR');
      });
      it('is between 0 and 99', function() {
        return expect(this.code).to.be.within(0, 99);
      });
      return it('is falsey', function() {
        return expect(this.code).to.not.be.ok;
      });
    });
    describe('.NO_CONTENT', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.NO_CONTENT;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('NO_CONTENT');
      });
      return it('is between 300 and 399', function() {
        return expect(this.code).to.be.within(300, 399);
      });
    });
    describe('.INVALID_PARAM', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.INVALID_PARAM;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('INVALID_PARAM');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than INVALID_TOKEN', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.INVALID_TOKEN);
      });
    });
    describe('.INVALID_TOKEN', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.INVALID_TOKEN;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('INVALID_TOKEN');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than OAUTH_ERROR', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.OAUTH_ERROR);
      });
    });
    describe('.OAUTH_ERROR', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.OAUTH_ERROR;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('OAUTH_ERROR');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than NOT_FOUND', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.NOT_FOUND);
      });
    });
    describe('.NOT_FOUND', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.NOT_FOUND;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('NOT_FOUND');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than INVALID_METHOD', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.INVALID_METHOD);
      });
    });
    describe('.INVALID_METHOD', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.INVALID_METHOD;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('INVALID_METHOD');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than NOT_ACCEPTABLE', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.NOT_ACCEPTABLE);
      });
    });
    describe('.NOT_ACCEPTABLE', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.NOT_ACCEPTABLE;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('NOT_ACCEPTABLE');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than CONFLICT', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.CONFLICT);
      });
    });
    describe('.CONFLICT', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.CONFLICT;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('CONFLICT');
      });
      it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
      return it('is less than RATE_LIMITED', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.RATE_LIMITED);
      });
    });
    describe('.RATE_LIMITED', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.RATE_LIMITED;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('RATE_LIMITED');
      });
      return it('is between 400 and 499', function() {
        return expect(this.code).to.be.within(400, 499);
      });
    });
    describe('.SERVER_ERROR', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.SERVER_ERROR;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('SERVER_ERROR');
      });
      it('is between 500 and 599', function() {
        return expect(this.code).to.be.within(500, 599);
      });
      return it('is less than OVER_QUOTA', function() {
        return expect(this.code).to.be.below(Dropbox.ApiError.OVER_QUOTA);
      });
    });
    return describe('.OVER_QUOTA', function() {
      beforeEach(function() {
        return this.code = Dropbox.ApiError.OVER_QUOTA;
      });
      it('is defined', function() {
        return expect(Dropbox.ApiError).to.have.property('OVER_QUOTA');
      });
      return it('is between 500 and 599', function() {
        return expect(this.code).to.be.within(500, 599);
      });
    });
  });

}).call(this);
