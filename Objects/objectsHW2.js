// 1. Дан объект:
// var person = {
// name:’Pablo Picasso’
// }
// Создайте функцию addName(obj, name), которая
// добавляет в список имя name, но только если его там еще
// нет:
// addName(person, 'Garcia');
// // person.name=>'Pablo Picasso Garcia'
// addName(person, 'Pablo');
// // без изменений (имя уже существует)
// addName(person, 'Rodrigez');
// // person.name=>'Pablo Picasso Garcia Rodrigez'

// 2. Дан объект:
// var person = {
// name: ‘Pablo Picasso Garcia Rodrigez'’
// }
// Создайте функцию removeName(obj, name), которая
// удаляет из имени слово name, но только если оно там есть:
// removeName(person, 'Garcia');
// // person.name=>'Pablo Picasso Rodrigez '
// removeName(person, 'Akakij');
// // без изменений (такого имени нет)
// removeName(person, 'Rodrigez');
// // obj.name=>'Pablo Picasso'

// 3. Существует массив(длина: 4) футболистов (каждый
// футболист – это объект). Напишите функцию
// addAbility(array), которая добавляет к каждому
// объекту массива функцию run(), при запуске которой
// выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
// running”)

// 4. Напишите функцию, которая вычисляет длину линий в
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