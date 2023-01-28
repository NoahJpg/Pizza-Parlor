# _Pizza Parlor_

#### By _**Noah Akinson**_

#### _An order form that allows user to select pizza toppings and size to output the total price_

https://github.com/NoahJpg/Pizza-Parlor.git

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_An order form that alllows uer to input their desired pizza toppings, premium toppings, some free toppings, and the size to output a price based on their number of selected regular/premium toppings and their desired pizza size_

## Setup/Installation Requirements

* _Clone the file to your desktop_
* _unzip folder to desktop_
* _open 'pizza-parlor' folder_
* _double click on file 'index.html'_
* _this should open your default browser and run the webpage_

_if the page does not work, instead, right click index.html, select "Open with" and choose Google Chrome browser to run the file_

## Known Bugs

* _There are no known bugs at this time_


If you have any issues running this HTML site, then I have failed on a massive level. Please reach out to me at noahatkinson1.1@gmail.com or feel free to edit the code yourself if you feel so inclined.

## MIT License

Copyright (c) [2023] [Noah Atkinson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

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

Describe: PizzaData.prototype.morePizza = function ()

Test: add an object for multiple pizzas
Code: let pizza = PizzaData.morePizza()
Expeceted Output: 0


