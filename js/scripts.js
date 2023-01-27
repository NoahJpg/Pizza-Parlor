// Business Logic

function PizzaData(topping, premiumTopping, size) {
  this.topping = topping;
  this.premiumTopping = premiumTopping;
  this.size = size;
  this.pizzaCost = 10;
}

PizzaData.prototype.Order = function() {
  if (this.topping.includes("cheese") && this.topping.includes("pepperoni")) {
    this.pizzaCost += 2;
  }
  else if (this.topping.includes("cheese") || this.topping.includes("pepperoni")) {
    this.pizzaCost += 1;
  }
  if (this.topping.includes("pineapple")) {
    this.pizzaCost += 1;
  }

  if (this.premiumTopping.includes("chicken") && this.premiumTopping.includes("bacon")) {
    this.pizzaCost += 6;
  }
  else if (this.premiumTopping.includes("chicken") || this.premiumTopping.includes("bacon")) {
    this.pizzaCost += 3;
  }
  if (this.premiumTopping.includes("sausage")) {
    this.pizzaCost += 3;
  }
  if (this.size === "x-small") {
    this.pizzaCost -= 2;
  }
  else if (this.size === "x-large") {
    this.pizzaCost += 2;
  }
  return "$" + this.pizzaCost ;
}


// UI Logic
function handleOrderForm(event) {
  event.preventDefault();
  const checkbox = document.querySelectorAll("input[type='checkbox']");
  let inputTopping = [];
  let inputPremiumTopping = [];

  checkbox.forEach(function(checkbox) {
    if(checkbox.checked) {
      if(checkbox.id === "cheese" || checkbox.id === "pepperoni" || checkbox.id === "pineapple") {
        inputTopping.push(checkbox.id);
      } else {
        inputPremiumTopping.push(checkbox.id);
      }
  }
});
  const inputSize = document.querySelector("input[name='size']:checked").id;
  let pizzaCost = new PizzaData(inputTopping, inputPremiumTopping, inputSize);
  document.getElementById("total").innerText = pizzaCost.Order();
}

window.addEventListener("load", function() {
  const form = document.getElementById("pizza-order");
  form.addEventListener("submit", handleOrderForm);
})
