/*

Saurab Tiwari

20th, November, 2026

This file contains the Javascript used in the howToSellBooks.html page and utilizies event handling.

Resources that were used to learn about event handling I used were: 
https://www.w3schools.com/jsref/jsref_isnan.asp
https://www.w3schools.com/jsref/event_preventdefault.asp
https://www.youtube.com/watch?v=g_vXSKbfUiQ

The built in VS Code inline suggestions AI were used to make comments on my code.

*/


// Creating variables and setting them.
let elForm = document.getElementById("listingForm");

let elTitle = document.getElementById("title");
let elPrice = document.getElementById("price");
let elAuthor = document.getElementById("author");

let titleComment = document.getElementById("titleComment");
let priceComment = document.getElementById("priceComment");
let formComment = document.getElementById("formComment");
let authorComment = document.getElementById("authorComment");


// Functions to show hints and check for errors in the form fields.

function showTitleHint() {
    titleComment.style.color = "white";
    titleComment.textContent = "Title cannot be empty and must be at minimum 1 character.";
}

function showPriceHint() {
    priceComment.style.color = "white";
    priceComment.textContent = "Enter a number that is greater than 0.";
}
function showAuthorHint() {
    authorComment.style.color = "white";
    authorComment.textContent = "Enter the Author's name."
}

function checkAuthor() {
    if(elAuthor.value.length < 1) {
        authorComment.style.color = "red";
        authorComment.textContent = "Error: Enter at least 1 character.";
    }
    else{
        authorComment.textContent = "";

    }
}

function checkTitle() {
    if(elTitle.value.length < 1) {
        titleComment.style.color = "red";
        titleComment.textContent = "Error: Enter at least 1 characters.";
    }
    else{
        titleComment.textContent = "";
    }
}

function checkPrice() {
    if(isNaN(elPrice.value) || elPrice.value <= 0) {
        priceComment.style.color = "red";
        priceComment.textContent = "Error: Enter a number greater than 0.";
    }
    else{
        priceComment.textContent = "";
    }
}

// Function to handle form submission and display a success or error message.
function handleSubmit(event) {
    event.preventDefault();
    if(elTitle.value.length >= 1 && elPrice.value > 0 && elAuthor.value.length > 0) {
        formComment.style.textAlign = "center";
        formComment.style.color = "green";
        formComment.textContent = "Your sample listing was successfully posted!";
    } 
    else{
        formComment.style.textAlign = "center";
        formComment.style.color = "red";
        formComment.textContent = "Please fix the Errors above before submitting.";
    }
}


// Adding event listeners to the form fields and the form itself.
elTitle.addEventListener("focus", showTitleHint, false);
elTitle.addEventListener("blur", checkTitle, false);

elPrice.addEventListener("focus", showPriceHint, false);
elPrice.addEventListener("blur", checkPrice, false);

elAuthor.addEventListener("focus", showAuthorHint, false);
elAuthor.addEventListener("blur", checkAuthor, false);

elForm.addEventListener("submit", handleSubmit, false);