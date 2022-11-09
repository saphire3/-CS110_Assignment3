//  5. Write a program that given a positive decimal number, will print its binary value.Hint: You
//  can combine the remainders into a string and then reverse the string for the correct result.
//      num = 8;
//      result => 1000

var num = 8;
var result = '';
var tmp = num;

while (tmp > 0) {
    result += tmp % 2;
    tmp = Math.floor(tmp / 2);
}

var reverse = '';
for (index = result.length - 1; index >= 0; index--) {
    reverse += result[index];
}

//console.log("result => " + result);
console.log("result => " + reverse);