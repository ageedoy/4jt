var assert = require("assert");
var chai = require("chai");

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Hello', function() {
  describe('substring', function () {
    it('check for substrings and arrays', function () {
	var assert = chai.assert;
	var foo ="bar";
	var tea = {'flavors':["choco","vanilla","strawberry"]};
	assert.typeOf(foo, 'string');
	assert.equal(foo, 'bar');
	assert.lengthOf(foo, 3)
	assert.property(tea, 'flavors');
	assert.lengthOf(tea.flavors, 3);
		});
	});
});