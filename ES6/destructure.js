// objects
const personDetails = { 
    name: "satodhru Das",
    address: "sylhet",
    phone: "0101010101",
    movie: "horor"
}

const {phone, movie} = personDetails

console.log(movie);

// array 

const arrayNum = [1, 2, 3, 4];
// const [one, two] = arrayNum;
const [one, ...two] = arrayNum;

console.log(two);
