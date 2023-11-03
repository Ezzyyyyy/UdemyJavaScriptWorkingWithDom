let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}

paragraphElement.addEventListener("click", changeParagraphText); // No need for () after.

let inputElement = document.querySelector("input");

function retrieveUserInput() {
    let enteredText = inputElement.value; // .value holds current value inputted
    console.log(enteredText);
}

inputElement.addEventListener("input", retrieveUserInput);
