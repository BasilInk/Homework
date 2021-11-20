// 1. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 1.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 1.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 1.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 1.5 Отсортируйте получившийся массив по алфавиту

// Задача 1. Решение

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let people3 = [];

// let userName = prompt (`Enter your name`);

// people1.some (item => {
//     if (item == userName) {
//     return people2.push (userName)
// } else {return people2};
// });

// console.log (people2);



///////////////////////////////////////////////////////////////////////////////////

// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// Задача 2. Решение

// const arr1 = [3, 5, 76, 6, 34, 55, 6, 89, 88, 10, 100];

// let a = arr1.filter (item => {
//     if (item > 9 && item < 100 && item % 2 == 0) {
//     return item
//     };
// }
// );

// console.log (a);

///////////////////////////////////////////////////////////////////////////////////

// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// Задача 3. Решение

// const arr1 = [`John`, `Masha`, `Semen`, `Petya`];

// let a = arr1.some (item => item == `Semen`);

// let b = arr1.some (item => item == `Vlad`);

// console.log (a);
// console.log (b);

// Задача 3. Решение через function

// const arr1 = [`John`, `Masha`, `Semen`, `Petya`];

// let a = arr1.some (function (item) {
//     if (item == `Semen`) {
//         return true
//     };
// });

// let b = arr1.some (function (item) {
//     if (item == `Valera`) {
//         return true
//     };
// });

// console.log (a);
// console.log (b);

///////////////////////////////////////////////////////////////////////////////////

// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// Задача 4. Решение

// const arr1 = [3,4,5,6,7,8,9];

// arr1.unshift (0);

// let a = arr1.reduce (function (accum, item) {
//     if (item % 2 == 0) {
//         accum = accum + item;
//     };
//     return accum
// });

// console.log (a);

// console.log (arr1);

// Как сделать аккумулятор без изменения массива

///////////////////////////////////////////////////////////////////////////////////

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// Задача 5. Решение

// const array1 = [];

// for (i = 0; array1.length < 10; i++) {
//     let number = prompt (`Enter a number`);
//     array1.push (number);
// };

// console.log (array1.every (item => {
//     return item == Number;
//     }
// ));

// console.log (array1);

// Как проверить на number