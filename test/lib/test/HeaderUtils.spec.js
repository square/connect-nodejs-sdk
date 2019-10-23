const HeaderUtils = require('../../src/lib/HeaderUtils');
const {
  assert
} = require('../support/setup');

describe('HeaderUtils', function() {
  beforeEach(function() {
    this.headerObj = {
      "Foo-Header": "abcDEF",
      "bar-HEADER": "qwerty",
      "bazheader": "123456"
    }
  });

  afterEach(function(){
  });

  describe('caseInsensitiveGet', function() {
    it('Matches case-sensitively', function(done) {
      assert(
        HeaderUtils.caseInsensitiveGet(this.headerObj, "Foo-Header") === "abcDEF"
      );
      done();
    });
  });

  describe('caseInsensitiveGet', function() {
    it('Does not match wrong punctuation', function(done) {
      assert(
        HeaderUtils.caseInsensitiveGet(this.headerObj, "barHEADER") === undefined
      );
      done();
    });
  });

  describe('caseInsensitiveGet', function() {
    it('Matches case insensitively', function(done) {
      assert(
        HeaderUtils.caseInsensitiveGet(this.headerObj, "bAzHeAdEr") === "123456"
      );
      done();
    });
  });
});

