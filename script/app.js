// Calculation Section
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    let income = document.getElementById("monthly-income").value;
    // Error Handel
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
    // Error Handel
    if (income < expenses.innerText) {
      return alert("❌Alass! You expense more money than your income❌");
    }
    let remainingBalance = Number(income) - totalCost;
    let balance = document.getElementById("total-balance");
    balance.innerText = remainingBalance;
  });

// Saving Section
document.getElementById("save-button").addEventListener("click", function () {
  let income = document.getElementById("monthly-income").value;
  let save = document.getElementById("saving").value;
  let saveCalculation = (Number(income) * Number(save)) / 100;
  let saveAmount = document.getElementById("save-amount");
  saveAmount.innerText = saveCalculation;
  let totalBalance = document.getElementById("total-balance");
  let balance = Number(totalBalance.innerText) - Number(saveAmount.innerText);
  // Error Handel
  if (Number(totalBalance.innerText) < Number(saveAmount.innerText)) {
    return alert("❌SORRY! You can't Save! ❌");
  }
  let remainingBalance = document.getElementById("remain-balance");
  remainingBalance.innerText = balance;
});
