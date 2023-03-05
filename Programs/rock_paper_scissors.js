var user_option = "rock";
var computer = "scissors";

if (user_option === "rock" && computer === "paper") {
    console.log("You loose");
} else if (user_option === "scissors" && computer == "rock") {
    console.log("You loose");
} else if (user_option === "paper" && computer == "rock") {
    console.log("You win");
} else if (user_option === "scissors" && computer == "paper") {
    console.log("You win");
} else if (user_option === "rock" && computer == "scissors") {
    console.log("You win");
} else {
    console.log("tie");
}
