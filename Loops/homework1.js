// 1. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let n = +prompt (`enter a number`);
// let i = -1;
// while (n !== i) {
//     ++i;
//     console.log (i)
// }


// 2. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// let n = 10;

// while (n < 99) {
//     n++;
//     if (n % 4 === 0 && n % 6 !== 0) {
//         console.log (n);
//     }
    
// }

// 3. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let numbersAmount = +prompt('how many nums do you wanna enter ?');

// let zeros = 0;
// let biggerThanZero = 0;
// let lessThanZero = 0;

// while ( numbersAmount > 0 ) {
//     numbersAmount--;

//     const userNum = +prompt('enter a num');

//     if (userNum > 0) {
//         biggerThanZero++;
//     } else if ( userNum < 0) {
//         lessThanZero++;
//     } else {
//         zeros++
//     }
// }

// console.log(`
//     amount of zeros: ${zeros} 
//     amount bigger than zeros: ${biggerThanZero}
//     amount lesser than zeros: ${lessThanZero}
// `);