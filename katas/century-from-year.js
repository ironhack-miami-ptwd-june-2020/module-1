// ************************************************************************************
// https://www.codewars.com/kata/century-from-year/javascript
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// ************************************************************************************

// our notes: if the number is stringified, to use it as number, we have to turn it back to number type
// const price = "120";

// turn stringified number to number - 3 ways: parseInt(), Number(), +
// console.log(parseInt(price));
// console.log(Number(price));
// console.log(+price);

// ES5:
// function centuryFromYear(){
//     the some code as below goes here
// }

// ES6:

const centuryFromYear1 = year => {
  if (year % 100 === 0) return Math.floor(year / 100);
  else return Math.floor(year / 100) + 1;
};

centuryFromYear1(1987); // 20

const centuryFromYear2 = year => {
  return Math.ceil(year / 100);
};

centuryFromYear2(2020); // 21
