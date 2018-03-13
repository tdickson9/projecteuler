function sumOfEvens(array){
  var evenNum = 0
  for (var i = 0; i < array.length; i++){
 		if (array[i] % 2 === 0) {
			evenNum = array[i]+evenNum
		}
	}
	return evenNum
}



module.exports = {
	//fibonacci: fibonacci,
	sumOfEvens: sumOfEvens,
	//sumOfEvenFibonacci: sumOfEvenFibonacci
}
