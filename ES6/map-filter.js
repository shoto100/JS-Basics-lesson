const numbers = [1, 2, 3, 4, 5];

const result = numbers.map( x => x * 2);
// console.log(result);


const square = numbers.map( x => x * x);
// console.log(square);

const square1 = numbers.map(function (element) {
    return element * element;
});
// console.log(square1);

const filter = numbers.filter( x => x > 4);
console.log(filter);

const find = numbers.find( x => x > 4);
console.log(find);