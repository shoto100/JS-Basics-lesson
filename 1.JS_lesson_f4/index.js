// If & Else:(class 01)

// let hour = 30;

// if (hour >= 6 && hour < 12) 
//     console.log('Good Morning');


// else if (hour >=12 && hour <18) 
//     console.log('Good Afternoon');


// else if ( hour >= 18 && hour <= 24)
//     console.log('Good Evening');

// else if ( hour >= 1 && hour < 6)
//     console.log('Good Evening');

// Switch Case:(class 02)

// let name = 'Satodhru';

// switch (name) {
//     case 'Satodhru':
//         console.log('First name');
//         break;

//     case 'Das':
//         console.log('Last name');
//         break;

//     default:
//         console.log('unknown User');

// }

// if (name === 'Satodhru') console.log('First name');
// else if (name === 'Das') console.log('Last name');
// else console.log('Unknown User');

// For loop:(class 03)

// for (let i = 0; i >= 1; i--) {
//     if ( i % 2 !== 0 ) console.log(i);
// }

// While loop: (class 04)

// let i = 1;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// DO -- While loop:(class 05)

// let i = 9;

// do{
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

// For--In loop:(class 07)

// const Name = {
//     firstname : 'Satodhru',
//     lastname : 'Das'
// };
// for (let key in Name)
//     console.log(key, Name[key]);

 // For--of loop:(class 08) 

// const colors = ['red', 'green', 'blue'];

// for (let index of colors)
//     console.log(index);

// Break & Continue:(class 09)

// let i = 0;
// while (i <= 10) {
//     if (i % 2 === 0) console.log(i);
//     i++;
//     continue;
    
// }


// EXCERSIZE 01:(class 10)
// let number = max(11, 0);
// console.log(number);

// function max(a, b){
//     return (a > b) ? a : b;
    
// }

// EXCERSIZE 02:(class 11)


// console.log(landscape (120, 200));

// function landscape(width, height) {
//     return (width > height);
// }

// EXCERSIZE 03:(class 12)

// const output = Number(15);
// console.log(output);


// function Number(input){
//     if (typeof input !== 'number') return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0) ) return 'fizzBuzz';

//     if (input % 3 === 0 ) return 'Fizz';

//     if (input % 5 === 0 ) return 'Buzz';

//     else return input;
// }

// EXCERSIZE 04:(class 13)

// checkSpeed(73);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const KMPH = 5;


//     if ( speed < speedLimit + KMPH)
//     console.log('Ok');

//     else { 
//         let points = (Math.floor(speed - speedLimit) / KMPH);
        
//         if (points >= 12) console.log('License Suspend');

//         else console.log('Points:', points);
//     }
// }

// EXCERSIZE 05:(class 14)
// showNumbers(5);

// function showNumbers(limit) {
//     for (let i=0; i<=limit; i++) {
//         if ( i % 2 === 0 )
//         console.log(i, "EVEN");
//         else
//         console.log(i, "ODD");  
//     }   
// }

// EXCERSIZE 06:(class 15)


// EXCERSIZE 07:(class 16)


// const movie = {
//         title : 'a',
//         releaseYear : 2020,
//         rating : 4.5,
//         director : 'b',
//     };

//     showproperties(movie);

//     function showproperties(movie) {
//         for (let key in movie)
//         if (typeof movie[key] === 'string')
//         console.log(key, movie[key]);
        
//     }
    
// EXCERSIZE 08:(class 17)
// console.log(sum(15))
// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//     sum = sum + i;

//     return sum;

// }

// EXCERSIZE 09:(class 18)

// const marks = [99, 60, 90];

// console.log(calculateGrade(marks));



// function calculateGrade(mark) {
//     let sum = 0;
//     for (let mark of marks)
//     sum += mark;

//     let average = sum / marks.length;

    
//     if (average < 60 || marks[0] < 60 || mark[1] < 60 || mark[2] < 60) return 'F';
//     else if (average >= 60 && average < 70 ) return 'D';
//     else if (average >= 70 && average < 80 ) return 'C';
//     else if (average >= 80 && average < 90 ) return 'B';
//     else return 'A';
    

    
// }

// EXCERSIZE 10:(class 19)

// showStars(10);

// function showStars(rows) {
    
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';

        
//         for (let i = 0; i < row; i++) 
//         pattern += '*';
//         console.log(pattern);
//     }
// }

// EXCERSIZE 11:(class 20)



// function primeNumber(number) {

//     if (number < 2){
//         return false;
//     }
//     else if (number === 2) {
//         return true;
//     }
//     else {
//         for ( i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

// }
// console.log(primeNumber(15));


// again practice:

// function num(a, b) {
//     if (a > b) {
//         return a;
//     }
//     else return b;
// }

// console.log(num(202, 30));

// function isLandscape(width, height) {
//     if (width > height) {
//         return true;
//     }

//     else return false;
// }

// console.log(isLandscape(200, 100));

// const output = fizzBuzz('1');
// console.log(output);

// function fizzBuzz(input) {
//     if (input % 3 === 0 && input % 5 === 0) {
//         return 'Fizbuzz';
//     }
//     else if (input % 3 === 0) {
//         return 'Fizz';
//     }
//     else if (input % 5 === 0) {
//         return 'Buzz';
//     }
//     else if (typeof input !== 'number') {
//         return 'NaN';
//     }
//     else return input;
// }


// checkSpeed(110);

// function checkSpeed(speed) {

//     const speedLimit = 70;
//     const kmperPoints = 5;
    

//     if (speed < speedLimit) {
//         console.log('OK');
//     }
//     else {
//         let points = Math.floor((speed - speedLimit) / kmperPoints);

//         if (points >= 12) {
//             console.log('License suspended');
//         }
//         else console.log('points:', points);
//     }
// }

// showNumbers(10);

// function showNumbers(limit) {
//     for (i = 0; i <= limit; i++) {
//         if ( i % 2 === 0) {
//             console.log(i, 'EVEN');
//         }
//         else console.log(i, 'ODD');
//     }
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };
// showProperties(movie);

// function showProperties(obj) {
//     for ( let key in obj) {
//         if (typeof obj[key] === 'string') {
//             console.log(key, obj[key]);
//         }
//     }
// }

// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;
//     for (i = 1; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) 
//         sum += i;  
//     }
    
//     return sum;
// }

// const marks = [70, 80, 80];


// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let sum =0;
//     for (let mark of marks){
//         sum += mark;
//     }
//     let average = (sum / marks.length);

//     if (average < 60 || marks[0] < 60 || marks[1] < 60 || marks[2] < 60) {
//         return 'F';
//     }
    
//     else if (average >= 60 && average > 70) {
//         return 'D';
//     }
//     else if (average >= 70 && average > 780) {
//         return 'C';
//     }
//     else if (average >= 80 && average > 90) {
//         return 'B';
//     }
//     else return 'A';

// }

showStars(5);

function showStars(rows) {
    for (i = 1; i <= rows; i++) {
        let sum = '';
        for (j = 0; j < i; j++) {
            sum += '*';
        }
        console.log(sum);
    } 
}