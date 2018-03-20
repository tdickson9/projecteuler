function multiply(x,y) {
        return x*y
}

function reverse(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("")
  return joinArray;
}

function palTest(num){
  var str = num.toString()
  return reverse(str) == str
}


module.exports = {
  multiply: multiply,
  reverse: reverse,
  palTest: palTest
}
