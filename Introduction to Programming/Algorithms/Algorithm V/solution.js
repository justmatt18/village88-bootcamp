// 1. Given an array and a value Y, count and
// print the number of array values greater than Y.

function greaterThanY(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count += 1;
    }
  }
  console.log(count);
}
greaterThanY([1, 2, 3, 5, 11, 12], 4); // 5,11,12 -> 3

// 2
// Given an array, print the max, min and average values for that array.
function printMinMaxA(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum += arr[i];
  }
  avg = sum / arr.length;

  console.log("min is", min);
  console.log("max is", max);
  console.log("avg is", avg);
}

printMinMaxA([2, 5, 3, 3, 10]);

// 3
// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr) {
  var newArr = arr;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr[i] = "Dojo";
    }
  }
  return newArr;
}
console.log(replaceNegatives([1, 2, -3, -5, 5]));

//4
// Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, start, end) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (start > i || end < i) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeVals([20, 30, 40, 50, 60, 70], 2, 4));
