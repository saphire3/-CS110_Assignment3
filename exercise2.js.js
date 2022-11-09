//  2. Write a code that for a given grade from 0 to 100 will print:

//      1. The letter grade of the user(Using if/else).
//      2. Using the calculated grade letter, check if the grade is passing or failing(Using switch).

//  Don’t worry about the number validation.We’re assuming that the number is always >= 0 and
//    <= 100. Use the scale specified in the class syllabus. Only consider grades greater or equal
//  to C - as passing.

//  The output should be exactly in the given example format:
//      grade = 89; =>
//      expected: “Your grade is 89 which corresponds to B +.You passed!”

const grade = '91.7';
var result = '';

if (97 <= grade && grade <= 100)
    result = 'A+'

else if (93 <= grade && grade <= 96)
    result = 'A'

else if (90 <= grade && grade <= 92)
    result = 'A-'

else if (87 <= grade && grade <= 89)
    result = 'B+'

else if (83 <= grade && grade <= 86)
    result = 'B'

else if (80 <= grade && grade <= 82)
    result = 'B-'

else if (77 <= grade && grade <= 79)
    result = 'C+'

else if (73 <= grade && grade <= 76)
    result = 'C'

else if (70 <= grade && grade <= 72)
    result = 'C-'

else if (67 <= grade && grade <= 69)
    result = 'D+'

else if (63 <= grade && grade <= 66)
    result = 'D'

else if (60 <= grade && grade <= 62)
    result = 'D-'

else if (0 <= grade && grade < 60)
    result = 'F'

switch (result) {
    case 'A+':
        console.log("Your grade is " + grade + " which corresponds to A+. You passed!");
        break;
    case 'A':
        console.log("Your grade is " + grade + " which corresponds to A. You passed!");
        break;
    case 'A-':
        console.log("Your grade is " + grade + " which corresponds to A-. You passed!");
        break;
    case 'B+':
        console.log("Your grade is " + grade + " which corresponds to B+. You passed!");
        break;
    case 'B':
        console.log("Your grade is " + grade + " which corresponds to B. You passed!");
        break;
    case 'B-':
        console.log("Your grade is " + grade + " which corresponds to B-. You passed!");
        break;
    case 'C+':
        console.log("Your grade is " + grade + " which corresponds to C+. You passed!");
        break;
    case 'C':
        console.log("Your grade is " + grade + " which corresponds to C. You passed!");
        break;
    case 'C-':
        console.log("Your grade is " + grade + " which corresponds to C-. You passed!");
        break;
    case 'D+':
        console.log("Your grade is " + grade + " which corresponds to D+. You failed!");
        break;
    case 'D':
        console.log("Your grade is " + grade + " which corresponds to D. You failed!");
        break;
    case 'D-':
        console.log("Your grade is " + grade + " which corresponds to D-. You failed!");
        break;
    case 'F':
        console.log("Your grade is " + grade + " which corresponds to F. You failed!");
        break;
}