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
function createNav(sections) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < sections.length; i++) {
        const li = document.createElement('li');
        li.classList.add('menu__link');
        li.textContent = sections[i].dataset.nav;
        li.setAttribute('id', i + 1);

        fragment.appendChild(li);
    }

    return fragment;
}

function setNavActive(dataNav, set) {
    const navId = dataNav.split(' ').pop();
    const nav = document.getElementById(navId);

    if (set) {
        nav.classList.add('menu__active');
    } else {
        nav.classList.remove('menu__active');
    }
}

function addActive(section) {
    const top = section.getBoundingClientRect().top;

    if (top >= 0 && top < 150) {
        section.classList.add('active');
        setNavActive(section.dataset.nav, true);
    } else {
        section.classList.remove('active');
        setNavActive(section.dataset.nav, false);
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navbar.appendChild(createNav(sections));

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function (event) {
    event.preventDefault();

    sections.forEach(addActive);
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


