const currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const menuToggle = document.getElementById('menu_toggle');
const navMenu = document.querySelector('.nav_menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        
        // Toggle between hamburger and X symbol
        if (navMenu.classList.contains('show')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });
}

