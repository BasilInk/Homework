// 1. Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.

// Задача 1. Решение

// function Point (x,y) {
//     this.x = x;
//     this.y = y;
// };

// function Line (point1, point2) {
//     this.point1 = point1;
//     this.point2 = point2;
// };

// Line.prototype.getLength = function () {
//     return Math.sqrt (Math.pow((this.point1.x - this.point2.x),2) + Math.pow((this.point1.y - this.point2.y),2));
// };

// const p1 = new Point (23,154);
// const p2 = new Point (51,21);
// const p3 = new Point (75,65);
// const p4 = new Point (86,321);
// const p5 = new Point (67,234);
// const p6 = new Point (89,76);

// const line1 = new Line (p1,p2);
// const line2 = new Line (p3,p4);
// const line3 = new Line (p5,p6);

// function canTriangleExist (line1,line2,line3) {
//     const line1Length = line1.getLength();
//     const line2Length = line2.getLength();
//     const line3Length = line3.getLength();

//     return (line1Length < line2Length + line3Length 
//         && line2Length < line1Length + line3Length 
//         && line3Length < line1Length + line2Length);
// };

// console.log (canTriangleExist(line1,line2,line3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц.

// Задача 3. Решение

// function Book (author,bookName,pageAmount) {
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
//     return `${author}, ${bookName}, ${pageAmount}`;
// };
// console.log (Book (`kra`,`bra`,23));

// const book1 = new Book (`kra`,`bra`,23);
// console.log (book1 ());
// function getBiggerBook () {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
// а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()

// Задача 4. Решение

// function Timer () {
//     this.time = 0;
//     this.timerId = null;
// }

// Timer.prototype.start = function () {
//     this.timerId = setInterval (() => {
//         console.log (this.time++);
//     },1000)
// }

// Timer.prototype.stop = function () {
//     clearInterval (this.timerId);
// };
// Timer.prototype.reset = function () {
//     this.time = 0;
// };

// const timer = new Timer ();

// timer.start ();

// setTimeout (() => {
//     timer.reset ();
// },4000);

////////////////////////////// Или через Bind

// setTimeout (timer.reset.bind(timer), 4000);

// setTimeout (() => {
//     timer.stop ();
// },8000);

//////////////////////////////////////////////////////////////////////////////////////////