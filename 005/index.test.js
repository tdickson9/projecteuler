
var euler = require('./index');

describe('euler', function () {

  it('returns smallest number evenly divisible by 1 through 10', function () {
    var expected = 2520 
    expect(euler.divisibleTest(10)).toEqual(expected);
  });
  it('returns the smallest number evenly divisible by 1 through 5', function () {
    var expected = 60
    expect(euler.divisibleTest(5)).toEqual(expected);
  });  
});
