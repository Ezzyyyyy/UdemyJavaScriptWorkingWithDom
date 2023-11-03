let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log('Paragraph Clicked!');
}

paragraphElement.addEventListener("click", changeParagraphText); // No need for () after.

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
    // let enteredText = inputElement.value; // .value holds current value inputted
    let enteredText = event.target.value; // Does the same as previous, but doesn't access anything outside of function
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
