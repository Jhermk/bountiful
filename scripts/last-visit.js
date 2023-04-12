// Last visited date
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits) {
  document.querySelector("#visits").textContent = numVisits;
} else {
  document.querySelector("#visits").textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// last visited in localStorage and display it in days
let lastVisited = Number(window.localStorage.getItem("lastVisited"));
let lastVisitedDisplay = document.querySelector("#lastVisited");

if (lastVisited) {
  let days = Math.round((Date.now() - lastVisited) / (1000 * 60 * 60 * 24));
  lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
  lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}

// update last visited time
window.localStorage.setItem("lastVisited", Date.now());


