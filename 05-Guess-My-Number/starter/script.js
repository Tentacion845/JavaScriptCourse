"use strict";
// vidéo 71 et 72

/*
console.log(document.querySelector(".message").textContent);
// Ici nous avons changé le textContent de la class message
document.querySelector(".message").textContent = "Bien ouej ! 🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

//Là nous avons changé la valeur de l'input sur la page web à 24, grace à la méthode valeur.
document.querySelector(".guess").value = 24;
console.log(document.querySelector(".guess").value);
*/

//vidéo 73 Handling Click Events et vidéo 74 Implementing the Game Logic et vidéo 75 Manipulating CSS Styles

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// document.querySelector(".number").textContent = secretNumber;
function checking() {
  const guess = Number(document.querySelector(".guess").value);
  // Si il n'y a pas d'input
  if (!guess) {
    // document.querySelector(".message").textContent = "Aucun nombre choisi 🛑";
    displayMessage("Aucun nombre choisi 🛑");
  }
  // Quand le joueur gagne
  else if (guess === secretNumber) {
    displayMessage("Bien ouej ! 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // Refactorisation du CODE DRY:
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber
      //     ? "Trop haut ma gueule 📈"
      //     : "Pas assez haut ma gueule 📉";
      displayMessage(
        guess > secretNumber
          ? "Trop haut ma gueule 📈"
          : "Pas assez haut ma gueule 📉"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Tu as perdu, kimouchi warui ! 💥");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
  /* CODE QUI N'EST PAS DRY
  // Si le nombre est supérieur
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Trop haut ma gueule 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Tu as perdu, kimouchi warui ! 💥";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
  // Si le nombre est inférieur
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Pas assez haut ma gueule 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Tu as perdu, kimouchi warui ! 💥";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
*/
  // Méthode de Said :

  // if (!guess)
  //   return (document.querySelector(".message").textContent =
  //     "Aucun nombre choisi 🛑");

  // switch (true) {
  //   case guess === secretNumber:
  //     return (document.querySelector(".message").textContent =
  //       "Bien ouej ! 🎉");
  //   case guess > secretNumber:
  //     return (document.querySelector(".message").textContent =
  //       "Trop haut ma gueule 📈");
  //   case guess < secretNumber:
  //     return "Pas assez haut ma gueule 📉";
  // }
}
document.querySelector(".check").addEventListener("click", checking);
document.querySelector(".guess").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checking();
  }
});

document.querySelector(".again").addEventListener("click", reset);

function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").value = "secretNumber";
}
