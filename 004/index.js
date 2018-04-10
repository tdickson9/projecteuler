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

//get all multiples and put them into an array
//drop all values that are not palindromes
//find the largest and return it
function largestPal(digitCount){ 
  var array = []
  var maxNum = Math.pow(10, digitCount)
  var minNum = Math.pow(10, digitCount-1)
  for (var i = minNum; i < maxNum; i++){
     for (var j = minNum; j < maxNum; j++){
       if (palTest(i * j)){
          array.push(i * j)
     
       }
//i = 10 j = 10 then 11 then 12 etc until looping back to i = 11

     }

  }
  var maxPal = 0
  for (var i = 0; i < array.length; i++){
    if (array[i] > maxPal){
      maxPal = array[i]
    }
  }
  return maxPal

}

module.exports = {
  multiply: multiply,
  reverse: reverse,
  palTest: palTest,
  largestPal: largestPal
}
