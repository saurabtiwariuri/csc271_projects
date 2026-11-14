# Identify Reusable Code

let tax = price * taxRate;
let total = price + tax;

// Showing price and tax to the user.
amountElements[0].textContent = "Price: $" + price.toFixed(2);
amountElements[1].textContent = "Tax: $" + tax.toFixed(2);
// Showing the sellers name and the total price.
msrpElement.innerHTML = "<strong> MSRP: </strong>$" + msrp.toFixed(2);
sellerElement.innerHTML = "<strong> Sold by: </strong>" + sellerName;
totalElement.innerHTML = "<strong>Total: $" + total.toFixed(2) + "</strong>";

# Plan Your Functions
Some ideas that instantly came to mind were a function that creates and displays a randomized welcome message, a function that rounds a long decimal price to 2 decimals and returns the rounded number, and a function that calculates the total price of a book that could be reused when a user makes a listing.

The main reasons why I want to create functions for these sections is for modularization. It will make the code easier to read, it will reduce some repetition such as rounding numbers, and it simplifies updating my code in the future.

# Document Your Plan

This function will help greet users, making them feel more welcome on the website. It will not take in any parameters and will not return anything, only update an element.

createHelloMessage(){
    generate random number;

    a bunch of if statements, whatever the number lands on, thats the message it will display;

    no return value;
}

This function will take in a number, round it to two decimal places, and return the rounded number. It will help reduce repetition and improves how easy it is to create book listings for the developer (me). 

roundToTwoDecimals(number){

    var roundedNum = number.toFixed(2);

    return roundedNum;

}

This function will take in the taxRate and the price, it will then find the tax and calculate the total. It will then return the total price of the book. This will improve my code by making it easier to look at and reduce repetition.

calculateTotal(price, taxRate){

    var tax = price * taxRate;

    return price + tax;

}