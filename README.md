Describe: PizzaData(topping, size)

Test: it should create a constructor for pizza info that stores inside
Code: const pizza = PizzaData(["cheese", "pepperoni"], "large") 
Expected Output: PizzaData { toppings: ["cheese", "pepperoni"], size: "large" }


Describe: PizzaData.prototype.Order = function()

Test: it should create a prototype of the order logic for price of topping and price of sizing
Code: const pizzaCost = PizzaData.prototype.Order
Expeceted Output: 10

Test: it output different cost based on change of topping selection
Code: let pizza = PizzaData("Cheese", "X-Large")
Expeceted Output: 13

Describe: PizzaData(topping, premiumTopping, size)

Test: add a variable for premium toppings
Code: let pizza = PizzaData("Cheese", "Chicken" "X-Large")
Expeceted Output: 16

