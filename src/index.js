console.log("Hello from src/index.js!");

const list = document.querySelector("#players"); // CSS id selector

const listID = document.getElementById("players");

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
