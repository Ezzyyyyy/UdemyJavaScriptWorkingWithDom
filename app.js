//document.body.children[1].children[0].href = "https://google.com"; // Access body of document,
//then the child of body, then child of body (p), then anchor element to change link in HTML through JS

//Drilling into the DOM ^^

let anchorElement = document.getElementById("external-link"); // Looks for element with ID of 'external-link'
anchorElement.href = "https://google.com";

// Quicker and more specific way of changing an element using JS ^^ This uses queries.

anchorElement = document.querySelector("p a"); // querySelector needs a CSS parameter: p a { color: red; }
// querySelectorAll selects all elements.
anchorElement.href = "https://elliotthorpe.co.uk";
