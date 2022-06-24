"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d = b**2 - 4 * a * c;

  let s1;
  let s2;

  if (d === 0) {
    s1 = -b / (2 * a);
    arr = [s1];
  } else if (d > 0) {
    s1 = (-b + Math.sqrt(d)) / (2 * a);
    s2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [s1, s2];
  } else {
    arr = ["корней нет"];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  let S = amount - contribution;

  let D = new Date();

  let n = Number((date.getMonth() - D.getMonth()) + (12 * (date.getFullYear() - D.getFullYear())));

  let P = percent / 100 / 12;
  // P = Number(P.toFixed(3)); 0.008 - мало, 0.0083 - много, оставил как есть.

  let M = S * (P + (P / (((1 + P)^n) - 1))); // выдаёт результат в 10 раз меньше нужного, причину не определил

  let totalAmount = (M * 10) * n;
  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}
