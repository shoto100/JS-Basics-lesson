// class 02 - Adding Elements

// const numbers = [1, 2, 3];

// numbers.push(5, 6);

// numbers.unshift(0);

// numbers.splice(3, 0, 4);

// console.log(numbers);

// class 03 - Finding Elements(Primitive Types)

// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(2));

// console.log(numbers.indexOf(2) !== -1);
// console.log(numbers.includes(2))

// class 04 - Finding Elements(Reference Types)

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'}
// ];

// const element = courses.findIndex(function(element) {
//     return element.id === 1;
// });
// console.log(element);

// class 05 - Finding Elements(Reference Types) with Array Function 
// (without normal Function system:)

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'}
// ];

// const element = courses.findIndex(element => element.id === 1);
// console.log(element);

// class 06 - Removing Elements of Array 

// const numbers = [1, 2, 3, 4];

// const last = numbers.pop();
// console.log(numbers);

// const start = numbers.shift();
// console.log(numbers);


// const middle = numbers.splice(2, 1); 
// console.log(numbers);

// class 07 - Empty Array 

// let numbers = [1, 2, 3, 4];

// solution 01

// numbers = [];

// console.log(numbers);

// solution 02

// numbers.length = 0;

// console.log(numbers);

// solution 03

// numbers.splice(0, numbers.length);

// console.log(numbers); 

// class 08 - Combining and silcing Array 

// let first = [1, 2, 3, 1, 5];
// let second = [{ id: 'a'}];
// second[0].id = 10;

// let combined = second.concat(first); 
// console.log(combined);

// let slice = combined.slice(2);
// console.log(slice);

// class 09 - Spread Operator

// let first = [1, 2, 3, 1, 5];
// let second = [{ id: 'a'}];

// let combined =  [...second, '2', ...first];
// console.log(combined);

// let slice = combined.slice(1);
// console.log(slice);

// let copy = [...combined];
// console.log(copy);

// class 10 - Iterating array

// const numbers = [1, 2, 3];

// for (let number of numbers) {
//     console.log(number);
// }

// numbers.forEach(number => console.log(number)); 

// class 11 - Iterating array

// const numbers = [1, 2, 3];

// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';

// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join(' ');
// console.log(combined)

// class 12 - Sorting array

// const numbers = [5, 4, 6];
// console.log(numbers.sort());

// console.log(numbers.reverse());

// const courses = [
//     { id: 1, name: 'Node.js'},
//     { id: 2, name: 'javaScript'}
// ];


// courses.sort(function(a, b) {

//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA > nameB) return 1;
//     else if (nameA < nameB) return -1;
//     else return 0;
// });
// console.log(courses);

// class 13 - Testing the element of an array('every' & 'some')

// const numbers = [5, 4, 6, -1];

// const everyPositive = numbers.every(element => element >= 0);
// console.log(everyPositive);

// const onePositive = numbers.some(element => element > 0);
// console.log(onePositive);

// class 14 - Testing the element of an array('every' & 'some')

// const numbers = [5, 4, 6, -1];

// numbers.sort();

// const filtered = numbers.filter(element => element > 0);
// console.log(filtered);

// class 15 - Mapping an array 

// const numbers = [5, 4, 6, -1];

// numbers.sort();
// technic 01 :

// const filtered = numbers.filter(element => element > 0);
// const items = filtered.map(element => {
//     const obj = { value: element };
//     return obj;
// });

// technic 02 :

// const items = numbers
//     .filter(element => element > 0)
//     .map(element => ({ value: element }));

// console.log(items);

// class 16 - reducing an Array

// const numbers = [ 1, 2, 3, -1];

// const sum = numbers.reduce((accumulator, currentValue) => (accumulator + currentValue));
// console.log(sum);

// console.log(numbers.reduce((accumulator, currentValue) => (accumulator + currentValue)));

// class 17  - Excercise - Array from range

// const numbers = arrayFromRange(1, 4);


// console.log(numbers);

// function arrayFromRange(min, max) {
    
//     const output = [];
//     for (i = min; i <= max; i++) {
//         output.push(i);
//     }
//     return output;

// };

// class 18  - Excercise - Includes

// const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(5));

// function includes(array, searchElemnt) {
//     for (let numbers of searchElemnt) {
//         if (searchElemnt === numbers.includes)
//         return true;
//     }
//     return false;
// };

// class 19  - Excercise - Except

// const numbers = [1, 2, 3, 4, 1, 2, 5];


// function except(array, excluded) {
//     const output = [];
//     for (let element of array) {
//         if (!excluded.includes(element))
//         output.push(element);
//     }
//     return output; 
// };

// const output = except(numbers, [1, 2]);
// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let element of array) {
//         if (excluded !== element)
//         output.push(element);
//     }
//     return output; 
// };

// const output = except(numbers, 1);
// console.log(output);

// class 20  - Excercise - Moving an element 

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 0);

// console.log(output);

// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || positon < 0) {
//         console.error('Invalid offset.');
//         return;
//     }


//     output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.slice(index + offset, 0, element);
//     return output;
// };

// class 21  - Excercise - Count Occurrences 

// const numbers = [1, 2, 3, 4, 1, 2, 1];

// const count = countOccurrences(numbers, 1);
// console.log(count);

// function countOccurrences(array, searchElement){
    // let count = 0;
    // for (let element of array) {
    //     if (searchElement === element) {
    //         count++;
            
    //     }
    // }
    // return count;


//     return array.reduce((accumulator, current) => {
//         const occurrences = (current === searchElement)
//         return accumulator + occurrences;
//     }, 0); 
// };

// class 22  - Excercise - Get Max

// const numbers = [1, 2, 3, 4];

// const max = getMax([1, 2, 5]);
// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined; 

    // let max = array[0];
    // for (i = 1; i < array.length; i++) {
    //     if (array[i] > max) return max = array[i];

    // }
    // return max;


//     else return array.reduce((accumulator, current) => {
//         if (current < accumulator) return accumulator;
//         else return current;
//     });
// }

// class 23  - Excercise - Movies 

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 }
// ];


// console.log(
//     movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)
//     );


const numbers = [1, 2, 3, 4];


console.log(includes(numbers, 4));

function includes(array, searchElement) {
    for (let element of array)
        if (searchElement === element)
        return true;

    return false;
}


 