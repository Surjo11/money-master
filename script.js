document.getElementById("calculate-btn").addEventListener("click", function () {
  let foodCost = document.getElementById("food-cost").value;
  let rentCost = document.getElementById("rent-cost").value;
  let pocketCost = document.getElementById("pocket-cost").value;
  let totalCost = Number(foodCost) + Number(rentCost) + Number(pocketCost);
});
