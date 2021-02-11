class Person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("shoto", "das", 10000);
console.log(heroPerson);

const friendlyPerson = new Person("avro", "datta", 15000);
console.log(friendlyPerson);