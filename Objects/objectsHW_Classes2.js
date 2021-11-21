// 1. Создать класс House, инстанс которого иммет поля
// adress: {city:, street:, number:}
// apartments: Apartment[]
// maxApartments: number
// метод addApartment который принимает объект Appartment
// и добавляет его в массив apartments
// добавлять квартир больше чем maxApartments - запрещено
// добавлять квартиру без владельца запрещено
// добавлять квартиру без номера - запрещено
// нельзя добавлять квартиру если квартира с таким номером уже существует
// в массиве.
// Создать класс Apartment, интсанс которого имеет поля
// apartmentNumber: number
// owner: string // по умолчанию - пустая строка
// и метод setOwner('Vasya')

// [
//     {apartmentNumber:2, owner:'Vasya'},
//     {apartmentNumber:3, owner:'Petya'}
// ]

// Задача 1. Решение

// class House {
//     constructor (adress, maxApartments) {
//         this.adress = adress;
//         this.apartments = [];
//         this.maxApartments = maxApartments;
//     };
//     addAppartments (apartment) {
//         if (this.apartments.length < this.maxApartments 
//         && apartment.owner !== ``
//         && !this.apartments.some(({apartmentNumber}) => apartmentNumber === apartment.apartmentNumber)) {
//         this.apartments.push (apartment);
//         };
//     };
// };

// class Adress {
//     constructor (city, street, number) {
//         this.city = city;
//         this.street = street;
//         this.number = number;
//     };
// };

// class Apartment {
//     constructor (apartmentNumber, owner = ` `) {
//         this.apartmentNumber = apartmentNumber,
//         this.owner = owner
//     };
//     setOwner (name) {
//         this.owner = name;
//     };
// };

// const adr1 = new Adress (`Barselona`, `Galda`, 1);
// const adr2 = new Adress (`Minsk`, `M.Tanka`, 2);
// const adr3 = new Adress (`Moscow`, `Gorky Park`, 3);

// const house1 = new House (adr1, 3);
// const house2 = new House (adr2, 4);
// const house3 = new House (adr3, 5);

// const ap1 = new Apartment (1);
// const ap2 = new Apartment (2);
// const ap3 = new Apartment (3);

// ap1.setOwner (`John`);
// ap2.setOwner (`Henry`);
// ap3.setOwner (`David`);

// house1.addAppartments(ap1);
// house1.addAppartments(ap2);
// house1.addAppartments(ap3);

// console.log (house1);

// Задача 1 Решение 2 (от Владислава)

// class Apartment {
//     constructor (nomerKvartiry) {
//         this.owner = '';
//         this.apartmentNumber = nomerKvartiry;
//     }

//     setOwner (imyaVladelca) {
//         this.owner = imyaVladelca;
//     }
// }

// const kv1 = new Apartment(1);
// kv1.setOwner('John');
// const kv2 = new Apartment(2);
// kv2.setOwner('David');
// const kv3 = new Apartment(3);
// kv3.setOwner('Petya');
// const kv4 = new Apartment(4);
// kv4.setOwner('Oleg');


// class House {
//     constructor (gorod, ulica, nomerDoma, maxApartments) {
//         this.apartments = [];
//         this.adress = {
//             city: gorod,
//             street: ulica,
//             houseNumber: nomerDoma
//         };
//         this.maxApartments = maxApartments;
//     }

//     addApartment (kvartira) {
//         if (
//             kvartira.owner !== ''
//             && this.apartments.length < this.maxApartments
//             && !this.apartments.some(({apartmentNumber}) => apartmentNumber === kvartira.apartmentNumber )
//         ) {
//             this.apartments.push(kvartira);
//         }
       
//     }
// }

// const dom = new House('Gomel', 'Pushkina', 2, 3);
// // dom.addApartment({a:1,b:2});
// dom.addApartment(kv1);
// dom.addApartment(kv2);
// dom.addApartment(kv3);
// dom.addApartment(kv4);
// console.log(dom);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Создать класс Device, который имеет параметр isOn (по 
//     умолчанию false), метод callSmbd, который принимает имя 
//     вызываемого абонента и метод switchDevice, который 
//     переключает параметр isOn. Позвонить абоненту можно 
//     только тогда, когда параметр isOn == true, иначе вывести 
//     сообщение, что звонок невозможен. Необходимо также 
//     создать классы Smartphone(принимает имя и диагональ 
//     экрана(не может быть больше 8)) и Tablet(принимает имя и 
//     диагональ экрана (не может быть меньше 8)), которые 
//     наследуют от класса Device

// Задача2. Решение

// class Device {
//     constructor (nameDevice, diagonal) {
//         this.isOn = false;
//         this.nameDevice = nameDevice;
//         this.diagonal = diagonal;
//     };

