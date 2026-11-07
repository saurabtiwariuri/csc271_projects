/*
    Saurab Tiwari
    November 6th, 2026
    This file contains the Javascript used in the sellerReviewExample.html page.
    The code below creates a list of reviews and displays them on the page.
    
    RESOURCE USED TO LEARN HOW TO USE STYLING IN JS: https://www.geeksforgeeks.org/html/change-the-border-of-html-element-in-javascript/

    AI: The built in VS Code inline suggestions were used to make comments on my code.
*/

// Creating variables and setting them.
let reviews = [
    "Saved me over $60 this semester! His eyes are a little weird looking but the book came in as described.",
    "The book arrived exactly as described. I was able to 1v1 him in Fortnite for a discount.",
    "My name is Sasuke Uchiha. I hate a lot of things, and I don't particularly like anything. But this guy? I love him, best seller ever."
];
// Creating an array of reviewers.
let reviewers = ["Johnny Joestar", "John Fortnite", "Sasuke Uchiha"];
// Creating a variable to hold the review list element.
let reviewList = document.getElementById("review-list");
// Looping through the reviews and adding them to the review list.
for (let i = 0; i < reviews.length; i++) {
    reviewList.innerHTML += "<p class='review'><strong>" + reviewers[i] + "</strong>: " + reviews[i] + "</p>";
}
// Creating an array of review star ratings.
let reviewStars = ["★★★★☆", "★★★★★", "★★★★★"];
// Creating a variable to hold the review elements.
let reviewElements = document.getElementsByClassName("review");
// Looping through the review elements and adding the star ratings to them.
let reviewStarsCount = 0;
while (reviewStarsCount < reviewStars.length) {
    reviewElements[reviewStarsCount].innerHTML += " " + reviewStars[reviewStarsCount];
    reviewStarsCount++;
}
// Creating a variable to hold the review nodes.
let reviewNodes = document.querySelectorAll(".review");
// Looping through the review nodes and adding a border and padding to them.
for (let i = 0; i < reviewNodes.length; i++) {
    reviewNodes[i].innerHTML = "<em>Review #" + (i + 1) + "</em>:<br>" + reviewNodes[i].innerHTML;
    reviewNodes[i].style.border = "1px solid #b5b5b5";
    reviewNodes[i].style.padding = "10px";
}
