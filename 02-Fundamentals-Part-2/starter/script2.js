"use strict";
//vidéo 32 Activating Strict Mode
// let hadel = false;
// const ladghem = true;

// if (ladghem) adel = true;
// if (hadel) console.log("Je suis Hadel");

//vidéo 33 FUNCTIONS

// function logger() {
//   console.log("Je m'appelle Adel");
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function foodProcessor(apple, watermelon) {
//   console.log(apple, watermelon);
//   const juice = `Jus avec ${apple} pommes et ${watermelon} pastèques`;
//   return juice;
// }

// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

// //vidéo 34 Fuction Declarations vs Expressions

//Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(2000);

// //Function Expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(2000);

// console.log(age1, age2);

// vidéo 35 Arrow Function
//Arrow Function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} sera en retraite dans ${retirement} ans`;
// };

// console.log(yearUntilRetirement(2000, "Hadel"));
// console.log(yearUntilRetirement(2005, "Radya"));

// vidéo 36 Function calling other functions
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apple, watermelon) {
//   const applePieces = cutPieces(apple);
//   const watermelonPieces = cutPieces(watermelon);

//   const juice = `Jus avec ${applePieces} morceaux de pommes et ${watermelonPieces} morceaux de pastèques`;
//   return juice;
// };
// console.log(fruitProcessor(8, 12));

//vidéo 37 Reviewing Function
// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };
// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} sera en retraite dans ${retirement} ans.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} est déjà en retraite.`);
//     return -1;
//   }

//   //   return `${firstName} sera en retraite dans ${retirement} ans`;
// };
// console.log(yearUntilRetirement(2000, "Hadel"));
// console.log(yearUntilRetirement(1950, "Judas"));

// Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avrDolphins, avrKoalas) {
//   if (avrDolphins >= 2 * avrKoalas) {
//     console.log(`Les Dauphins gagnent de ${avrDolphins} contre ${avrKoalas}.`);
//   } else if (avrKoalas >= 2 * avrDolphins) {
//     console.log(`Les Koalas gagnent de ${avrKoalas} contre ${avrDolphins}.`);
//   } else {
//     console.log("Aucune équipe ne gagnent...");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

//vidéo 39 Introduction to Arrays
// const friend1 = "Hadel";
// const friend2 = "Judas";
// const friend3 = "David";

// const friends = ["Hadel", "Judas", "David"];
// console.log(friends);
// console.log(friends[0]); // dans une array le premier element commence à 0.
// console.log(friends[2]);
// console.log(friends.length); //donne le nombre d'élémenents contenu dans une array, attention de bien mettre le "."
// // const year = new Array(1991, 1981, 2000, 2006); // new est un keyword indispensable et Array est une fonction.
// console.log(friends[friends.length - 1]); // le -1 permet d'avoir le dernier element de l'array. A l'intérieur des crochets on peut mettre n'importe quelle expressions.
// //On peut faire muter une liste exemple:
// friends[2] = "Simeon";
// console.log(friends);
// const firstName = "Hadel";
// const hadel = [firstName, "Ladghem", 2021 - 2000, "étudiant", friends];
// console.log(hadel);

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };
// const years = [1991, 1984, 2005, 2015, 2000];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), [years.length - 1]];
// console.log(ages);

//vidéo 40 Basic Array Operations (Methods)

// const friends = ["Hadel", "Judas", "David"];
// // push et unshift ajoute un élément.
// const newLength = friends.push("Simeon"); // push ajoute un élément en fin de l'array.
// friends.unshift("Shabesh"); // unshift ajoute un élément en début de l'array.
// console.log(newLength);
// // pop et shift retirent un élément de l'array.
// const popped = friends.pop(); // pop retire le dernier élément de l'array.
// console.log(popped);
// friends.shift(); // shift retire le premier élément de l'array, ta c ompris le system.
// console.log(friends);
// // indexOf permet de donner la position d'un élément dans une array.
// console.log(friends.indexOf("David"));
// //includes fonction ES6 permet de savoir si un élément est dans une array ou non (true/false)
// console.log(friends.includes("David")); //true
// console.log(friends.includes("Benyamin")); //false

// Coding Challenge #2

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];
// console.log(bills, tips, total);

//vidéo 42 Introduction to Objects

