class Parent{
    constructor() {
        this.fatherName = "Nobendu Das";
    }        
}
class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }

    getFullName() {
        return (this.name + " " + this.fatherName);
    }
}

const baby = new Child("Satodhru Das");
console.log(baby.getFullName());