//     switchDevice () {
//         return this.isOn = true;
//     };

//     callSmbd (userName) {
//         if (this.isOn == true) {
//             return `${userName}`
//         } else {alert (`Phone call is not possible!`)};
//     };
// };

// const abon1 = new Device;

// console.log (abon1.switchDevice());

// console.log (abon1.callSmbd(`Zosya`));

// const abon2 = new Device;

// console.log (abon2.callSmbd(`Boris`));

// class Smartphone extends Device {
//     constructor (nameDevice, diagonal) {
//         super (nameDevice, diagonal);
//     };
//     callSmartphone (namePhone, diag) {
//         this.nameDevice = namePhone;
//         this.diagonal = diag;
//         if (this.diagonal <= 8) {
//         console.log (`This ${namePhone} has a screen diagonal of ${diag} inches`)
//         } else {console.log (`This ${namePhone} is not a smartphone`)};
//     };
// };

// const smart1 = new Smartphone;

// const smart2 = new Smartphone;

// console.log (smart1.callSmartphone (`Sony`, 5));

// console.log (smart2.callSmartphone (`LG`, 10));

// class Tablet extends Device {
//     constructor (nameDevice, diagonal) {
//         super (nameDevice, diagonal);
//     };
//     callTablet (nameTablet, diag) {
//         this.nameDevice = nameTablet;
//         this.diagonal = diag;
//         if (this.diagonal >= 9) {
//         console.log (`This ${nameTablet} has a screen diagonal of ${diag} inches`)
//         } else {console.log (`This ${nameTablet} is not a tablet`)};
//     };
// };

// const tabl1 = new Tablet;

// const tabl2 = new Tablet;

// console.log (tabl1.callTablet (`Panasonic`, 10));

// console.log (tabl2.callTablet (`Samsung`, 5));

// Задача 2. Решение 2

// class Device {
//     constructor () {
//         this.isOn = false;
//     }

//     callSmbd (who) {
//         if (this.isOn) {
//             console.log(`you are calling ${who}`);
//         } else {
//             console.log(`You cant call anyone`);
//         }
//     }

//     switchDevice () {
//         this.isOn = !this.isOn;
//     }
// }

// class Smartphone extends Device {
//     constructor (name, diag) {
//         super();
//         this.name = name;
//         if (diag > 8) {
//             this.diag = 8;
//         } else {
//             this.diag = diag;
//         }
//     }
// }

// class Samsung extends Smartphone {
//     constructor (name, diag) {
//         super(name, diag);
//     }
// }

// const dev = new Device();
// dev.switchDevice();
// dev.callSmbd('Oleg');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который 
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек

// Задача 3. Решение

// class Battery {
//     constructor (type, energy = 100) {
//         this.type = type;
//         this.energy= energy;
//     };
// };

// const battery1 = new Battery (`b1`);
// const battery2 = new Battery (`b2`);

// class Device {
//     constructor (batteryType) {
//         this.batteryType = batteryType;
//     };
//     insertBattery (battery1Dev, battery2Dev) {
//         if (battery1Dev === battery1.type && battery2Dev === battery2.type) {
//             return `Batteries are inserted`
//         } else { return `Batteries are not inserted`};
//     };
// };

// const device1 = new Device;
// const device2 = new Device;

// console.log (device1.insertBattery (`b1`, `b2`));
// console.log (device1.insertBattery (`c1`, `c2`));

// class Gamepad extends Device {
//     constructor (batteryType, model, isConnected = false) {
//         super (batteryType);
//         this.model = model;
//         this.isConnected = isConnected;
//     };

//     connectTo (gamepadModel, deviceModel) {
//         this.model = gamepadModel;
//             if (this.isConnected === false
//             && battery1.type !== undefined
//             && battery2.type !== undefined
//             ) {
//             this.isConnected = true;
//             return `${gamepadModel} is connected to ${deviceModel}`
//             } else {return `${gamepadModel} cannot be connected to ${deviceModel}`
//         };
//     };

//     disconnect (gamepadModel, deviceModel) {
//         this.model = gamepadModel;
//         return `${gamepadModel} is disconnected from ${deviceModel}`;
//     };

//     play () {
//         if (battery1.energy == 0 || battery2.energy == 0) {
//             return `Сhange the batteries`;
//             } else {return `battery1 energy is ${battery1.energy-10} %, battery2 energy is ${battery2.energy-10} %`;
//         };
//     };
// };

// const gamepad1 = new Gamepad;

// // спросить, чтобы перезаписывало значение заряда

// console.log (gamepad1.play ());
// console.log (gamepad1.play ());

