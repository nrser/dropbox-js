// Generated by CoffeeScript 1.9.1
(function() {
  describe('Dropbox.Util.EventSource', function() {
    beforeEach(function() {
      this.source = new Dropbox.Util.EventSource;
      this.cancelable = new Dropbox.Util.EventSource({
        cancelable: true
      });
      this.event1 = null;
      this.listener1 = (function(_this) {
        return function(event) {
          _this.event1 = event;
          return _this.listener1.returnValue;
        };
      })(this);
      this.listener1.returnValue = true;
      this.source.addListener(this.listener1);
      this.cancelable.addListener(this.listener1);
      this.event2 = null;
      this.listener2 = (function(_this) {
        return function(event) {
          _this.event2 = event;
          return _this.listener2.returnValue;
        };
      })(this);
      this.listener2.returnValue = false;
      this.source.addListener(this.listener2);
      this.cancelable.addListener(this.listener2);
      this.event3 = null;
      this.listener3 = (function(_this) {
        return function(event) {
          _this.event3 = event;
          return _this.listener3.returnValue;
        };
      })(this);
      return this.listener3.returnValue = true;
    });
    describe('#addListener', function() {
      it('adds a new listener', function() {
        this.source.addListener(this.listener3);
        return expect(this.source._listeners).to.deep.equal([this.listener1, this.listener2, this.listener3]);
      });
      it('does not add an existing listener', function() {
        this.source.addListener(this.listener2);
        return expect(this.source._listeners).to.deep.equal([this.listener1, this.listener2]);
      });
      it('is idempotent', function() {
        this.source.addListener(this.listener3);
        this.source.addListener(this.listener3);
        return expect(this.source._listeners).to.deep.equal([this.listener1, this.listener2, this.listener3]);
      });
      return it('refuses to add non-functions', function() {
        return expect((function(_this) {
          return function() {
            return _this.source.addListener(42);
          };
        })(this)).to["throw"](TypeError, /listener type/);
      });
    });
    describe('#removeListener', function() {
      it('does nothing for a non-existing listener', function() {
        this.source.removeListener(this.listener3);
        return expect(this.source._listeners).to.deep.equal([this.listener1, this.listener2]);
      });
      it('removes a listener at the end of the queue', function() {
        this.source.removeListener(this.listener2);
        return expect(this.source._listeners).to.deep.equal([this.listener1]);
      });
      it('removes a listener at the beginning of the queue', function() {
        this.source.removeListener(this.listener1);
        return expect(this.source._listeners).to.deep.equal([this.listener2]);
      });
      it('removes a listener at the middle of the queue', function() {
        this.source.addListener(this.listener3);
        this.source.removeListener(this.listener2);
        return expect(this.source._listeners).to.deep.equal([this.listener1, this.listener3]);
      });
      it('removes all the listeners', function() {
        this.source.removeListener(this.listener1);
        this.source.removeListener(this.listener2);
        return expect(this.source._listeners).to.deep.equal([]);
      });
      return describe('without ES5 Array#indexOf', function() {
        var assertArraysEqual;
        beforeEach(function() {
          return this.source._listeners.indexOf = null;
        });
        afterEach(function() {
          return delete this.source._listeners.indexOf;
        });
        assertArraysEqual = function(array1, array2) {
          var i, j, ref, results;
          expect(array1.length).to.equal(array2.length);
          results = [];
          for (i = j = 0, ref = array1.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            results.push(expect(array1[i]).to.equal(array2[i]));
          }
          return results;
        };
        it('does nothing for a non-existing listener', function() {
          this.source.removeListener(this.listener3);
          return assertArraysEqual(this.source._listeners, [this.listener1, this.listener2]);
        });
        it('removes a listener at the end of the queue', function() {
          this.source.removeListener(this.listener2);
          return assertArraysEqual(this.source._listeners, [this.listener1]);
        });
        it('removes a listener at the beginning of the queue', function() {
          this.source.removeListener(this.listener1);
          return assertArraysEqual(this.source._listeners, [this.listener2]);
        });
        it('removes a listener at the middle of the queue', function() {
          this.source.addListener(this.listener3);
          this.source.removeListener(this.listener2);
          return assertArraysEqual(this.source._listeners, [this.listener1, this.listener3]);
        });
        return it('removes all the listeners', function() {
          this.source.removeListener(this.listener1);
          this.source.removeListener(this.listener2);
          return assertArraysEqual(this.source._listeners, []);
        });
      });
    });
    return describe('#dispatch', function() {
      beforeEach(function() {
        return this.event = {
          answer: 42
        };
      });
      it('passes event to all listeners', function() {
        this.source.dispatch(this.event);
        expect(this.event1).to.equal(this.event);
        expect(this.event2).to.equal(this.event);
        return expect(this.event3).to.equal(null);
      });
      describe('on non-cancelable events', function() {
        beforeEach(function() {
          this.source.addListener(this.listener3);
          return this.returnValue = this.source.dispatch(this.event);
        });
        it('calls all the listeners', function() {
          expect(this.event1).to.equal(this.event);
          expect(this.event2).to.equal(this.event);
          return expect(this.event3).to.equal(this.event);
        });
        return it('ignores the listener return values', function() {
          return expect(this.returnValue).to.equal(true);
        });
      });
      return describe('on cancelable events', function() {
        beforeEach(function() {
          this.cancelable.addListener(this.listener3);
          return this.returnValue = this.cancelable.dispatch(this.event);
        });
        it('stops calling listeners after cancelation', function() {
          expect(this.event1).to.equal(this.event);
          expect(this.event2).to.equal(this.event);
          return expect(this.event3).to.equal(null);
        });
        it('reports cancelation', function() {
          return expect(this.returnValue).to.equal(false);
        });
        return it('calls all listeners if no cancelation occurs', function() {
          this.listener2.returnValue = true;
          this.returnValue = this.cancelable.dispatch(this.event);
          expect(this.returnValue).to.equal(true);
          return expect(this.event3).to.equal(this.event);
        });
      });
    });
  });

}).call(this);
