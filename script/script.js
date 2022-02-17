// Calculation Button
document.getElementById("calculate-btn").addEventListener("click", function () {
  let income = document.getElementById("monthly-income").value;
  if (income < 0 || isNaN(income)) {
    return alert(
      '❌Error in INCOME field❌: Please Fill with "Positive Number"'
    );
  }
  let foodCost = document.getElementById("food-cost").value;
  if (foodCost < 0 || isNaN(foodCost)) {
    return alert(
      '❌Error in FOOD field❌: Please Fill with "Positive Number"'
    );
  }
  let rentCost = document.getElementById("rent-cost").value;
  if (rentCost < 0 || isNaN(rentCost)) {
    return alert(
      '❌Error in RENT field❌: Please Fill with "Positive Number"'
    );
  }
  let pocketCost = document.getElementById("pocket-cost").value;
  if (pocketCost < 0 || isNaN(pocketCost)) {
    return alert(
      '❌Error in POCKETCOST field❌: Please Fill with "Positive Number"'
    );
  }
  let totalCost = Number(foodCost) + Number(rentCost) + Number(pocketCost);
  let expenses = document.getElementById("total");
  expenses.innerText = totalCost;
  let remainingBalance = Number(income) - totalCost;
  let balance = document.getElementById("remaining-balance");
  balance.innerText = remainingBalance;
});
