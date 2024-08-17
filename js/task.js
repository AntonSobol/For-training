console.log('Anton Sobolevskyi');
console.log('+--------------------------------------------------------------+');

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Ultracheese', makePizza));

console.log('+--------------------------------------------------------------+');

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest('Mango', function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

console.log('+--------------------------------------------------------------+');

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`); // 1 Pizza Royal Grand is being prepared, please wait...
}); // 2 Delivering pizza Royal Grand

makePizza('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

console.log('+--------------------------------------------------------------+');

array.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});

console.log('+--------------------------------------------------------------+');

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Елемент на індексі ${index}: ${number}`);
});

console.log('+--------------------------------------------------------------+');
console.log('+--------------------------------------------------------------+');
console.log('+--------------------------------------------------------------+');
