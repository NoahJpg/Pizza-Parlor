// Business Logic

function PizzaData(topping, premiumTopping, size) {
  this.topping = topping;
  this.premiumTopping = premiumTopping;
  this.size = size;
  this.pizzaCost = 10;
}

PizzaData.prototype.Order = function() {
    if ((this.topping === "Cheese") || (this.topping === "Pepperoni")) {
      this.pizzaCost += 1;
    }
    if ((this.premiumTopping === "Chicken") || (this.premiumTopping === "Bacon")) {
      this.pizzaCost += 3;
    }
    if (this.size === "X-Small") {
      this.pizzaCost -= 2;
    }
    else if (this.size === "X-Large") {
      this.pizzaCost += 2;
    }
    console.log(this.pizzaCost);
    return pizzaCost;
}

// UI Logic
function handleOrderForm(event) {
  event.preventDefault();
  const inputTopping = document.getElementById("topping").value;
  const inputPremiumTopping = document.getElementById("premium-topping").value;
  const inputSize = document.getElementById("size").value;
  let pizzaCost = new PizzaData(inputTopping, inputPremiumTopping, inputSize);
  document.getElementById("total").innerText = pizzaCost.Order();
}

window.addEventListener("load", function() {
  const form = document.getElementById("pizza-order");
  form.addEventListener("submit", handleOrderForm);
})
