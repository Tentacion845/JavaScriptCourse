'use strict';

const jourSemaine = ['mond', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [jourSemaine[3]]: {
    open: 12,
    close: 22,
  },
  [jourSemaine[4]]: {
    open: 11,
    close: 23,
  },
  [jourSemaine[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, // Ancienne méthode avant ES6

  //ES6 Enhanced Object Literal

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  ) {
    console.log(
      `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
    restaurant.orderDelivery({
      time: '22:30',
      address: 'Via del Sole, 21',
      mainIndex: 2,
      starterIndex: 2,
    });
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Voici vos délicieuses pates avec ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default Values

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// // Méthode sans destrucring

// /*
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);
// */

// // Méthode avec destructuring

// // [main, secondary] = [secondary, main];

// // console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// // Valeur par défaut :

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // Vidéo 104 : Destructuring Objects

// Vidéo 105 : The Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const superMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(superMenu);

// Les Itérables, sont des tableaux (arrays), maps, sets. Mais PAS des objets (objects)

const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);

// Real World Exemples :
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Lets make pasta! Ingredient 2?'),
//   prompt('Lets make pasta! Ingredient 3'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects :

// const newRestaurent = { foundedIn: 1991, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurent);

// const restaurentCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Vidéo 106 : Rest Pattern and Parameters

// Destructuring

//Spread, because on RIGHT side of =
// const arr = [4, 3, ...[3, 4]];

// REST, because on LEFT side of =
const [ab, cd, ...others] = [1, 2, 3, 4, 5];
console.log(ab, cd, others);

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, Risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

//Vidéo 107 Short Circuiting (And et Or Operator)
// ------------------- OR ---------------------
//Use ANY data type, return ANY data type, short-circuiting
/*
console.log(1 || 'Adel');
console.log('' || 'Adel');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// ----------------------- AND -------------------

console.log(0 && 'Adel');

console.log(1 && 'Adel');

console.log('Hello' && 23 && null && 'Adel');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

// Vidéo 108 The Nullish Coalescing Operator
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish = null et undefined (Ce n'est pas 0 ou '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

// Coding Challenge #1
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

// MARVELOUS
/*
const [players1, players2] = game.players;
console.log(players1, players2);

const [goalKeeper, ...fieldPlayers] = players1;
console.log(goalKeeper, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutniho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

const printGoal = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Adel');
printGoal('Davies', 'Muller');

printGoal(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');

*/

// Vidéo 110 Looping Array

const nouveauMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(nouveauMenu);
for (const item of nouveauMenu) console.log(item);

for (const [i, el] of nouveauMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...nouveauMenu.entries()]);

// Vidéo 111 Enhanced Object Literal

// Vidéo 112 Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// Avec Optional Chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Exemple

for (const jours of jourSemaine) {
  const open = restaurant.openingHours[jours]?.open ?? 'closed';
  console.log(`On ${jours}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays

const user = [
  {
    name: 'Adel',
    email: 'adel@gmail.com',
  },
];
console.log(user[0]?.name ?? 'User array empty');
//Sans Optional Chaining
if (user.length > 0) console.log(user[0].name);
else console.log('User array empty');

// Vidéo 113 Looping Object, Object Keys, Values and Entries :

const propriété = Object.keys(openingHours);
console.log(propriété);

let openStr = `We are open on ${propriété.length} days:`;

for (const jour of propriété) {
  openStr += `${jour},`;
}

console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);
console.log(values);

// Entire object

const entries = Object.entries(openingHours);

// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Coding Challenge #2
/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const goal = Object.values(game.scored);

// for (const [index, element] of goal.entries()) {
//   console.log(`Goal ${index + 1} : ${element}`);
// }

// const stats = Object.keys(game.odds);
// console.log(stats);

// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;

// // team1 < team2 && console.log('Team 1 is more likely to win.');
// // team1 > team2 && console.log('Team 2 is more likely to win.');

// // console.log(team1, draw, team2);
// stats.forEach(teamKey => {
//   console.log(
//     `${game[teamKey] ? `Equipe :[${game[teamKey]}]` : 'Cote si nul :'} Cote: [${
//       game.odds[teamKey]
//     }]`
//   );
// });

// Correction
//1.
/*
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

// Vidéo 115 Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Exemple

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Vidéo 116 Maps Fundamental :

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));

rest.delete('categories');

rest.set(document.querySelector('h1', 'Heading'));

console.log(rest.size);
// rest.clear();
console.log(rest);

const exemple = [1, 2];
rest.set(exemple, 'Test');
console.log(rest.get(exemple));

// Vidéo 117 Maps Iterations :

const question = new Map([
  ['Question', 'What is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct !'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz App2

// // const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
//   // if (answer === 3) console.log(question.get(true));
//   // else console.log(question.get(false));
// }

// // Correction
// console.log(question.get(question.get('correct') === answer));

// //Convert map to array

// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Vidéo 118 Summary : Wich Data Structure to use ? :

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
const times = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${times / gameEvents.size} minutes`
);
//EXCELLENT
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half] ${min}: ${event}`);
}

//Vidéo 120 Working with Strings Part I :

const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
const airline = 'Tap Air Portugal';
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('18E');
checkMiddleSeat('23C');

// Vidéo 121 Working with String part II :

console.log(airline.toLowerCase());
console.log('adel'.toUpperCase());

//Fix capitalization in name

// const passenger = 'jOnAs'; // Jonas

const namePassenger = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);

  console.log(passengerCorrect);
};
namePassenger('aDel');

// Check emails

const email = 'hello@adel.io';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const loginEmail = '  Hello@Adel.io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

const funName = 'Amadou le gogo, le plus gros des gogo ce Amadou en sah !';

const superFunName = funName.replace(/Amoudou/g, 'Adel');
console.log(superFunName);
console.log(funName.replace(/Amadou/g, 'Adel'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.startsWith('ZOOZ'));

console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice exercice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard !');
  }
};
checkBaggage('I have a laptop, some garbage and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('A gun ...');

// Vidéo 122 Working with Strings part III :

console.log('a+b+very+nice+string'.split('+'));
console.log('Adel Ladghem'.split(' '));

const [firstName, lastName] = 'Adel Ladghem'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // Deux méthodes pour le meme résultat
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // Deuxième façon de le faire!
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('Mokthar ben Mokthar ibn al Terroristo');
capitalizeName('bilel hamon');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Adel'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4448456512));
console.log(maskCreditCard('54651548978456123485'));

// Repeat

const message3 = 'Adel est un gogo, je répète Adel est un gogo. ';
console.log(message3.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🍟'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
