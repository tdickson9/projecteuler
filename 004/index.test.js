
var euler = require('./index');

describe('euler', function () {

  it('returns the product of two numbers', function () {
    var expected = 30 
    expect(euler.multiply(5, 6)).toEqual(expected);
  });
  it('reverses an input', function () {
    var expected = '1234' 
    expect(euler.reverse('4321')).toEqual(expected);
  });

  it('determines if a number is a palindrome', function () {
    var expected = true
    expect(euler.palTest(8008)).toEqual(expected);
  });
  it('determines if a number is not a palindrome', function () {
    var expected = false
    expect(euler.palTest(1234)).toEqual(expected);
  });
  it('returns the largest palindrome made up of the product of two numbers of 2 digits long', function () {
    var expected = 9009 
    expect(euler.largestPal(2)).toEqual(expected);
  });

  it('returns the largest palindrome made up of the product of two numbers 1 digit long', function () {
    var expected = 9
    expect(euler.largestPal(1)).toEqual(expected);
  });
	
});

