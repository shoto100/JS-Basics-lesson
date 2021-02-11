// class 01

// let  circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };
// circle.draw();

// clsaa 02 (Factory Function)

// function createCircle(radius) {
//     return {
//     radius,
    
//     draw() {
//         console.log('draw');
//         }
//     };
// }

// let circle1 = createCircle(1);
// console.log(circle1);

// let circle2 = createCircle(3);
// console.log(circle2);

// clsaa 03 (Constructor Function)

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// let CreateCircle = new Circle(1);
// console.log(CreateCircle);

// clsaa 04 (Dynamic Nature of Obj)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
// };

// circle.color = 'red';
// circle.radius = 2;
// circle.location.y = 2;

// delete circle.isVisible;

// console.log(circle);

// clsaa 05 (Constructor Property)

// new String();

// clsaa 06 (Constructor Property)

// clsaa 07 (Constructor Property)

// let number = {value: 10};

// function increase(number) {
//     number.value++;
// }

// increase(number);
// console.log(number);

// clsaa 08 (Enumerating Propertices Of an Object)

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// };

// for (let key in circle) {
//     console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)){
//     console.log(key);

// };

// for (let entry of Object.entries (circle)){
//     console.log(entry);

// } ;

// if ('radius' in circle) console.log('yes');

// clsaa 09 (Colning an Object)

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// };
// let another = {};

// for (let key in circle)
//     another[key] = circle[key];
// console.log(another);


// let another = Object.assign({}, circle);

// console.log(another);

// let another = {...circle};

// console.log(another);

// excercise 1 :

// function showAddress() {
//     return {
//         street: 'A',
//         city: 'B',
//         zipCode: 'C',
//     };
// };

// let address = showAddress();
// console.log(address);

// or

// let address = {
//     street: 'A',
//     city: 'B',
//     zipCode: 'C'
// };

// function showAddress(address) {
//     for ( let key in address)
//     console.log(key, address[key]);
// }
// showAddress(address);

// excercise 2 :

// function showAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode,
//     };
// };

// let address = showAddress('A', 'B', 'C');
// console.log(address);

// or

// function ShowAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// };

// let address = new ShowAddress('A', 'B', 'C');
// console.log(address);

// excercise 3 :

// function ShowAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// };

// let address1 = new ShowAddress('A', 'B', 'C');

// let address2 = new ShowAddress('A', 'B', 'C');

// function areEqual(address1, address2) {
//     if (address1.key === address2.key) {
//         return 'true';
//     }
//     else return 'false';
// }
// console.log(areEqual(address1, address2));

// function areSame(address1, address2) {
//     if (address1 === address2) {
//         return 'true';
//     }
//     else return 'false';
// }
// console.log(areSame(address1, address2));

// excercise 4 :

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 12,
//     comments: [
//         {author: 'c', body: 'b'},
//         {author: 'c', body: 'b'}
//     ],
//     isLive: true
// };

// console.log(post);

// excercise 5 :

function Post(title, body, author,) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 12;
    this.comments = [];
    isLive = true;
};

let BlockPost = new Post('A', 'B', 'C');
console.log(BlockPost);