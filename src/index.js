console.log("Hello from src/index.js!");

const list = document.querySelector("#players"); // CSS id selector

const listID = document.getElementById("players");

debugger

console.log(list);
console.log(listID);

let text = document.querySelector("p");
console.log(text);
text = document.querySelector("body .red");
console.log(text);

list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

const fifaWinners = document.getElementById("fifa-wins");
let winners = fifaWinners.querySelectorAll("li");

console.log(winners);

winners.forEach((winner) => {
  console.log(winner.innerText);
});

fifaWinners.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");

const emailInput = document.getElementById("email");
// Read
console.log(emailInput.value);

// Write
emailInput.value = "john@gmail.com";

console.log(emailInput.value);


const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML

// dataset
const boris = document.getElementById('user');
console.log("Boris dataset",boris.dataset);
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);


// Event Listeners
const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
  // event.currentTarget.classList.toggle("img-circle");
});

document.querySelectorAll("img.avatar").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
