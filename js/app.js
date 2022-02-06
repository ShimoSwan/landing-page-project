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
// List that will include navigation links
const navList = document.getElementById("navbar__list");
// navigation links
const navSections = document.getElementsByClassName("menu__link");
//  HTML sectio elements
const sections = Array.from(document.getElementsByTagName("section"));
//  Nearest section from top
let nearestSection = sections[0];

// Hamburger menu icon
let menuIcon = document.querySelector(".icon.menu__link");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// set active link style
function setActiveLink(clickedLink) {
  for (let navSection of navSections) {
    navSection.classList.remove("active_section");
  }
  clickedLink.classList.add("active_section");
}

// set active section style
function setActiveSection(selectedSection) {
  //Remove active_section class from section
  for (let section of sections) {
    section.classList.remove("active_section");
  }
  // Add active_section class to selectedSection
  selectedSection.classList.add("active_section");
}

// scroll to active/selected section
function scrollToActiveSection(activeSection) {
  activeSection.scrollIntoView({ block: "end", behavior: "smooth" });
}

function getDistanceFromTop(element) {
  let margin = 170;
  return Math.abs(
    (element.getBoundingClientRect().bottom +
      element.getBoundingClientRect().top) /
      2 -
      margin
  );
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// menu links click listner
const navClickListner = function (event) {
  event.preventDefault();
  // set active link
  let clickedLink = event.target;
  setActiveLink(clickedLink);
  // set active section
  let selectedSection = document.querySelector(
    clickedLink.getAttribute("href")
  );
  setActiveSection(selectedSection);
  // scroll to active section
  scrollToActiveSection(selectedSection);
};

// Hamburger Menu listner
function hamburgerMenuListner() {
  var x = document.getElementById("myTopnav");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}

// Scrolling listner
function scrollListner(event) {
  // Get nearest section distance to the top
  let nearestSectionDisFromTop = getDistanceFromTop(nearestSection);

  for (let section of sections) {
    if (section == nearestSection) {
      continue;
    }
    // get section distance from top
    disFromTop = getDistanceFromTop(section);
    // if sectino distance from top is less than the nearest section from top
    // set current section as the nearest section
    // recalculate nearest section distance from top
    if (disFromTop < nearestSectionDisFromTop) {
      nearestSection = section;
      nearestSectionDisFromTop = getDistanceFromTop(nearestSection);

      // set active section
      setActiveSection(nearestSection);
      // set active link
      let clickedLink = document.querySelector(
        "a[href='#" + nearestSection.getAttribute("id") + "']"
      );
      setActiveLink(clickedLink);
    }
  }
}

// build the nav

// Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 *
 */
//Add eventListener to links
for (let navSection of navSections) {
  if (!navSection.classList.contains("icon")) {
    navSection.addEventListener("click", navClickListner);
  }
}
// Listen to scroll event
document.addEventListener("scroll", scrollListner);

// listen to hamburger menu click
menuIcon.addEventListener("click", hamburgerMenuListner);

// Build menu
for (let section of sections) {
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
