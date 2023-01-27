// Business Logic

function PizzaData(topping, size) {
  this.topping = topping;
  this.size = size;
  this.pizzaCost = 10
}

PizzaData.prototype.Order = function() {
    if ((this.topping === "Cheese") || (this.topping === "Pepperoni")) {
      this.pizzaCost += 1;
    }
    else if ((this.topping === "Chicken") || (this.topping === "Bacon")) {
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

