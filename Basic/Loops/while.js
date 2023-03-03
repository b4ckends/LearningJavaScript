var students = ["Hugh", "Mark", "Tom", "Dwayne"];

function greetStudents(student) {
    console.log( `Hello ${student}`);
}

while(students.length > 0) {
    var student = students.shift();
    greetStudents(student)
}