// Class 01 - Function Declarations Vs Expression 

// function Declarations
// function walk() {
//     console.log('walk');
// }
// walk();

// function Expression
// const run = function run() {
//     console.log('run');
// };
// run();

// Class 02 - Hoisting 

// const run = function run() {
//     console.log('run');
// };
// run();  
// hoisting means functionName();

// Class 03 - Arguments

// let numbers = sum(1, 2, 3, 4, 5,  10);
// console.log(numbers);

// function sum() {
//     total = 0;
//     for (let value of arguments)
//     total += value;
//     return total;
    
// }

// Class 04 - Rest Operators

// let numbers = sum(0.1, 20, 30);
// console.log(sum(0.1, 20, 30));

// function sum(discount, ...prices) {
//     const total = prices.reduce((a,b) => a + b);
//     return total - (total * discount);
// }

// Class 05 - Default Parameters

// const bank = interest();
// function interest(principal = 10000, rate = 3.5, years = 5) {
//     return (principal * rate / 100 * years);
// }

// console.log(bank);

// Class 06 - Getters and Setters

// const person = {
//     firstName: 'Satodhru',
//     lastName: 'Das',
    // get fullName() { 
    //     return `${person.firstName} ${person.lastName}`
    // },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName =  'Nondon Das';

// console.log(person.firstName + ' ' + person.lastName);
// console.log(`${person.firstName} ${person.lastName}`);

// console.log(person); 

// Class 07 - Try and Catch

// const person = {
//     firstName: 'Satodhru',
//     lastName: 'Das',
//     // get fullName() { 
//     //     return `${person.firstName} ${person.lastName}`
//     // },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('value is not a string.');
        
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try { 
//     person.fullName =  null;
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.firstName + ' ' + person.lastName);
// console.log(`${person.firstName} ${person.lastName}`);

// console.log(person); 

// Class 08 - local and global scope

// {
//     const message = 'hi';
// }

// console.log(message);

// Class 10 - the This keywords

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) { 
//         console.log(this.title, tag);
//         }, this);
//     }
// };

// video.showTags();

// Class 11 - Changing This

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {

//         this.tags.forEach(tag => { 
//         console.log(this.title, tag);
//         });
//     }
// };

// video.showTags();

// Class 12 - Excercise - Sum of Arguments 

// let numbers = sum([1, 2, 3, 4]);
// console.log(numbers);

// function sum(...sum) {
//     if (sum.length === 1 && Array.isArray(sum[0]))
//         sum = [...sum[0]];

//     return sum.reduce((a, b) => a + b);
// }

// Class 13 - Excercise - Sum of Arguments   

// const circle = {
//     radius: 2,
//     get  area() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// console.log(circle.area);

// =================================

