// 1
console.log('abc' - 3);  // NaN
console.log('abc' - 'ab'); // NaN
console.log('abc' + 'ed'); // 'abced'
console.log('12' + 3); // '123'
console.log('12' - 3); // 9

// 2
console.log(2 == '2'); // true
console.log(12 === '12'); // false
console.log(null == undefined); // true
console.log(NaN === NaN); // false
console.log({ a: 1 } == { a: 1 }); // false

//3
const obj = {
    a: 1,
    b: {
        c: 2,
    },
}
const d = obj.b;

d.c = 5;
obj.a = 7;

console.log(obj.a + obj.b.c) // 12

// 4
// Передать в isEqualToFalse такой массив, чтобы функция вернула true (чем больше уникальных элементов в массиве, тем лучше решена задача)
function isEqualToFalse(array) {
    return array.every((item) => {
        if (!item) return true;
        return false;
    });
}

console.log(isEqualToFalse([])); // true;
// Ответ: [false, null, undefined, 0, '', NaN]

// 5.1
// Написать функцию копирующую объект
const obj = {
    a: 1,
    b: 2,
};

// Одно из возможных решений:
// function copyObject(obj) {
//     return { ...obj };
// }
// Ответ:
// 5.2
// Модернизировать функции, чтобы она могла скопировать следующи объект
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    }
};
// Одно из возможных решений:
// function copyObject(obj) {
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//         acc[key] = typeof value === 'object' ? copyObject(value) : value;
//         return acc;
//     }, {});
// }

// 6
// Написать функцию, которая:
// 1) Сгруппирует пользователей по стране
// 2) Посчитает общее кол-во заказов для каждой страны
// 3) Отсортирует пользовотелей внутри групп по убыванию кол-ва заказов
const users = [
    { userId: 1, ordersCount: 15, country: 'USA' },
    { userId: 4, ordersCount: 3, country: 'USA' },
    { userId: 5, ordersCount: 23, country: 'England' },
    { userId: 6, ordersCount: 21, country: 'USA' },
    { userId: 7, ordersCount: 6, country: 'Canada' },
];

// предполагаемый результат
const result = {
    USA: {
        ordersCount: 39,
        users: [
            { userId: 6, ordersCount: 21, country: 'USA' },
            { userId: 1, ordersCount: 15, country: 'USA' },
            { userId: 4, ordersCount: 3, country: 'USA' },
        ],
    },
    England: {
        ordersCount: 23,
        users: [
            { userId: 5, ordersCount: 23, country: 'England' },
        ],
    },
    Canada: {
        ordersCount: 6,
        users: [
            { userId: 7, ordersCount: 6, country: 'Canada' },
        ],
    },
}

// Одно из возможных решений:

function aggregate(data) {
    return data.reduce((acc, user) => {
        const { country, ordersCount } = user;
        console.log(country, acc.hasOwnProperty(country))
        if (!acc.hasOwnProperty(country)) {
            acc[country] = { ordersCount, users: [user] };
        } else {
            acc[country].ordersCount += ordersCount;
            acc[country].users = [...acc[country].users, user].sort((a, b) => a.ordersCount - b.ordersCount);
        }

        return acc;
    }, {});
}

// 7.1
const obj = {
    method1() { console.log(this); },
    
    method2: () => { console.log(this); },
    
    method3: () => {
        const bar = () => console.log(this);
        bar();
    },
    
    method4() {
        const bar = () => console.log(this);
        bar();
    }
}

obj.method1(); // obj
obj.method2(); // window
obj.method3(); // windows
obj.method4(); // obj

// 7.2

const method = obj.method1.bind(obj).bind(window);
method() // obj


// 8

console.log('script start') // 1

setTimeout(() => console.log('setTimeout'), 0); // 6

new Promise((res, rej) => {
    console.log('promise 1'); // 2
    res();
}).then(() => {
    console.log('promise 1 then'); // 5
});

new Promise((res, rej) => console.log('promise 2')); // 3

console.log('script end'); // 4