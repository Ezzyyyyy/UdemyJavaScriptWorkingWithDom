//document.body.children[1].children[0].href = "https://google.com"; // Access body of document,
//then the child of body, then child of body (p), then anchor element to change link in HTML through JS

//Drilling into the DOM ^^

let anchorElement = document.getElementById("external-link"); // Looks for element with ID of 'external-link'
anchorElement.href = "https://google.com";

// Quicker and more specific way of changing an element using JS ^^ This uses queries.

anchorElement = document.querySelector("p a"); // querySelector needs a CSS parameter: p a { color: red; }
// querySelectorAll selects all elements.
anchorElement.href = "https://elliotthorpe.co.uk";

//* When it comes to querying / selecting HTML elements via JavaScript, there are a couple of commonly used built-in methods that are worth knowing:

//document.getElementById('some-id'): Select a HTML element by its ID (selects only one element, since IDs should be unique)

//document.querySelector('<some-css-selector>'): Selects the first matching (!) HTML element that is met / selected by the provided CSS selector; The CSS selector can basically be any kind of valid CSS selector
//(e.g. ID selector, tag type selector, class selector, combined selectors etc.)

//document.querySelectorAll('<some-css-selector>'): Selects ALL matching HTML elements that are met / selected by the provided CSS selector

//There also are a few lesser used selection methods, that you also should've heard about:

//document.getElementsByClassName('some-css-class'): Selects all HTML elements that have the provided CSS class

//document.getElementsByTagName('tag'): Selects all HTML elements that are of the provided HTML tag type

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);
