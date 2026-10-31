// Saurab Tiwari 
// Friday, October 31st, 2026
// This file contains the Javascript used in the checkoutExample.html page.

// Creating variables / setting them.
let bookTitle = "Algorithms";
let sellerName = "Kiren Twinkleburger";

let price = 25.99;
let taxRate = 0.07;

// Calculating tax and total.
let tax = price * taxRate;
let total = price + tax;

// Creating variables and setting them using DOM
let pageHeading = document.getElementsByTagName("h1");
let titleElement = document.getElementById("book-title");
let amountElements = document.getElementsByClassName("amount");
let totalElement = document.querySelector("#total");
let sellerElement = document.querySelector("#seller-note");

// Setting header and book title.
pageHeading.textContent = "Recyclopedia Checkout";
titleElement.textContent = "Book Title: " + bookTitle;
// Showing price and tax to the user.
amountElements[0].textContent = "Price: $" + price.toFixed(2);
amountElements[1].textContent = "Tax: $" + tax.toFixed(2);
// Showing the sellers name and the total price.
sellerElement.innerHTML = "<strong> Sold by: </strong>" + sellerName;
totalElement.innerHTML = "<strong>Total: $" + total.toFixed(2) + "</strong>";