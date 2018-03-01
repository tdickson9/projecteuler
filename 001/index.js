function starting(x){
  var array = []
  for (var i = 1; i < x; i++) {
	 if (i % 3 === 0 || i % 5 === 0) {
	   array.push(i)
	 } 	
	}
  return array
}

function sumOfMultiples(array){
  var runningTotal = 0
  for (var i = 0; i < array.length; i=i+1){
    runningTotal = array[i]+runningTotal 
  }
  return runningTotal 
}

function sumOf(x){
  var array = starting(x)
  var total = sumOfMultiples(array)

  return total
}


module.exports = { 
	starting: starting, 
  sumOfMultiples: sumOfMultiples,
  sumOf: sumOf  
}
