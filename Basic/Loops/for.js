var students = ["John", "Mike", "Sylvester", "Mac", "Arnold"];

function greet_students(a) {
    console.log(`Hello ${a}`);
}

// for(var i = 0; i < students.length; i++) {
//     greet_students(students[i]);
// }

// Another way to do this
for(var student of students) {
    greet_students(student);
}