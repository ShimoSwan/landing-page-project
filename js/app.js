/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.getElementsByTagName("section"));
for (section of sections) {
  // create list item per each section
  const listItem = document.createElement("li");
  // creat anchor element refer to each section
  const anchorItem = document.createElement("a");
  // add to anchor: content [data-nav of the section element]
  // add to anchor: class [menu__link]
  // add to anchor: id [# section_id]
  anchorItem.innerText = section.getAttribute("data-nav");
  anchorItem.classList.add("menu__link");
  if (section.className) {
    anchorItem.classList.add(section.className);
  }
  anchorItem.setAttribute("href", "#" + section.getAttribute("id"));

  listItem.appendChild(anchorItem);
  navList.appendChild(listItem);
}
// Scroll to section on link click

// Set sections as active

const navSections = document.getElementsByClassName("menu__link");

const navClickListner = function (event) {
  event.preventDefault();
  let selectedSection = document.querySelector(
    event.target.getAttribute("href")
  );
  // Scroll to anchor ID using scrollIntoView event
  selectedSection.scrollIntoView({ block: "end", behavior: "smooth" });

  for (let navSection of navSections) {
    navSection.classList.remove("active_section");
  }

  event.target.classList.add("active_section");
  //Remove active_section class from section
  for (let section of sections) {
    section.classList.remove("active_section");
  }
  // Add active_section class to selectedSection
  selectedSection.classList.add("active_section");
};
//Add eventListener to links
for (let navSection of navSections) {
  if (!navSection.classList.contains("icon")) {
    navSection.addEventListener("click", navClickListner);
  }
}

// Hamburger Menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}
