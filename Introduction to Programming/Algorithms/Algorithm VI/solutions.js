// Algorithm VI Solutions
// #1
// Return the given array, after setting any negative values to zero.
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log(resetNegatives([1, 2, -1, -3]));
// Output  [1, 2, 0, 0]

// ======================================================= //

// #2
// Given an array, move all values forward by one index,
// dropping the first and leaving a ‘0’ value at the end.
// For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      arr[i] = 0;
    } else {
      arr[i] = arr[i + 1];
    }
  }
  return arr;
}
console.log(moveForward([1, 2, 3, 5, 9, 10]));
// Output: [2,3,5,9,10,0]

// ======================================================= //

// #3  Return Reverse
function returnReverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// ======================================================= //

// #4
// Create a function that changes a given array to list each original element twice, retaining original order.
// Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] )
// should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeatTwice(arr) {
  var repeatedArr = [];
  for (var i = 0; i < arr.length; i++) {
    repeatedArr.push(arr[i]);
    repeatedArr.push(arr[i]);
  }
  return repeatedArr;
}

console.log(repeatTwice([4, "Ulysses", 42, false]));
