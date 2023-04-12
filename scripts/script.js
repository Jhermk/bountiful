// Hide banner
function hideBanner() {
    document.getElementById("banner").style.display = "none";
  }
// Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger-menu');
const links = document.querySelector('#links');




hamburgerMenu.addEventListener('click', () => {
    links.classList.toggle('open');
});



//current year in JavaScript
let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear);
document.getElementById("year").innerHTML = new Date().getFullYear();


// last modified hours scripts
let lastModified = document.lastModified;
document.getElementById("currentdate2").textContent = lastModified;

// diplay Current date

const dateElement = document.getElementById('date');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
dateElement.textContent = formattedDate;
