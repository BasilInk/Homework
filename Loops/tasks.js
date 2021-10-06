// let i;
// let j;

// for (i=1; i<5; ++i){
//     for (j=1; j<5; ++j) {
//     if (i ===3 && j === 3) {
//         continue;
//     }  
//     console.log (`${i}.${j}`);
// }
// }

// разберись с этим

// let i = 0;
// let j = 0;

// while (i<5) {
//     ++i;
//     while (j<5) {
//         ++j;
//         console.log (i + "." + j)
//     }
//     console.log (i + "." + j)
// }

// задача 2

let n = +prompt (`Введите число`);
let summ = 0;
let i = 0;
for (; n>= i; ++i){
    summ = i + summ;
    console.log(summ);
}
