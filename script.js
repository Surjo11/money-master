document.getElementById("calculate-btn").addEventListener("click", function () {
  let income = document.getElementById("monthly-income").value;
  let foodCost = document.getElementById("food-cost").value;
  let rentCost = document.getElementById("rent-cost").value;
  let pocketCost = document.getElementById("pocket-cost").value;
  let totalCost = Number(foodCost) + Number(rentCost) + Number(pocketCost);
  let expenses = document.getElementById("total");
  expenses.innerText = totalCost;
  let remainingBalance = Number(income) - totalCost;
  let balance = document.getElementById("remaining-balance");
  balance.innerText = remainingBalance;
});
