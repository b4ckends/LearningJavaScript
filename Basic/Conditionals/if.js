if (true) {
    console.log("Hello");
}


// False
if (!true) {
    console.log("False");
} else {
    console.log("False");
}

// Good morning = 6AM & 12PM
// Good afternoon = 12PM & 6PM
// Good evening

hour = 18

if (hour >=6 && hour < 12) {
    console.log("Good Morning");
} else if (hour >= 12 && hour <= 18) {
    console.log("Good Afternoon");
} else {
    console.log("Time = " + hour + " Good Evening");
}

// Another example

age = 62;

if (age > 18) {
    console.log("You can vote again");
} else if (age === 18) {
    console.log("You can vote, will be your first time voting");
} else {
    console.log("You can't vote");
}

// condition ? true : false; 

var number = 87;
var result = number === 1 ? "Yes i'm number 1" : "I'm not";
console.log(result);