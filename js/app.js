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
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
* @description creates navigation unordered list items
* @param {NodeList} sections - the sections to create navigation items for
* @returns {DocumentFragment} fragment - a document fragment containing the list of nav items
*/
function createNav(sections) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < sections.length; i++) {
        const li = document.createElement('li');
        li.classList.add('menu__link');
        li.textContent = sections[i].dataset.nav;
        li.setAttribute('id', i + 1);

        li.addEventListener('click', scrollToSection);

        fragment.appendChild(li);
    }

    return fragment;
}

/**
* @description toggles the active class of a nav item when it's section is both in and out of focus
* @param {string} dataNav - the id of the section that's currently in view
* @param {boolean} set - whether the active class should  be set or not
*/
function setNavActiveClass(dataNav, set) {
    const navId = dataNav.split(' ').pop();
    const nav = document.getElementById(navId);

    if (set) {
        nav.classList.add('menu__active');
    } else {
        nav.classList.remove('menu__active');
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/**
* @description appends build nav items to the dom
* @param {Event} event - DOMContentLoaded event
*/
function buildNav() {
    navbar.appendChild(createNav(sections));
}

// Add class 'active' to section when near top of viewport
/**
* @description sets a section's class to active if it's in view and also sets it's corresponding nav item to active
* @param {Event} event - scroll event
*/
function addActive(event) {
    event.preventDefault();

    sections.forEach(function (section) {
        const top = section.getBoundingClientRect().top;

        if (top >= -5 && top < 150) {
            section.classList.add('active');
            setNavActiveClass(section.dataset.nav, true);
        } else {
            section.classList.remove('active');
            setNavActiveClass(section.dataset.nav, false);
        }
    });
}

// Scroll to anchor ID using scrollTO event
/**
* @description scrolls a section into view when it's corresponding nav item is clicked
* @param {Event} event - click event
*/
function scrollToSection(event) {
    event.preventDefault();

    const navId = event.target.id;

    const top = document.querySelector(`#section` + navId).getBoundingClientRect().top;
    window.scrollBy({
        top,
        behavior: "smooth",
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', addActive);
