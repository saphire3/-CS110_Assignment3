//  1. Using while write a program that prints the following figure for given number of lines.
//  Example:
//      n = 3; =>
//          +++
//          +++
//          +++

const totalLines = 4;
let text = '';

for (index = 0; index < totalLines; index++) {
    text += '+';
}
// text = '+++';

for (rows = 0; rows < totalLines; rows++) {
    console.log(text);
}

