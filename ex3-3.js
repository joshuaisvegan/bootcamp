var numbers = [-3, -2, -1, 0, 1, 2, 3];
var neg = [];
var getLessThanZero = function(array){
  for (i = 0; i < numbers.length; i++){
    if (array[i]< 0){
      neg.push(array[i])
    }
  }
  return neg;
}

var result = getLessThanZero(numbers);
console.log(result);

var neg2 = [-1,-2,3,4,5].filter(function(item) {
  return item < 0;
});
console.log(neg2);