// const hadelTableau = [
//   "Hadel",
//   "Ladghem",
//   2021 - 2000,
//   "étudiant",
//   ["David", "Judas", "Simeon"],
// ];
// // voici une forme simple d'objet, bien retenir la syntaxe {} : ,
// const hadel = {
//   firstName: "Hadel",
//   lastName: "Ladghem",
//   age: 2021 - 2000,
//   job: "étudiant",
//   friends: ["David", "Judas", "Simeon"],
// };

// vidéo 43 Dot vs Bracket Notation
//Cette vidéo traite de la/les manière d'obtenir une propriété dans un objet.

// const hadel = {
//   firstName: "Hadel",
//   lastName: "Ladghem",
//   age: 2021 - 2000,
//   job: "étudiant",
//   friends: ["David", "Judas", "Simeon"],
// };

// //La méthode dot

// console.log(hadel.lastName);

// //Le meme resultat mais en utilisant des crochets + guillemets, néanmoins les crochets permettent de mettre n'importe quelle expressions.

// console.log(hadel["lastName"]);
// const nameKey = "Name";
// console.log(hadel["first" + nameKey]); //Ceci ne marcherais pas avec la méthode dot
// console.log(hadel["last" + nameKey]);

// const centreInteret = prompt(
//   "Que voulez vous savoir à propos d'Hadel, son lastName, son age, son job, ses friends."
// );

// if (hadel[centreInteret]) {
//   console.log(hadel[centreInteret]);
// } else {
//   console.log("Mauvaise requete!");
// }
// //pour ajouter une/des propriétés à un objet
// //voici la notation avec un dot
// hadel.adresse = "166 rue Lacroix";
// //voici la notation avec des crochets
// hadel["city"] = "Roubaix";
// console.log(hadel[centreInteret]);

// console.log(
//   `${hadel.firstName} à ${hadel.friends.length}amis, son meilleur amis s'appelle ${hadel.friends[0]}. `
// );
// //Bien comprendre la structure, pour rechercher une propriété et donc une valeur dans un tableau d'objet utiliser le point.

//vidéo 44 Object Methods

// const hadel = {
//   firstName: "Hadel",
//   lastName: "Ladghem",
//   birthYear: 2000,
//   job: "étudiant",
//   friends: ["David", "Judas", "Simeon"],
//   hasDriverLicence: true,
//   //on peut introduire une fonction, puisqu'un objet peut incorporer n'importe quelle expression  qui produit une valeur.
//   //   calcAge: function (birthYear) {
//   //     return 2021 - birthYear;
//   //   },
//   //   calcAge: function () {
//   //     return 2021 - this.birthYear; //Le keyword this permet de relier le parent d'objet avec sa liste de propriété.
//   //   },
//   calcAge: function () {
//     this.age = 2021 - this.birthYear; // on peut également créer de nouvelle propriété pour stocker la valeur d'une opération.
//     return this.age;
//   },
// };
// console.log(hadel.age);
// comme on peut acceder à n'importe quelle propriete d'un objet on peut acceder à la propriété fonction calcAge

// console.log(hadel.calcAge(2000));
// //version avec crochet, retenir la syntaxe
// console.log(hadel["calcAge"](2000));

// console.log(hadel.calcAge());

//Challenge

// const hadel = {
//   firstName: "Hadel",
//   lastName: "Ladghem",
//   age: 2021 - 2000,
//   job: "étudiant",
//   friends: ["David", "Judas", "Simeon"],
//   hasDriverLicence: true,
// };

// if (hadel.hasDriverLicence) {
//   console.log(
//     `${hadel.firstName} à ${hadel.age} ans il est ${hadel.job} et il à son permis.`
//   );
// } else {
//   console.log(
//     `${hadel.firstName} à ${hadel.age} ans il est ${hadel.job} et il n'a pas son permis.`
//   );
// }
// //correction

// const hadel = {
//   firstName: "Hadel",
//   lastName: "Ladghem",
//   age: 2021 - 2000,
//   job: "étudiant",
//   friends: ["David", "Judas", "Simeon"],
//   hasDriverLicence: true,
//   getSummary: function () {
//     return `${this.firstName} est ${this.job}, il a ${this.age} ans et il ${
//       this.hasDriverLicence ? "a" : "n'a pas"
//     } un permis de conduire.`;
//   },
// };
// console.log(hadel.getSummary());

