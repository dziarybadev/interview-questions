
// task 1
console.log(2 == '2');
console.log(12 === '12');
console.log(null == undefined);
console.log(NaN === NaN);
console.log({ a: 1 } == { a: 1 });

/////////////////////////////////////////////////////////////////////////////////

// task 2.1
const obj = {
    a: 1,
    b: 2,
};

function copyObject(object) {
    // your code
};

/////////////////////////////////////////////////////////////////////////////////

// task 2.2
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    }
};

function copyObjectDeep(object) {
    // your code
}

/////////////////////////////////////////////////////////////////////////////////


// task 3.1
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

obj.method1();
obj.method2();
obj.method3();
obj.method4();

// task 3.2

const method = obj.method1.bind(obj).bind(window);
method()

/////////////////////////////////////////////////////////////////////////////////

// task 4
function aggregate(data) {
    // your code
}

const input = [
    { userId: 1, ordersCount: 15, country: 'USA' },
    { userId: 4, ordersCount: 3, country: 'USA' },
    { userId: 5, ordersCount: 23, country: 'England' },
    { userId: 6, ordersCount: 21, country: 'USA' },
    { userId: 7, ordersCount: 6, country: 'Canada' },
];

const expectedOutput = {
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

/////////////////////////////////////////////////////////////////////////////////

// task 5

console.log('script start')

setTimeout(() => console.log('setTimeout'), 0);

new Promise((res, rej) => {
    console.log('promise 1');
    res();
}).then(() => {
    console.log('promise 1 then');
});

new Promise((res, rej) => console.log('promise 2'));

console.log('script end');