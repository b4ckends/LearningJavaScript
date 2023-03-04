// This program makes a list of to do lists and completed lists

var week = ["Clean The House", " Do my math exercises", " Cook for the evening"];

for (var i = 0; i < week.length; i++) {
    console.log(`To do list: ${week[i]}`);
}

console.log("\nToday I did the following tasks:\n");

for (var i = 0; i < week.length; i++) {
    console.log(`Completed: ${week[i]}`);
}