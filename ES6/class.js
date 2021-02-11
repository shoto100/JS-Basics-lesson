class Student{
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "BGPSC";
    }
}

const student1 = new Student(1, "satodhru");
const student2 = new Student(2, "DAS");

console.log(student1, student2);