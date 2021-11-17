// function Animal (name, age) {
//     this.name = name;
//     this.age = age;
// };

// Animal.prototype.eat = function (food) {
//     return `${this.name} eats ${food}`;
// };

// Animal.prototype.sleep = function () {
//     return `${this.name} sleeps`;
// };

// const dog = new Animal (`Bobik`, 23);

// console.log (dog.sleep ());
// console.log (dog.eat (`chappi`));

// function Human (name, age, job) {
//     Animal.call (this, name ,age);
//     this.job = job;
// };

// Human.prototype = Object.create(Animal.prototype);
// Human.prototype.constructor = Human;

// Human.prototype.learn = function (what) {
//     return `${this.name} learns ${what}`;
// };

// Human.prototype.drink = function (what) {
//     return `${this.name} drinks ${what} every day`;
// };

// Human.prototype.ageN = function () {
//     return `${this.name} is ${this.age}`;
// };

// const human1 = new Human (`John`, 31, `teacher`);

// console.log (human1.learn (`JS`));
// console.log (human1.ageN ());
// console.log (human1.sleep ());

// const human2 = new Human (`Valera`, 23, `barman`);

// console.log (human2.learn (`JAVA`));
// console.log (human2.drink (`water`));

// human3 = new Human (`Svetlana`, 31, `chemical`);

// console.log (human3.ageN ());

// console.log (human2.drink(`vodka`));

// console.log (human1);

/////////////////////////////////////////////////////////////////Через apply

// function Programmer () {
//     Human.apply (this, arguments);
//     this.isProgrammer = true;
// };

///////////////////////////////////////////////////////////////Через apply 2

// function Programmer (name, age, job) {
//     Human.apply (this, [name, age, job]);
//     this.isProgrammer = true;
// };

//////////////////////////////////////////////////////////////////Через call

// function Programmer (name, age, job, isProgrammer) {
//     Human.call(this,name,age,job);
//     this.isProgrammer = true;
// };

// Programmer.prototype = Object.create(Human.prototype);
// Programmer.prototype.constructor = Programmer;

// const programmer1 = new Programmer (`Peter`, 33, `programmer`);

// Programmer.prototype.code = function () {
//     return `${this.name} codes JS in his ${this.age} years old. He is programmer? It's ${this.isProgrammer}!`;
// };

// const programmer2 = new Programmer (`Henry`, 23, `programmer`);

// console.log (programmer1.code ());
// console.log (programmer2.code ());

// console.log (programmer1);

/////////////////////////////////////////////////////////////////////////////

// class Animal {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     eat (a) {
//         return `${this.name} eats ${a}!`
//     };
// };

// const animal1 = new Animal (`Tusik`, 11);
// console.log (animal1.eat (`plov`));

// class Human extends Animal {
//     constructor (job, age, name) {
//         super(name, age)
//         // аналог
//         // Animal.call(this, name, age)
//         this.job = job;
//     };
//     learn (technology) {
//         return `${this.name} learns ${technology}!`;
//     };
// };

// const h1 = new Human (`programmer`,23,`John`);
// console.log (h1.learn (`JS`));
// console.log (h1.eat (`buter`));



/////////////////////////////////////////////////////////////////////////////

// const arr = [3,4,5,6,7,8];

// const arr2 = arr.map ((item) => {
//     return item**2
//     }
// );

// console.log (arr2);

//////////////////////////////////////////////////////////////////////////////