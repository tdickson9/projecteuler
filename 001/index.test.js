var euler = require('./index');

describe('euler', function () {

  it('lists all natural numbers below 10 that are multiples of 3 or 5', function () {
    var expected = [3, 5, 6, 9] 
    expect(euler.starting(10)).toEqual(expected);
  });
  it('lists all natural numbers below 11 that are multiples of 3 or 5', function () {
    var expected = [3, 5, 6, 9, 10] 
    expect(euler.starting(11)).toEqual(expected);
  });


  it('sums natural numbers below 10 that are multiples of 3 or 5', function () {
    var expected = 23
    expect(euler.sumOf(10)).toEqual(expected);
  });

  it('sums natural numbers below 10 that are multiples of 3 or 5', function () {
    var expected = 23
    expect(euler.sumOfMultiples([3, 5, 6, 9])).toEqual(expected);
  });
  it('sums natural numbers below 10 that are multiples of 3 or 5', function () {
    var expected = 93
    expect(euler.sumOfMultiples([23, 45, 6, 19])).toEqual(expected);
  });
});
