// I don't have papers here in my place.
// I just use this for the mean time.

// #1
function a(x, y) {
  return 5;
}
console.log(a(5, 5));
/*
? solution
console.log(a(5,5)) -> a(5, 5) -> return 5
Output: 5
*/

// =========================== //

// #2
function ab(x, y) {
  z = [];
  z.push(x);
  z.push(y);
  z.push(5);
  console.log(z);
  return z;
}
b = ab(2, 2);
console.log(b);
console.log(ab(6, 8));
/*
? Soluton
z = []
z.push(x) -> z = [2] // value of x
z.push(y) -> [2, 2] // value of y
z.push(5) -> [2, 2, 5]
console.log(z) => [2, 2, 5]
return z

b = [2, 2, 5]
console.log(b) => Output: [2, 2, 5]

console.log(a(6,8))
z = [6, 8, 5]
Output: [6, 8, 5]
*/

// =========================== //

// #3
function abc(x) {
  z = [];
  z.push(x);
  z.pop();
  z.push(x);
  z.push(x);
  return z;
}
y = abc(2);
/*
? Solution
a(2)
z = []
push -> 2
pop -> 2
z = []
push -> 2
push -> 2
z = [2, 2]
return z
*/

y.push(5); // [2, 2, 5]
console.log(y); // Output:  [2, 2, 5]

// =========================== //

// # 4
function a(x) {
  if (x[0] < x[1]) {
    return true;
  } else {
    return false;
  }
}
b = a([2, 3, 4, 5]);
/*
? Solution
a([2,3,4,5])
a[0] = 2
a[1] = 3
if 2 < 3 (YES) -> return TRUE
*/
console.log(b); // TRUE

// =========================== //

// # 5
function coding(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      x[i] = "Coding";
    }
  }
  return x;
}
console.log(coding([1, 2, 3, 4])); // Output: ['Coding','Coding','Coding','Coding']
/*
? Solution
x = [1,2,3,4]
i = 0 ->
if 1 > 0  // which is TRUE
x[0] =  'Coding'

i = 1 ->
if 2 > 0  // which is TRUE
x[1] =  'Coding'

i = 2 ->
if 3 > 0  // which is TRUE
x[2] =  'Coding'

i = 3 ->
if 4 > 0  // which is TRUE
x[3] =  'Coding'

x= ['Coding','Coding','Coding','Coding']
*/

// =========================== //

function abcde(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 5) {
      x[i] = "Coding";
    } else if (x[i] < 0) {
      x[i] = "Dojo";
    }
  }
  return x;
}
console.log(abcde([5, 7, -1, 4]));
/*
? Solution
[5, 7, -1, 4]

i = 0 ->
x[0] = 5

i = 1 ->
x[1] = 'Coding'

i = 2 ->
x[2] = 'Dojo

i = 3 ->
x[3] = 4
*/

// =========================== //

function z(x) {
  if (x[0] > x[1]) {
    return x[1];
  }
  return 10;
}
b = z([5, 10]); // b = 10
console.log(b); // OUTPUT: 10
/*
? Solution
x = [5, 10]
5 > 10 ? FALSE
RETURN 10
b = 10
OUTPUT: 10
*/

function sum(x) {
  sum = 0;
  for (var i = 0; i < x.length; i++) {
    sum = sum + x[i];
    console.log(sum);
  }
  return sum;
}

sum([1, 5, 7]);

/*
? Solution
sum = 0
i = 0 ->
sum = 1
Output: 1

i = 1
sum = 6
Output: 6

i = 2
sum = 13
Output: 13
*/
