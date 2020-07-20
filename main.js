// - создать массив с 20 числами.
let num = [1, 3, 4, 1, 11, 44, 122, 94.3, , 10, 11, 12, 33, 0.5, 05, 0.0445, 305, 11, 22, 11]


// // -- при помощи метода sort и колбека  отсортировать массив.
// num.sort( (nextEl, prevEl) => {
//     return prevEl - nextEl
// })
// console.log(num)


// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// num.sort( (nextEl, prevEl) => {
//     return prevEl - nextEl
// })
// console.log(num)


// // -- при помощи filter получить числа кратные 3
// const newArr = num.filter(el => !(el % 3) );
// console.log(newArr);


// // -- при помощи filter получить числа кратные 10
// const newArr1 = num.filter(el => !(el % 10) );
// console.log(newArr1);


// // -- перебрать (проитерировать) массив при помощи foreach()
// num.forEach((el, i, array) => {
//     console.log(`element - ${el}     index - ${i}     array - ${array}`)
//     if(i == 8) console.log(el, 'пропущенна итерация forEach')
// })
// console.log(num);


// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = num.map((el, i, array) => {
//     if(i == 8) console.log(el, 'пропущенна итерация map')
//     return el * 3

// })
// console.log(map);


// // - создать массив со словами на 15-20 элементов.
// let str = [" people","his tory","wa ","att","woRld","informatioN","map","family"," ","","system","computer","method","data","law"]


// // // -- отсортировать его по алфавиту в восходящем порядке.
// // str.sort()
// // console.log(str)

// // -- отсортировать его по алфавиту  в нисходящем порядке.
// str.sort( (nextEl, prevEl) => {
//     if (prevEl > nextEl) return 1
//     return -1
// })
// console.log(str)


// // -- отфильтровать слова длиной менее 4х символов
// const filter1 = str.filter( el => el.length < 4)
// console.log(filter1)


// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const map1 = str.map( el => el + "!")
// console.log(map1)


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((nextEl, prevEl) => {
//     return nextEl.age - prevEl.age
// })
// console.log(users, 'за  віком --- зростання');

// users.sort((nextEl, prevEl) => {
//     return prevEl.age - nextEl.age
// })
// console.log(users, 'за  віком --- спадання');


// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((nextEl, prevEl) => {
//     if(nextEl.name.length > prevEl.name.length) return 1
//     return -1
// })
// console.log(users, 'а кількістю знаків в імені --- зростання');

// users.sort((nextEl, prevEl) => {
//     if(prevEl.name.length < nextEl.name.length) return -1
//     return 1
// })
// console.log(users, 'а кількістю знаків в імені --- спадання');


// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// // та зберегти це в новий масив (первинний масив залишиться без змін)
// let newMapArr = users.map((el,i) => {
//     el.id = i
//     return el
//    //return {id: i, ...el};
// })
// console.log(newMapArr, 'додати кожному юзеру поле id ');
// // - відсортувати його за індентифікатором
// newMapArr.sort((next, prev) => prev.id - next.id)
// console.log(newMapArr, 'відсортувати його за індентифікатором');













// // -- наисать функцию калькулятора с 2мя числами и колбеком
// const calc = (a, b, calback) => {
//     let sum = calback(a,b)
//     return sum
// }
// console.log(calc(1,3, (a,b) => a+b))

// // -- наисать функцию калькулятора с 3мя числами и колбеком
// const calc = (a, b, c, calback) => {
//     let sum = calback(a,b,c)
//     return sum
// }
// console.log(calc(1,3, (a,b,c) => a+b+c))
















// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let volume = cars.filter(el => el.volume > 3);
// console.log(volume)


// // - двигун = 2л
// let volume1 = cars.filter(el => el.volume == 2);
// console.log(volume1)


// // - виробник мерс
// let mercedes = cars.filter(el => el.producer == 'mercedes');
// console.log(mercedes)


// // - двигун більше 3х літрів + виробник мерседес
// let mercedes1 = cars.filter(el => el.producer == 'mercedes' && el.volume > 3);
// console.log(mercedes1)


// // - двигун більше 3х літрів + виробник субару
// let subaru = cars.filter(el => el.producer == 'subaru' && el.volume > 3);
// console.log(subaru)


// // - сили більше ніж 300
// let power = cars.filter(el => el.power > 300);
// console.log(power)


// // - сили більше ніж 300 + виробник субару
// let subaru1 = cars.filter(el => el.producer == 'subaru' && el.power > 300);
// console.log(subaru1)


// // - мотор серіі ej
// let engine = cars.filter(el => el.engine.startsWith('ej')) ;
// console.log(engine)


// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let engine = cars.filter(el => el.producer == 'subaru' && el.power > 300 && el.engine.startsWith('ej')) ;
// console.log(engine)


// // - двигун меньше 3х літрів + виробник мерседес
// let mercedes1 = cars.filter(el => el.producer == 'mercedes' && el.volume < 3);
// console.log(mercedes1)


// // - двигун більше 2л + сили більше 250
// let power1 = cars.filter(el => el.volume > 2 && el.power > 250 );
// console.log(power1)

// // - сили більше 250  + виробник бмв
// let bmw = cars.filter(el => el.producer == "bmw" && el.power > 250);
// console.log(bmw)


// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Pirova', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Boguna', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Antonova', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Kotlyrevskogo', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// // -- отсортировать его по id пользователей
// usersWithAddress.sort((next, prev) => next.id - prev.id)
// console.log(usersWithAddress, 'отсортировать его по id пользователей')


// // -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((next, prev) => prev.id - next.id)
// console.log(usersWithAddress, 'отсортировать его по id пользователей в обратном опрядке')


// // -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((next, prev) => next.age - prev.age)
// console.log(usersWithAddress, 'отсортировать его по возрасту пользователей')


// // -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((next, prev) => prev.age - next.age)
// console.log(usersWithAddress, 'отсортировать его по возрасту пользователей в обратном порядке')


// // -- отсортировать его по имени пользователей
// usersWithAddress.sort((next, prev) => {
//     if(prev.name.length > next.name.length) return -1
//     return 1
// })
// console.log(usersWithAddress)


// // -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((next, prev) => {
//     if(prev.name.length > next.name.length) return 1
//     return -1
// })
// console.log(usersWithAddress)


// // -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((next, prev) => {
//     if(next.address.street > prev.address.street) return 1
//     return -1
// })
// console.log(usersWithAddress)


// // -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((next, prev) => next.address.number - prev.address.number)
// console.log(usersWithAddress)


// // -- отфильтровать (оставить) тех кто младше 30
// let age = usersWithAddress.filter(el => el.age < 30)
// console.log(age)


// // -- отфильтровать (оставить) тех у кого отрицательный статус
// let status = usersWithAddress.filter(el => !el.status)
// console.log(status)


// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет\
// let ageStatus = usersWithAddress.filter(el => el.age < 30 && !el.status)
// console.log(ageStatus)


// // -- отфильтровать (оставить) тех у кого номер дома четный
// let addressNumber = usersWithAddress.filter(el => !(el.address.number % 2))
// console.log(addressNumber)


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
let auto = [ 
    {producer:"subaru",model: "wrx", year: 2010, power: 400, owner: {name: 'Igor', age: 31, experience: 7}, price: 2000}, 
    {producer:"subaru",model: "legacy",year: 2007, power: 250, owner: {name: 'petya', age: 21, experience: 8}, price: 2100}, 
    {producer:"subaru",model: "tribeca",year: 2011, power: 300, owner: {name: 'Nady', age: 29, experience: 4}, price: 2011}, 
    {producer:"subaru",model: "leone",year: 1998, power: 140, owner: {name: 'Stepan', age: 21, experience: 6}, price: 3000},
    {producer:"subaru",model: "impreza",year: 2014, power: 200, owner: {name: 'Natalka', age: 26, experience: 9}, price: 2400},
    {producer:"subaru",model: "outback",year: 2014, power: 165, owner: {name: 'Ruslan', age: 31, experience: 7}, price: 2100}, 
    {producer:"bmw",model: "115",year: 2013, power: 120, owner: {name: 'Viktor', age: 31, experience: 4}, price: 4000},
    {producer:"bmw",model: "315",year: 2010,  power: 120, owner: {name: 'Dima', age: 26, experience: 6}, price: 2300},
    {producer:"bmw",model: "650",year: 2009, power: 350, owner: {name: 'Igor', age: 23, experience: 8}, price: 3300}, 
    {producer:"bmw",model: "320",year: 2012, power: 180, owner: {name: 'Sergey', age: 34, experience: 6}, price: 2030}, 
    {producer:"mercedes",model: "e200",year: 1990, power: 180, owner: {name: 'Masha', age: 41, experience: 22}, price: 1000}, 
    {producer:"mercedes",model: "e63",year: 2017, power: 400, owner: {name: 'dasha', age: 22, experience: 3}, price: 1300},
    {producer:"mercedes",model: "c250",year: 2017, power: 230, owner: {name: 'Taras', age: 38, experience: 11}, price: 1010} 
];

// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// auto.forEach((el, i, arr) => {
//     if(arr.length / 2 >= i) el.power = Math.floor(el.power * 1.1)   
// })
// console.log(auto)


// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// auto.forEach((el, i, arr) => {
//     if(arr.length / 2 >= i) el.owner.name = `${el.owner.name}-${i}`   
// })
// console.log(auto)

// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// auto.forEach( (el, i) => {
//     if(i % 2){
//         el.power = Math.floor(el.power * 1.1)
//         el.price = Math.floor(el.price * 1.05) 
//     }
// })
// console.log(auto)



// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, 
// //то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// auto.forEach( (el, i) => {
//     if(el.owner.experience < 5 && el.owner.age > 25) console.log(el.owner.name, el.owner.experience++ )
// })
// console.log(auto)

// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum = auto.reduce((acc, el, i) => acc + el.price, 0)
// console.log(sum)


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
let numSort = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

// // Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// // Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// const index = (key, arr) => {
//     let minIndex = arr.indexOf(key);
//     let maxIndex = arr.lastIndexOf(key);
//     if(minIndex > -1 && maxIndex > -1) return {minIndex, maxIndex}
//     return -1
// }
// console.log(index(14, numSort))

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.