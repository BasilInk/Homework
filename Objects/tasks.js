// создать класс Lada 
// инстанс лады должен обладать полями 
// model (строго определнный набор) (сокрытый статик)
// ['vesta', 'xray', 'niva', 'granta', 'priora']
// new Lada ('x5', 24000, 1990) ===>>> {model:'vesta'}
// price число, не может быть ниже 0 
// yearOfProduction число 
// у всех лад должно быть вычисляемое свойтво age 
// age не должен быть доступен для ЗАПИСИ

const date = new Date();
console.dir(date.getFullYear());

class Lada {
    static #models = [`Vesta`,`Xray`,`Niva`,`Granta`,`Priora`];
    static addModel = function (model) {
        this.#models.push(model);
    }
    #price = 0;

    constructor (model, price, yearOfProduction) {
        this.model = Lada.#models.includes(model) ? model : undefined ;
        this.#price = price <= 0 ? 0 : price;
        this.yearOfProduction = yearOfProduction;
        this._age = date.getFullYear() - yearOfProduction;
    };

    set price (price) {
        this.#price = price <= 0 ? this.price : price;
    };

    get price () {
        return this.#price + `$`;
    };

    get age () {
        return this._age;
    };
};


const car1 = new Lada (`Niva`,10000,2010);

car1.age = 34;

console.log (car1);

Lada.addModel (`Kalina`);

console.log (Lada);


// Ошибки/////////////////////////////////////////////////////////////

// class ModelError extends Error {}
// class PriceError extends Error {}

// class Lada {
//     static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
//     static addModel = function (model) {
//         this.#models.push(model);
//     }

//     #price = 0;
//     #year = 0;

//     constructor (model, price, year) {
        

//         if (Lada.#models.includes(model)) {
//             this.model = model;
//         } else {
//             const myErr = new ModelError(`no ${model} model exist`);
//             throw myErr;
//         }

//         if (price > 0 ) {
//             this.#price = price;
//         } else {
//             throw new PriceError(`price ${price} is lower than zero and cant be set`);
//         }

//         this.#year = year;
//     }

//     get price () {
//         return this.#price + '$';
//     }
//     set price (price) {
//         this.#price = price < 0 ? this.#price : price;
//     }

//     get age () {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.#year;
//     }
// }

// const price = +prompt('ente your price');

// let lada;

// try {
//     asdasd;
//     lada = new Lada('vesta', price, 1990);
// } catch (err) {
//     console.log(err);
//     if (err instanceof PriceError) {
//         lada = new Lada('priora', -price, 1990);
//     } else if (err instanceof ModelError) {
//         lada = new Lada('vesta', price, 1990);
//     } else {
//         throw err;
//     }    
// }

// console.log(lada);