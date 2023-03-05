var user_option = "rock";
var computer_option = "scissors";

switch (true) {
    case (user_option === "rock" && computer_option === "paper"):
        console.log("You loose, computer wins");
    break;
    case (user_option === "rock" && computer_option === "scissors"):
        console.log("You win");
    break;
    case (user_option === "scissors" && computer_option === "rock"):
        console.log("You loose, computer wins");
    break;
    case (user_option === "scissors" && computer_option === "paper"):
        console.log("You win");
    break;
    case (user_option === "paper" && computer_option === "scissors"):
        console.log("You loose, computer wins");
    break;
    case (user_option === "paper" && computer_option === "rock"):
        console.log("You win");
    break;
    default:
        console.log("Tie");
    break;
}
