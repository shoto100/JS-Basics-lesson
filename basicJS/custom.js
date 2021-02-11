//! while loop

// var num = 10;
// while(num <= 15) {
//     console.log(num);
//     num++;
// }

//! For loop

// var arr = [1, 2, 3, 4, 5, 6];

// for( var i = 0; i < arr.length; i++) {
//     var nums = arr[i];
//     console.log(nums);
// }

//! switch case

// var nums = 1;

// switch(nums) {
//     case 100: 
//     console.log("oilo 100");
//     break;

//     case 10:
//     case 5: 
//     console.log("oilo");
//     break;  

//     case 1:
//     console.log("oilo 1");
//     break;

//     default:
//     console.log("dhru jaa");

// }

//! Function

// function doubleIT(num) {
//     var nums = num * 2;
//     console.log(nums);
// }
// doubleIT(2);



// ! -------------------- problem solving start --------------------------

//! Find largest Number
// var numbers = [1, 2, 3, 4, 5, 6];
// function largestNum(value) {
//     var larger = value[0];

//     for (var i = 0; i < value.length; i++) {
        
//         var element = value[i];

//         if (larger < element) {
//             larger = element;
//         }
//     }
//     return larger;
// }

// var output = largestNum(numbers);
// console.log(output);

//! convert inch to feet in array

// var numbers = [120, 240, 360, 480, 12, 24];
// function findFeet(inch) {
    
//     for (var i = 0; i < inch.length; i++) {

//         var feet = inch[i] / 12;
//         console.log(feet,"ft");
//     }
// }

// var output = findFeet(numbers);

// ! Leap year 

// function leapYear(year) {
//     if(year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0)) {
//         console.log(year, "is a leap year");
//     }
//     else {
//         console.log(year, "is not a leap year");
//     }
    
// }

// leapYear(1900);
// leapYear(2024);

// ! factorial 
// ? for loop

// function doFactorial(num) {

//     var factorial = 1;
//     for (var i = 1; i <= num; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var result = doFactorial(6);
// console.log(result);

//? while loop

// function doFactorial(num) {

//     var i = 1;
//     var factorial = 1;
//     while (i <= num) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// var result = doFactorial(6);
// console.log(result);

// ! recursive - factorial

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     else {
//         return factorial(n-1) * n;
//     }
// }

// var result = factorial(10);
// console.log(result);


// ! fibonacci

// ? for loop 

// function doFibonacci(n) {
//     var fibo = [0, 1];
//     for(var i = 2; i <= n; i++) {
//         fibo[i] = fibo[i-1] + fibo [i-2];
//     }
//     return fibo;
// }

// var result = doFibonacci(10);
// console.log(result);

// ! recursive - fibonacci

// function fibonacci(n) {
//     var fibo = [0, 1];
    
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// var result = fibonacci(10);
// console.log(result);


//? series fibonacci

// function fibonacci(n) {
    
//     if (n == 0) {
//         return [0];
//     }
//     else if (n == 1) {
//         return [0, 1];
//     }
//     else {
//         var fibo = fibonacci(n-1);
//         var nextElement = fibo[n-1] + fibo[n-2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }

// var result = fibonacci(10);
// console.log(result);


// ! Prime Number 

// ? for loop

// function isPrime(n) {
//     for (i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return 'Not a prime number';
//         }
//     }
//     return 'Your Number is a Prime Number';
// }
// var result = isPrime(17);
// console.log(result);

//! swap number

// ? practice 1

// var a = 5;
// var b = 7;

// var temp = a;
// a = b;
// b = temp;

// console.log("after swap-", "a =", a, "b =", b);

// ? practice 2

// var x = 5;
// var y = 7;

// x = x + y;
// y = x - y;
// x = x - y;

// console.log("after swap-", "x =", x, "y =", y);

// ? practice 3

// var x = 5;
// var y = 7;


// [x, y] = [y, x];

// console.log("after swap-", "x =", x, "y =", y);

// ! random number

// for (var  i = 1; i < 6; i++) {
//     var randomNum = Math.random() * 6;
//     var round = Math.round(randomNum);
//     console.log(round);
// }

// ! find max number

// ? practice 1

// var a = 10;
// var b = 12;
// var c = 15;

// if (a > b) {
//     console.log("a is big");
// }
// else{
//     if(b>c) {
//         console.log("b is big");
//     }
//     else {
//         console.log("c is big");
//     }
// }


// ? practice 2

// var a = 10;
// var b = 12;
// var c = 15;

// var max = Math.max(a, b, c);
// console.log(max);

// ! biggest num in array 

// ? practice  1 

// var marks = [10,20,30,50,60,70,80];
// var highest = marks[0];

// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
//     if (element > highest) {
//         highest = element;
//     }
// }

// console.log("highest number of array is ", highest );


// ? practice 2

// var numbers = [1, 2, 3, 4, 5, 6];
// function largestNum(value) {
//     var larger = value[0];

//     for (var i = 0; i < value.length; i++) {
        
//         var element = value[i];

//         if (larger < element) {
//             larger = element;
//         }
//     }
//     return larger;
// }

// var output = largestNum(numbers);
// console.log("highest number of array is ", output);

// ! Array sum 

// var numbers = [1, 2, 3];
// function largestNum(value) {
//     var sum = 0;

//     for (var i = 0; i < value.length; i++) {
        
//         sum = sum + value[i];

//     }
//     return sum;
// }

// var output = largestNum(numbers);
// console.log("array sum is ", output);

// ! Remove duplicate item from an array

// var member = [1, 2, 3, 4, 5, 2, 3, 7, 8, 9, 12, 13, 12];

// function uniqueValue(value) {
//     var uniqueName = [];
    
//     for (var i = 0; i < member.length; i++) {
//         var element = member[i];
//         var index = uniqueName.indexOf(element);
        
//         if(index == -1) {
//             uniqueName.push(element);
//         }
//     }
//     return uniqueName;
// }

// var result = uniqueValue(member);
// console.log(result);

// ! Word count 

// var speech = "my  name  is   satodhru  das  nondon";

// function countWord(value) {

//     var count = 0;

//     for (i = 0; i < value.length; i++) {
//         var char = value[i];

//         if (char == " " && value[i-1] != " ") {
//             count = count + 1;
//         }
//     }
//     return count;

// }

// var result = countWord(speech);
// console.log(result);


// ! Reverse string 
// var speech = "my  name  is   satodhru  das  nondon.";

// function reverseString(str) {
//     var reverse = "";

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }

// var result = reverseString(speech);
// console.log(result);


//! Function call all array work


// function addEven(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num % 2 == 0) {
//             console.log(num, "even");
//         }
//         else {
//             console.log(num, "odd");
//         }
//     }
// }


// var friendsAge = [13, 14, 15, 16, 20];
// addEven(friendsAge);


// var friendsAge2 = [11,122, 200,100,390];
// addEven(friendsAge2);


//! Call back function 

// function callBack(name, age, task) {
//     console.log("my name is", name);
//     console.log("my age is", age);
//     task();
// }

// function study() {
//     console.log("i am studying at LU");
// }
// function dinner() {
//     console.log("i am eating dinner");
// }

// callBack("Satodhru", 23, study);
// callBack("Nondon", 23, dinner);

//! Argument with sum

// function addNumbers(num1, num2) {
//     var sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         const num = arguments[i];
//         sum = sum + num;
//     }
//     return sum;
// }

// var result = addNumbers(1, 2, 3, 4, 5);
// console.log(result);

