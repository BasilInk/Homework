// Задача 1.

// Пользователь вводит 2 числа, вывести в консоль большее из них

// Задача 1. Решение

// let num1 = prompt ('Введите первое число!');
// let num2 = prompt ('Введите второе число!');

// if (num1 > num2) {
//     console.log ("Первое число больше");
// } else if (num1 === null || num2 === null) {
//     console.log ("Вы ничего не ввели");
// } else if (num1 === num2) {
//     console.log ("Числа равны");
// } else {
//     console.log ("Второе число больше")
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 2.

// Пользователь вводит 3 числа, первые два это числа которые он хочет перемножить
// третье число, это результат умножения по мнению пользователя
// выяснить правильно ли ответил пользователь и вывести в консоль ОК если правильно
// NOT OK {rightAnswer} если неправильно
// const num1 = +prompt('enter num1');
// const num2 = +prompt('enter num2');
// const userResult = +prompt('enter result');

// Задача 2. Решение

// const rightAnswer = num1 * num2;

// if (userResult === rightAnswer) {
//     console.log('OK');
// } else {
//     console.log(`NOT OK ${rightAnswer}`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 3.

// Пользователь вводит номер дня недели
// вывести название этого дня в консоль
// если пользователь ввел некорректные данные то вывести 'incorrect data'
// switch(x){
//     case y:
//         dosmth();
//     case z:
//         dosmth2();
//     case w: 
//         dosmth3();
//     default:
//         default();
// }

// Задача 3. Решение

// let day = +prompt (`Введите  номер дня недели`);
// switch (day) {
//     case 1: console.log(`Понедельник`);
//     break;
//     case 2: console.log(`Вторник`);
//     break;
//     case 3: console.log(`Среда`);
//     break;
//     case 4: console.log(`Четверг`);
//     break;
//     case 5: console.log(`Пятница`);
//     break;
//     case 6: console.log(`Суббота`);
//     break;
//     case 7: console.log(`Воскресенье`);
//     break;
//     default: console.log('incorrect data')
// }

// Задача 3. Пример решения через тернарный оператор

// Переписать в тернарный оператор
// x ? y : z

// let day = +prompt (`Введите  номер дня недели`);

// console.log(day===1 ? `Понедельник` : day===2 ? `Вторник` : `incorrect`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////