function fibonacci(maxFibonacci){
	
	var fibs = [1,2]
	var i = 0
	var sequenceNum = 3
	while (sequenceNum < maxFibonacci){
		fibs.push(sequenceNum)
		i++
		sequenceNum = fibs[i] + fibs[i+1]
	//take index 0 and 1 add them together, take result and push it to the array
	}
	return fibs
}

function sumOfEvens(array){
  var evenNum = 0
  for (var i = 0; i < array.length; i++){
 		if (array[i] % 2 === 0) {
			evenNum = array[i]+evenNum
		}
	}
	return evenNum
}

function sumOfEvenFibonacci(maxFibonacci){
	return sumOfEvens(fibonacci(maxFibonacci))
}


module.exports = {
	fibonacci: fibonacci,
	sumOfEvens: sumOfEvens,
	sumOfEvenFibonacci: sumOfEvenFibonacci
}
