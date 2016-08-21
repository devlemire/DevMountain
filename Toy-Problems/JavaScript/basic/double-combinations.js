// Write a function that takes in a 2D array and returns all the possible combinations of 2
function allDoubleCombos(arr) {

  var items = [];
  var combos = [];

  for(var i = 0; i < arr.length; i++) {  //Convert to single array for easier looping
    for(var j in arr[i]) {
      items.push(arr[i][j]);
    }
  }

  for(var i = 0; i < items.length; i++) {  //Loop through single array and combine each item in the iteration to rest of the contents of the single array
    for(var j = 0; j < items.length; j++) {
      combos.push(items[i] + '-' + items[j]);
    }
  }

  return combos;  //Return new array with all combinations
}

allDoubleCombos([ [1,2,3], [4,5], [6,7,8], ['bob', 'joe', 'billy', 'john'] ]);
/*
  1 - 1   2 - 1   3 - 1   4 - 1   5 - 1
  1 - 2   2 - 2   3 - 2   4 - 2   5 - 2
  1 - 3   2 - 3   3 - 3   4 - 3   5 - 3
  1 - 4   2 - 4   3 - 4   4 - 4   5 - 4   etc.. etc..
  1 - 5   2 - 5   3 - 5   4 - 5   5 - 5
  1 - 6   2 - 6   3 - 6   4 - 6   5 - 6
  1 - 7   2 - 7   3 - 7   4 - 7   5 - 7
  1 - 8   2 - 8   3 - 8   4 - 8   5 - 8
*/
