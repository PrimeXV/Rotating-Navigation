const harmburger = document.querySelector(".burger")
const circleNav = document.querySelector(".circle-nav")
const circleNavItems = document.querySelectorAll(".circle-nav_item");
const headingEl = document.querySelector("h1");


// Array of contents for each circleNavItems
const contents = [
  'Hassan',
  'Hussein',
  'Tolu',
  'Jerry',
  'laide',
  'Billyjean',
  // Add more contents as per your requirement
];




/**
 * Toggles the "hide-nav" class of the circleNav element
 */
function hideNav() {
  circleNav.classList.toggle("hide-nav")
}

harmburger.addEventListener("click", () => {
  hideNav();
})

circleNavItems.forEach((item, index) => {
  // Use the index parameter to get the index of the item
  item.addEventListener("click", () => {
    // Update the content of the heading element when each circleNavItems is clicked
    headingEl.innerHTML = contents[index]; // Use the index to get the corresponding content from the array
    hideNav();
  });
});

