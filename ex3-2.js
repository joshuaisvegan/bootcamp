var puppers = ['Ella', 'Ari', 'Uma'];
var backwardPuppers = [];
var reverseArray = function(array){
  for (i = array.length-1; i >= 0; i--)
      backwardPuppers.push(array[i]);
}
reverseArray(puppers);
console.log(backwardPuppers);
