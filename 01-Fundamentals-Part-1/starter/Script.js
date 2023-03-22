// FONDAMENTAL 1
// vidéo 11
/*
let js = "amazing";
console.log(40 + 8 + 56 + 10 + 56);

let firstName = "David Ben Gourion";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Animateur";
let myCurrentJob = "Développeur";

console.log(myFirstJob);
console.log(myCurrentJob);
*/

//  vidéo 12

/*true;
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof "Hadel");
console.log(typeof 98);
javaScriptIsFun = "Yes";
console.log(typeof javaScriptIsFun);

let année;
console.log(année);
console.log(typeof année);

année = 2000;
console.log(année);
*/

// vidéo 13

// vidéo 14
// const now = 2021;
// const ageHadel = now - 2000;
// const ageRadya = now - 2005;
// console.log(ageHadel, ageRadya);

// console.log(ageHadel * 2, ageRadya / 2);
// const firstName = "Hadel";
// const lastName = "Ladghem";

// console.log(firstName + " " + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x /= 2;
// console.log(x);

// //Comparison operators, produit des valeurs boolénnes.

// console.log(ageHadel > ageRadya); // >, <, >=, <=
// console.log(ageRadya <= 18); // Radya est inférieur ou égal à 18.
// console.log(ageHadel >= 18); // Hadel est supérieur ou égal à 18.

// vidéo 15

// const now = 2021;
// const ageHadel = now - 2000;
// const ageRadya = now - 2005;

// const averageAge = (ageHadel + ageRadya) / 2;
// console.log(averageAge);

// vidéo 16 coding challenge.

// const marksMass1 = 78;
// const marksHeight1 = 1.69;

// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// const marksIbm1 = marksMass1 / marksHeight1 ** 2;
// const johnIbm1 = johnMass1 / johnHeight1 ** 2;

// console.log(marksIbm1, johnIbm1);
// console.log(marksIbm1 > johnIbm1);

// const marksMass2 = 95;
// const marksHeight2 = 1.88;

// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// const marksIbm2 = marksMass2 / marksHeight2 ** 2;
// const johnIbm2 = johnMass2 / johnHeight2 ** 2;

// console.log(marksIbm2, johnIbm2);
// console.log(marksIbm2 > johnIbm2);

// vidéo 17 Strings and Template Literals

// const firstName = "Hadel";
// const job = "étudiant";
// const birthYear = 2000;
// const currentYear = 2021;

// const hadel = `Je m'appelle ${firstName}, j'ai ${
//   currentYear - birthYear
// } ans et je suis un ${job}.`;

// console.log(hadel);

// console.log(`String
// sur plusieurs
// lignes.`);

// vidéo 18 IF, ELSE

// const age = 5;

// if (age >= 18) {
//   console.log("Hadel peut obtenir son permis de conduire.");
// } else {
//   const yearLeft = 18 - age;
//   console.log(
//     `Il reste ${yearLeft} ans avant de pouvoir passer votre permis de conduire.`
//   );
// }

// const birthYear = 2000;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// vidéo 19 coding challenge #2

// const marksMass = 78;
// const marksHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// const marksIbm = marksMass / marksHeight ** 2;
// const johnIbm = johnMass / johnHeight ** 2;

// console.log(marksIbm, johnIbm);

// if (marksIbm > johnIbm) {
//   console.log(
//     `L'IMC de Mark qui est égal à ${marksIbm} est supérieur à celui de John ; ${johnIbm}`
//   );
// } else {
//   console.log(
//     `L'IMC de John qui est égal à ${johnIbm} est supérieur à celui de Mark ; ${marksIbm}`
//   );
// }

// vidéo 20 Conversion and Coer cion
//type conversion
// const inputYear = "2000";

// console.log(Number(inputYear ) + 18);
// console.log(typeof String(20 00));
// // type coercion
// console.log("J'ai " + 21 + " ans");
// // hormis l'addition qui est un opérateur servant aussi les strings, JavaScript convertis automatiquements les chiffres contenue dans les strings en nombres concernant les divisions, multiplications, soustraction etc.

// console.log("52" + "21" + 7);
// console.log("45" - "78" - 42);
// console.log("45" * "5");

// vidéo 21 Truthy and Falsy Values

// Il y a 5 valeurs fausses : 0, '', undefined, null, NaN
// Ces cinq valeurs seront fausses = false si on essaie de les convertir en booléen
// L'inverse sont des valeurs vrais il seront converti en "vrai = true" lors d'une conversion booléenne.
// Cela concerne donc toutes les nombres qui ne sont pas "0" et toutes les strings qui ne sont pas vides.

