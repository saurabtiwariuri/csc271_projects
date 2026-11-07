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
let msrp = 35.99;


// Creating variables and setting them using DOM
let pageHeading = document.getElementsByTagName("h1");
let titleElement = document.getElementById("book-title");
let amountElements = document.getElementsByClassName("amount");
let totalElement = document.querySelector("#total");
let sellerElement = document.querySelector("#seller-note");
let msrpElement = document.querySelector("#msrp-price");

// Setting header and book title.
pageHeading.textContent = "Recyclopedia Checkout";
titleElement.textContent = "Book Title: " + bookTitle;
// Showing price and tax to the user.
amountElements[0].textContent = "Price: $" + price.toFixed(2);
amountElements[1].textContent = "Tax: $" + tax.toFixed(2);
// Showing the sellers name and the total price.
msrpElement.innerHTML = "<strong> MSRP: </strong>$" + msrp.toFixed(2);
sellerElement.innerHTML = "<strong> Sold by: </strong>" + sellerName;
totalElement.innerHTML = "<strong>Total: $" + total.toFixed(2) + "</strong>";

let dealMessageElement = document.querySelector("#deal-message");

if(total < msrp - msrp * 0.06 && total > msrp - msrp * 0.11){
    dealMessageElement.innerHTML = "You'll save over 5% off the MSRP price!"
}
else if(total < msrp - msrp * 0.11 && total > msrp - msrp * 0.21){
    dealMessageElement.innerHTML = "You'll save over 10% off the MSRP price!"
}
else if(total < msrp - msrp * 0.21 && total > msrp - msrp * 0.31){
    dealMessageElement.innerHTML = "You'll save over 20% off the MSRP price!"
}
else{
    dealMessageElement.innerHTML = "You'll save over 30% off the MSRP price!"
}


