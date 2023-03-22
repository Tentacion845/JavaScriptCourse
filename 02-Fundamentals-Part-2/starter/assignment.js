"use strict";
// //Exercice 1
// function describeCountry(country, population, capitalCity) {
//   return `La ${country} à ${population} habitants et la capital est ${capitalCity}.`;
// }

// const france = describeCountry("France", 60, "Paris");
// const angleterre = describeCountry("Angleterre", 70, "Londres");
// const allemagne = describeCountry("Allemagne", 80, "Berlin");

// console.log(france, angleterre, allemagne);

// //Exercice 2
// //Forme Declaration
// function percentageOfWorld(population) {
//   return (population / 7900) * 100;
// }
// //Forme Expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const percFrance = percentageOfWorld(60);
// const percAllemange = percentageOfWorld(80);
// const percEspagne = percentageOfWorld(40);

// console.log(percAllemange, percFrance, percEspagne);

// Forme Fleche

// const percentageOfWorld3 = (population) => {
//   return (population / 7900) * 100;
// };
// //Exercice 3 Functions calling other functions

// function describePopulation(country, population) {
//   return `Le/La ${country} à ${population} habitants, ce qui représente ${percJapan}% de la population mondiale.`;
// }

// const japan = describePopulation("Japon", 120);
// const china = describePopulation("China", 1140);
// const korea = describePopulation("Korea", 45);

// const percJapan = percentageOfWorld3(120);
// const percChina = percentageOfWorld3(1140);
// const percKorea = percentageOfWorld3(45);

// console.log(japan);

//Correction

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld(population);
//   const description = `Le ${country} à ${population} millions d'habitants, ce qui représente  ${percentage} du monde.`;
//   console.log(description);
// };

// describePopulation("France", 65);
// describePopulation("Algérie", 32);
// describePopulation("Maroc", 16);

// function percentageOfWorld(population) {
//   return (population / 7900) * 100;
// }
