
var euler = require('./index');

describe('euler', function () {

  it('lists all numbers in the Fibonacci sequence below 100', function () {
    var expected = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89] 
    expect(euler.fibonacci(100)).toEqual(expected);
  });
  it('lists all numbers in the Fibonacci sequence below 60', function () {
    var expected = [1, 2, 3, 5, 8, 13, 21, 34, 55] 
    expect(euler.fibonacci(60)).toEqual(expected);
  });

  it('returns the sum of even terms within the array', function () {
    var expected = 44
    expect(euler.sumOfEvens([1, 2, 3, 5, 8, 13, 21, 34, 55])).toEqual(expected);
  });

  it('returns the sum of even terms within the array', function () {
    var expected = 18
    expect(euler.sumOfEvens([3, 4, 6, 9, 8])).toEqual(expected);
  });
  it('returns the sum of even terms in the Fibonacci sequence below 100', function () {
    var expected = 44
    expect(euler.sumOfEvenFibonacci(100)).toEqual(expected);
  });

  it('returns the sum of even terms in the Fibonacci sequence below 30', function () {
    var expected = 10
    expect(euler.sumOfEvenFibonacci(30)).toEqual(expected);
  });
	
});
