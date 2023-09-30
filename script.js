// script.js

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
  // Find the element with the id "level"
  const levelElement = document.getElementById("level");

  // Initialize a counter to keep track of the DOM level
  let domLevel = 0;

  // Loop through the parent nodes of the element until the document node is reached
  let currentNode = levelElement;
  while (currentNode !== document) {
    currentNode = currentNode.parentNode;
    domLevel++;
  }

  // Display the DOM level using an alert
  alert("The level of the element is: " + domLevel);
});
