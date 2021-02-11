const info = {
    firstName: "satodhru",
    lastName: "das",
    salary: 1500,
    getFullName: function() {
        return (this.firstName + " " + this.lastName);
    },
    payBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }

}

info.payBill(500);
console.log(info.salary);