// console.log(Boolean(0)); // Valeur fausse
// console.log(Boolean("")); // Valeur fausse
// console.log(Boolean("Hadel")); // Valeur vrai
// console.log(Boolean(1)); // Valeur vrai
//JavaScript fait automatiquement la conversion en booléen selon ces critères.

//vidéo 22 : Equality Operators

// const age = 18;
// if (age === 18) console.log("Bravo vous etes majeur !"); //strict
// const age = "18";
// if (age == 18) console.log("Bravo vous etes majeur !"); //loose

// const favouriteNumber = Number(prompt("Quelle votre chiffre préféré ?"));

// if (favouriteNumber === 21) {
//   console.log("Bien ouej 21 est un super chiffre 2121!");
// } else if (favouriteNumber === 18) {
//   console.log("18 est aussi un super chiffre !");
// } else {
//   console.log("Tu as aucun chiffre cool sale merde !");
// }

// vidéo 23 : Boolean logic

// vidéo 24 : Logical Operators

// const hasDriverLicence = true;
// const hasGoodVision = true;

// console.log(hasDriverLicence && hasGoodVision); // AND
// console.log(hasDriverLicence || hasGoodVision); // OR
// console.log(!hasDriverLicence); // NOT

// const shouldDrive = hasDriverLicence && hasGoodVision;
// if (shouldDrive) {
//   console.log("Hadel peut conduire");
// } else {
//   console.log("Quelqu'un d'autre peut conduire");
// }

// const isTired = false;
// console.log(hasDriverLicence && hasGoodVision && !isTired); // OR

// coding challenge #3

// const dolphinScore = (97 + 112 + 101) / 3;
// const koalaScore = (109 + 95 + 123) / 3;

// if (dolphinScore > koalaScore && dolphinScore >= 100) {
//   console.log("L'équipe dauphin gagne");
// } else if (
//   koalaScore > dolphinScore &&
//   koalaScore >= 100 &&
//   dolphinScore >= 100
// ) {
//   console.log("L'équipe koala gagne");
// } else if (
//   dolphinScore === koalaScore &&
//   dolphinScore >= 100 &&
//   koalaScore >= 100
// ) {
//   console.log("Egalité");
// }

// vidéo 26 : The Switch Statement

// const day = "lundi";

// switch (day) {
//   case "lundi":
//     console.log("C'est lundi aujourd'hui");
//     break;
//   case "mardi":
//     console.log("C'est mardi aujourd'hui");
//     break;
//   case "mercredi":
//     console.log("C'est mercredi aujourd'hui");
//     break;
//   case "jeudi":
//     // si on enlève le break le code qui suit est exécuté.
//     console.log("C'est jeudi aujourd'hui");
//   case "vendredi":
//     console.log("C'est vendredi aujourd'hui");
//     break;
//   case "samedi":
//     console.log("C'est samedi aujourd'hui");
//     break;
//   case "dimanche":
//     console.log("C'est dimanche aujourd'hui");
//     break;
//   default:
//     console.log("Ce n'est pas un jour !");
// }

// if (day === "lundi") {
//   console.log("C'est lundi aujourd'hui");
// } else if (day === "mardi") {
//   console.log("C'est mardi aujourd'hui");
// } else if (day === "jeudi" || day === "vendredi") {
//   console.log("C'est jeudi aujourd'hui");
//   console.log("C'est vendredi aujourd'hui");
// } else if (day === " samedi") {
//   console.log("C'est samedi aujourd'hui");
// } else if (day === "dimanche");{
//   console.log("C'est dimanche aujourd'hui");
// }

//vidéo 28: The Conditional (Ternary) Operator
// const age = 21;
// age >= 18 ? console.log ("Je peut boire du vin"):
// console.log ("Je peut boire de l'eau");

// const drink = age >= 18 ? "vin": "eau";
// console.log (drink);

// console.log (`Je peut boire ${age >= 18 ? "du vin": "de l'eau"}`);

//coding challenge #4

// const bill = 275;
// const tip15 = (bill * 15) / 100;
// const tip20 = (bill * 20) / 100;
// const finalValue15 = bill + tip15;
// const finalValue20 = bill + tip20;

// const mealPrice =
//   bill >= 50 <= 300
//     ? `Votre bill vaut ${bill} votre tip vaut ${tip15} et votre cout final vaut ${finalValue15}`
//     : `Votre bill vaut ${bill} votre tip vaut ${tip20} votre prix final vaut ${finalValue20}`;
// console.log(mealPrice);

// correction

// const bill = 56;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }`
// );

// fin de la section 1 du tutoriel !