//Coding Challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcIbm: function () {
//     this.imb = this.mass / (this.height * this.height);
//     return this.imb;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 123,
//   height: 1.95,
//   calcIbm: function () {
//     this.imb = this.mass / (this.height * this.height);
//     return this.imb;
//   },
// };

// mark.calcIbm();
// john.calcIbm();

// console.log(mark.imb, john.imb);
// if (mark.imb > john.imb) {
//   console.log(
//     `${mark.fullName} à un IMC de ${mark.imb} supérieur à celui de ${john.fullName} qui est de ${john.imb}.`
//   );
// } else {
//   console.log(
//     `${john.fullName} à un IMC de ${john.imb} supérieur à celui de ${mark.fullName} qui est de ${mark.imb}.`
//   );
// }

//vidéo 46 Iteration : The "for" Loop

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Répétion de curl est de ${rep}`);
//   // le code a été print 10* dans la console.
// }

//vidéo 47 Looping Arrays, Breaking and Continuing
// Cette vidéo traite de la façon de looper des tableaux d'éléments avec la boucle for

// const hadelTableau = [
//   "Hadel",
//   "Ladghem",
//   2021 - 2000,
//   "étudiant",
//   ["David", "Judas", "Simeon"],
// ];
// const types = [];

// // la boucle commence à 0 car, dans une array les éléments sont compter à partir de 0 !
// for (let i = 0; i < hadelTableau.length; i++) {
//   // lire le tableau Hadel
//   console.log(hadelTableau[i], typeof hadelTableau[i]);
//   // Rentrer les types du tableau
//   // types[i] = typeof hadelTableau[i];
//   // la méthod push place à la fin d'un tableau l'élément.
//   types.push(typeof hadelTableau[i]);
// }
// console.log(types);

// // Voici comment integrer un calcul et son résultat dans un autre tableau.
// //Bien regarder la structure du code pour comprendre le fonctionnement des loop.
// // ELEMENT A RETENIR LE PLUS IMPORTANT DE LA VIDEO BIEN RETENIR CE CODE ET SA LOGIQUE !!!
// const years = [2000, 1987, 1999, 2005];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// // L'instruction CONTINUE permet d'ajouter une condition à la loop, dans cette exemple la loop va prendre en compte uniquement les éléments du tableau qui sont des string.
// // INSTRUCTION CONTINUE

// // for (let i = 0; i < years.length; i++) {
// //   if (typeof hadelTableau[i] !== "string") continue;

// //   console.log(hadelTableau[i], typeof hadelTableau[i]);
// // }
// // INSTRUCTION BREAK AVEC NOMBRE
// // Dans cette exemple dès qu'un élément nombre est itéré dans la loop, la loop ne print plus rien dans la console.
// for (let i = 0; i < hadelTableau.length; i++) {
//   if (typeof hadelTableau[i] === "number") break;

//   console.log(hadelTableau[i], typeof hadelTableau[i]);
// }

//vidéo 48 Looping Backwards and Loops in Loops

// const hadel = [
//   "Hadel",
//   "Ladghem",
//   2021 - 2000,
//   "étudiant",
//   ["David", "Judas", "Simeon"],
// ];

// // L'objectif dans ce cours et de savoir comment incrémenter depuis la fin d'une loop.

// for (let i = hadel.length - 1; i >= 0; i--) {
//   console.log(hadel[i]);
// }

// //LOOP A L'INTERIEUR D'UNE LOOP
// const exo = ["curl", "squat", "sdt"];
// for (let exercice = 0; exercice < exo.length; exercice++) {
//   console.log(`Début de l'exercice ${exercice} ${exo[exercice]}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Répétition numéro ${rep}`);
//   }
// }

//vidéo 49 The WHILE Loop

// let rep = 1;
// while (rep <= 10) {
//   console.log(rep);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`Vous avez un ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("La boucle s'arrete ...");
// }

//Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let calcBill = 0; calcBill < bills.length; calcBill++) {
//   tips.push(
//     bills[calcBill] <= 300 && bills[calcBill] >= 50
//       ? bills[calcBill] * 0.15
//       : bills[calcBill] * 0.2
//   );
//   totals.push(bills[calcBill] + tips);
// }
// console.log(bills, tips, totals);

// CORRECTION

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

//FIN DE LA SECTION FUNDAMENTALS 2 DU TUTORIEL !
