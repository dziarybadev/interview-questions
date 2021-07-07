# interview-questions

Задачки в index.js (варинаты без решений в for-interview-copy-from-here.js) ^_^

1) task 2.1
    Please, write function that will return copy of an object passed as a parameter.
    -------------------------------------------------------------------------------
    Do you know any other way to copy object?
        1) { ...obj };
        2) Object.assign({}, obj);
        3) JSON.parse(JSON.stringify(obj));

2) task 2.2
    Please, write function that will return copy of an object passed as a parameter.
    -------------------------------------------------------------------------------
    ---ask about deep copy if need.

3) task 3.1
    What will console.log's output?
    ---------------------------------------------------------------
    What is the difference between 'function' and 'arrow function'?
        1) this
        2) constructor
        3) arguments

    Do you now how we can change a context(this) of our function?;
        bind, call, apply

    What is the difference between bind, call and apply?
        bind - returns function with new binded context and arguments
        call - call function with context and allows to pass arguments one by one
        apply - call function with context and allows to pass arguments ass array

4) task 3.2
    What will we see in the console?

5) task 1
    What will console.log's output?
        ---ask what is being transforming to false if need
            1) false
            2) null
            3) undefined
            4) NaN
            5) 0
            6) ''
6) task 4
    Please, write a function which groups users by country,
    counts the total number of orders for each country
    and sorts users in descending order by number of orders.
    --------------------------------------------------------
        ---ask about array methods if need.

7) task 5
    In what order will the console logs work?
    ------------------------------------------
        Ask about Event Loop:
            1) micro and macro tasks
            2) is setTimeout a part of JavaScript? (no it's part of web api)
