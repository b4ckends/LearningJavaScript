console.log('working');
const user = {
    name: "User",
    age: 20,
    tasks: [
        "Finish homeworks",
        "Clean the house",
    ],
    approveTask(newTask) {
        this.tasks.push(newTask);
    },
};

// Add another task to the user
user.tasks.push("Exercise");

function User(name, age, tasks) {
    this.name = name;
    this.age = age;
    this.tasks = tasks;
}

User.prototype.tasks = function (newTask) {
    this.tasks.push(newTask);
}

const user1 = new User (
    "User 1",
    18,
    [
        "Take a bath",
        "Clean the house",
        "Finish homeworks",
    ],
);





