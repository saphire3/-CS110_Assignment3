//  4. Using a for loop, write a program that reverses a given array.
//      arr = [1, 2, 3];
//      result => [3, 2, 1];

var arr = [1, 2, 3];
var text = '';

for (index = arr.length - 1; index >= 0; index-- ) {
    text += arr[index];

    if (index != 0)
        text += ', ';
}

console.log("result => [" + text + "];");