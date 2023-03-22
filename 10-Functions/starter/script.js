'use strict';
// La valeur par défaut peut contenir n'importe quelle operand, même une expression mathématique (*, /, +, -)
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // Valeur par défaut !
//   //Facon ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000); // Nice trick pour mettre un paramètre en valeur par défaut

// const flight = 'LH234';
// const hadel = {
//   name: 'Hadel Ladghem',
//   passport: 2154561254,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2154561254) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, hadel);
// console.log(flight);
// console.log(hadel);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000000);
// };

// newPassport(hadel);
// checkIn(flight, hadel);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const slicer = function (str) {
//   return str.slice(5, 10);
// };

// const phpLover = function (str) {
//   return str.replaceAll('JavaScript', 'PHP');
// };

// //Higher-Order function (il prend une autre fonction comme paramètre ou en return)
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); // Les fonctions peuvent aussi avoir des méthodes ! Celle-ci permet d'avoir comme
// }; // output le nom de la fonction soit = upperFistWord

// transformer('JavaScript is the best!', upperFirstWord); // Cela transforme la string en utilisant la fonction upperFirstWord plus haut

// transformer('JavaScript is the best!', oneWord);
// transformer('JavaScript is the best!', slicer);
// transformer('JavaScript is the best!', phpLover);

// // On utilise les callbacks tout le temps
// const high5 = function () {
//   console.log('Hello');
// };

// document.body.addEventListener('click', high5);

// ['Hadel', 'Adolf', 'Goebbels'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Hadel');
// greeterHey('Adolf');

// // Arrow Function

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Salut', 'Hadel');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}

  //Nouvelle syntaxe :
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${this.flightNum}` });
  },
};

lufthansa.book(239, 'Hadel Ladghem');
lufthansa.book(239, 'Mike Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Il y a trois méthodes de fonctions qui permettent de pointer le THIS vers un objet en particulier.
// apply / bind / call

// book(23, 'Sarah Saldmann '); Ca  ne marche pas !

book.call(eurowings, 23, 'Sarah Saldmann'); // Le premier argument de la fonction call permet de pointer le THIS, le reste des
// arguments sont les argument de la fonction original ici : book()

console.log(eurowings);

// CALL METHOD
book.call(lufthansa, 239, 'Elisabeth Levy');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Big Adolf');
console.log(swiss);

// APPLY METHOD
// Cette méthode ne prend comme argument que des tableaux. Néanmoins cette méthode n'est plus utilisée
const flightData = [835, 'Lil Adolf'];
book.apply(swiss, flightData);

// Avec CALL + speard operator fait la même chose qu'avec APPLY
book.call(swiss, ...flightData);

// BIND METHOD

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // On peut définir des paramètres avec BIND
bookEW23('Lil Himmler');
bookEW23('Martin Eden');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
