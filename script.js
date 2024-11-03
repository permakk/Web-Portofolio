let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); // kelas active pada navbar
};


// dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const bodyElement = document.body;

// kondisi apabila dark mode enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// enable dark mode
function enableDarkMode() {
    bodyElement.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save preference to localStorage
}

// disable dark mode
function disableDarkMode() {
    bodyElement.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Save preference to localStorage
}

// dark mode clicked
darkModeToggle.addEventListener('click', function() {
    if (bodyElement.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
