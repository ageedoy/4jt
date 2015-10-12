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

describe('webdriver', function() {
	describe('example', function () {
		it('checks for a google search url', function () {
			var webdriver = require('selenium-webdriver'),
				By = require('selenium-webdriver').By,
				until = require('selenium-webdriver').until;

			var driver = new webdriver.Builder()
				.forBrowser('firefox')
				.build();

			driver.get('http://www.google.com/ncr');
			driver.findElement(By.name('q')).sendKeys('webdriver');
			driver.findElement(By.name('btnG')).click();
			driver.wait(until.titleIs('webdriver - Google Search'), 1000);
			var curUrl = driver.getCurrentUrl();
			assert.equal(curUrl,"https://www.google.com/?gws_rd=ssl#q=webdriver");
			driver.quit();
		});
	});
});