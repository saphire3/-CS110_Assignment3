//3. Given two numbers num1 and num2, using addition arithmetic operation only, write a
//program that calculates multiplication of given two numbers.Your program must use while
//loop.

//For example:
//      num1 = 4;
//      num2 = 3;
//      result => 12

var num1 = 7;
var num2 = 6;

var index = 0;
var sum = 0;

while (index < num1) {
    sum += num2;
    index++;
}

console.log("result => " + sum);