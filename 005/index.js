function divisibleTest(largestInput){
  for(i=1; true; i++){
    var isSmallestMultiple = true;
    for(j=largestInput; j > 1; j--){
      isSmallestMultiple = isSmallestMultiple && i % j == 0;
    }
    if(isSmallestMultiple){
      return i // if this AND that
    }  
  }
}

module.exports = {
  divisibleTest: divisibleTest
}
