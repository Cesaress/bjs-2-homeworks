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
  } 

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }
  
  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  let sumMortgage = amount - contribution;

  let nowDate = new Date();

  let monthAmount = Number((date.getMonth() - nowDate.getMonth()) + (12 * (date.getFullYear() - nowDate.getFullYear())));

  let monthlyPercent = percent / 100 / 12;

  let monthlyPayment = sumMortgage * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**monthAmount) - 1))); 

  let totalAmount = monthlyPayment * monthAmount;
  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}
