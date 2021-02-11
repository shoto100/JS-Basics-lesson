const normalPerson = {
    firstName: "satodhru",
    lastName: "das",
    salary: 15000,
    getFullName: function() {
        return (this.firstName + " " + this.lastName);
    },
    payBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }

}

const heroPerson = {
    firstName: "Avro",
    lastName: "datta",
    salary: 20000
}


const firendlyPerson = {
    firstName: "onick",
    lastName: "datta",
    salary: 25000
}

// ! BIND
const heroBillCharge = normalPerson.payBill.bind(heroPerson);
heroBillCharge(1000);
heroBillCharge(2000);
console.log(heroPerson.salary);

// ! call
// call = comma

normalPerson.payBill.call(firendlyPerson, 2000);
console.log(firendlyPerson.salary);

// ! Apply
// apply = array

normalPerson.payBill.apply(firendlyPerson, [5000]);
console.log(firendlyPerson.salary);