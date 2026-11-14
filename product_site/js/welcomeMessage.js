// Saurab Tiwari
// Friday, Novemeber 13th, 2026
// This file contains the Javscript used in the welcome page to randomly generate a welcome message for the user.

function createHelloMessage() {
    let messages = [
        "Cheers to cheaper textbooks!",
        "Hello! Ready to save on textbooks?",
        "Hey there! Find your next book below.",
        "Good to see you! Let's save on Textbooks!"
    ];
    let randomNumber = Math.floor(Math.random() * messages.length);
    let welcomeElement = document.querySelector("#welcome-message");
    welcomeElement.textContent = messages[randomNumber];
}

createHelloMessage();