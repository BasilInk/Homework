// Задача 1.

// Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// Задача 1. Решение 1.

// let sum = 0;
// let n = 0;
// let midAr;
// let i;
// for ( i = 0; n !==null; ++i ){
//     n = prompt ( `Number?` );
//     if ( n !== null ){
//     n = +n
//     }
//     sum = sum + n;
// }
// i--;
// midAr = sum / i;
// alert ( midAr );

// Задача 1. Решение 2.

// let sum = 0;
// let number = 0;
// let arithmeticMean;
// let i = 0;
// while ( true ) {
// number = prompt ( `Number?` );
// if ( number !== null ) { 
// number = +number;
// sum = sum + number;
// i++;
// } else {break;}
// }
// arithmeticMean = sum/i;
// alert(arithmeticMean);

///////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 2.

// Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// Задача 2. Решение.

// let n = +prompt(`min namber`);
// let m = +prompt(`max namber`);
// let cuadr;
// for(;n<=m;n++){
// cuadr= n*n;
// console.log(cuadr);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 3.

// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// Задача 3. Решение 1.

// let currentNum;
// let previousNum;
// for (let i = 0; i < 5; i++) {
//     if (previousNum === undefined) {
//         previousNum = +prompt('enter a num');
//         continue;
//     }
//     currentNum = +prompt('enter a num bigger than previous');
//     if (currentNum > previousNum) {
//         previousNum = currentNum;
//     } else {
//         alert('ERROR');
//         break;
//     }
// }

// Задача 3. Решение 2.

// let i = 0;
// let lastNumber = 0;
// let nextNumber = 1;
// while(i<5){
// if(lastNumber>nextNumber){
// alert("ERROR");
// break;
// }
// lastNumber = +prompt(`Number?`);
// i++;
// if(i>=5){
// break;
// }
// nextNumber = +prompt(`Number?`);
// i++;
// }

///////////////////////////////////////////////////////////////////

// Задача 4.

// Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// Задача 4. Решение 1.

// let num = +prompt (`Введите число!`);
// za = `за`;
// for (let i = 0; num > i; i++) {
//     if (num === i) {
//         {break}
//     }
// alert (za .repeat (+num) + `ика`);
//     {break}
// }

// Задача 4. Решение 2.

// let number = +prompt(`how many za?`);
// let sum = "";
// for(let i =0;i<number;i++){
// sum = 'za' + sum;
// }
// alert(`${sum}ika`);

//////////////////////////////////////////////////////////////////////////

// Задача про хомяков.

// под диваном живет 100 хомячков
// пользователь не знает сколько хомячков под диваном
// напишите игру в которой пользователь вводит количество хомячков
// которое хочет достать из под дивана
// правила:
// 1. пользователь не может достать хомячков больше чем их там есть 
// (попытку засчитываем, а хомячков НЕ достаем)
// 2. необходимо считать количество попыток за которое пользователь достанет всех хомячков
// 3. игра заканчивается тогда когда пользователь достал всех хомячков
// 4. если пользователь нажал отмена (в промпте) то игра заканчивает поражением
// 5. выводить сообщения при успешном доставании хомячков, в конце игры и при отмене игры

// Задача про хомяков. Решение.

// let hamsters = 100;
// let userHamsters;

// for (let counter = 0;; counter++) {2
//     userHamsters = prompt('how many hamsters ?');
//     if (userHamsters === null) {
//         alert('you have quit the game');
//         break;       
//     }
//     userHamsters = Math.abs(userHamsters);

//     // забирание хомячков
//     if (userHamsters > hamsters) {
//         alert(' there is no such amount of hamsters');
//         continue;
//     }

//     hamsters -= userHamsters;
//     alert(`you successfully got ${userHamsters} hamsters`);

//     if (hamsters === 0) {
//         alert(`You successfully got all hamsters ${counter} times`);
//         break;
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////