// console.log (gamepad1.connectTo (`PS`, `TV`));
// console.log (gamepad1.connectTo (`PS`, `TV`));
// console.log (gamepad1.disconnect (`PS`, `TV`));

// Задача 3. Решение 2

// class Battery {
//     constructor (type) {
//         this.type = type;
//         this.energy = 100;
//     }
// }

// class Device {
//     constructor (type) {
//         this.batteryType = type;
//         this.btrs = [];
//     }

//     insertBattery (b1,b2) {
//         if (b1.type !== this.batteryType
//             || b2.type !== this.batteryType) {
//                 console.error(`you cant insert type because batteries have different types: ${b1.type} and ${b2.type}`);
//         } else {
//             this.btrs.push(b1,b2);
//         }
//     }
// }

// class Gamepad extends Device {
//     constructor (model, type) {
//         super(type);
//         this.model = model;
//         this.isConnected = false;
//     }

//     connectTo (deviceName) {
//         if (!this.isConnected       
//             && this.isAllBatteriesCharged()) {
//                 this.isConnected = true;
//                 console.log('connected! to ' + deviceName);
//         } else {
//             console.log('could not connect!');
//         }
//     }
    
//     disconnect () {
//         this.isConnected = false;
//         console.log('Device disconnected!');
//     }

//     play () {
//         if (this.btrs.length > 1 
//             && this.isAllBatteriesCharged() ) {
//             console.log('you play game!');
//             this.btrs = this.btrs.map((btr) => ({
//                 ...btr,
//                 energy: btr.energy <= 0 ? 0 : btr.energy - 10
//             }))
//         } else {
//             console.error('you cant play due to batteries, change them!');
//         }
//     }

//     isAllBatteriesCharged () {
//         return this.btrs.every(({energy}) => energy > 0 );
//     }
// }

// const b1 = new Battery ('AAA');
// const b2 = new Battery ('AAA');
// const b3 = new Battery ('BBB');

// const ps5gamepad = new Gamepad('ps5', 'AAA');

// ps5gamepad.insertBattery(b1,b2);
// ps5gamepad.connectTo('ps5');
// ps5gamepad.disconnect();
// ps5gamepad.connectTo('xbox');
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();

/////////////////////////////////////////////////////////////////////////////////

// Z:\FRONT12\Javascript\PREPOD\objects

// class Test {
//     constructor (city, number) { //5

//         this.a = city;
//         this.b = number;

//        // return this;
//     }
// }

// const smth = new Test(2,3);
// console.log(smth);

// const that = {};
// that.a = 2;
// that.b = that.number;

///////////////////////////////////////////////////////////////////////////////////

// Задача 4.



// Задача 4. Решение

// class Human {
//     constructor (name, age) {
//         this.name = name,
//         this.age = age
//     };

//     sayHi () {
//         console.log (`Hi ${this.name}!`);
//     }
// };

// class Programmer extends Human {
//     constructor (name, age, technologies = []) {
//         super (name, age);
//         this.technologies = technologies;
//     };
    
//     startCoding () {
//         console.log (`${this.name} is coding using ${this.technologies}!`);
//     };
// };

// const programmer1 = new Programmer (`John`, 31, [`Html`,`CSS`,`JS`]);
// const programmer2 = new Programmer (`Peter`, 28, [`JAVA`]);

// programmer1.sayHi ();

// programmer1.startCoding ();
// programmer2.startCoding ();

// class Sportsman extends Human {
//     constructor (medals, ...args) {
//         super(...args);
//         this.medals = medals;
//     };
// };

// class FootballPlayer extends Sportsman {
//     constructor (team = ``, ...args) {
//         super (...args);
//         this.team = team;
//     };
//     run (speed) {
//         console.log (`${this.name} is running ${speed} kmph`);
//     };
// };

// const footballPlayer1= new FootballPlayer (`Barselona`, 5, `Frank`, 28);

// footballPlayer1.run (15);

// class HockeyPlayer extends Sportsman {
//     constructor (weight, ...args) {
//         super (...args);
//         this.weight = weight;
//     };
//     pushOpponent (opponentName) {
//         console.log (`${this.name} pushed ${opponentName} and used ${this.weight} kgs`);
//     };
// };

// const hockeyPlayer1 = new HockeyPlayer (120, 3, `Brandon`, 33);

// hockeyPlayer1.pushOpponent (`Razor`);

//////////////////////////////////////////////////////////////////////////////////////////

// Геттер и Сеттер

// class Human {
//     constructor () {
//         this._age = 0;
//     };

//     set age (number) {
//         if (number < 120 && number > 0) {
//             this._age = number;
//         };
//     };

//     get age () {
//         return this._age
//     };
// };

// const h1 = new Human ();

// h1.age = 31;

// console.log (h1);

// console.log(h1.age);