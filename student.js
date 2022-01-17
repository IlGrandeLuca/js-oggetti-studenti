/*const student = {
    firstName: ['Luca'],
    lastName: ['Il Grande'],
    age: [25]
};

for (let key in student) {
    console.log(student[key]);
};*/

let students = [
    {
        firstName: ['Savio'],
        lastName: ['D`Ambrosio'],
        age: [24]
    },
    {
        firstName: ['Gimmy'],
        lastName: ['Bosetti'],
        age: [25]
    },
    {
        firstName: ['Roberta'],
        lastName: ['Angioni'],
        age: [29]
    }
];

let studentName = prompt('Enter name');
let studentLastName = prompt('Enter lastname');
let studentAge = prompt('Enter age');

students.push({
    firstName: studentName,
    lastName: studentLastName,
    age: studentAge,
});

for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    console.log('Name[' + i + ']: ' + currentStudent.firstName);
    console.log('Lastame[' + i + ']: ' + currentStudent.lastName);
    console.log('Age[' + i + ']: ' + currentStudent.age);
}
console.log(students);