function solveEquation(a, b, c) {
  "use strict";
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d == 0) {
    arr.push(-b / (2 * a));
    console.log(arr);
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    console.log(arr);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;



  return totalAmount;
}
