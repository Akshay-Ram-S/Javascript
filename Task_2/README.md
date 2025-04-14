## Simple Calculator

## Objective

To build a basic calculator that performs arithmetic operations like addition, subtraction, multiplication, and division.

## Concepts Used

1. DOM Manipualtion : document.getElementById() method retrieves an HTML element by its ID. Here, it's used to get the display element.

2. Event Handling : The functions appendToDisplay(), calculate(), clearDisplay() methods are called based on their respective events.

## Concepts Learned

1. Regular Expressions (Regex) : A regular expression that checks whether the input consists only of numbers (0-9), arithmetic operators (+, -, \*, /), and decimal points (.).

2. New Function(`return ${expression}`)() : creates a function from the string expression and executes it. This is used to evaluate the arithmetic expression entered by the user.
   <br>

It is recommended to validate user's input before calculating the user input in this method as New Function can execute a arbitrary code which leads to security issues.
