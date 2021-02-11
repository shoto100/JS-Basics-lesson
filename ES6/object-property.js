const students = [
    {id: 11, name: "aaaa"},
    {id: 21, name: "bbbb"},
    {id: 41, name: "cccc"},
    {id: 41, name: "dddd"}
]

const allName = students.map(x => x.name);
const allId = students.map(x => x.id);
// console.log(allName, allId);

const bigger = students.find( x => x.id > 40);
console.log(bigger);