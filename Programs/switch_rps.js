var user_option = "paper";
var computer = "paper";

switch (true) {
    case (user_option === "rock" && computer === "paper"):
        console.log('You Loose');
    break;
    case (computer === "paper" && user_option === "scissors"):
        console.log("You win");
    break;
    case (user_option === "rock" && computer === "scissors"):
        console.log("You win");
    break;
    case (user_option === "scissors" && computer === "rock"):
        console.log("You loose");
    break;
    case (user_option === "rock" && computer === "paper"):
        console.log("You loose");
    break;
    case (user_option === "paper" && computer === "rock"):
        console.log("You win")
    break;
    default:
        console.log("tie")
}

function game() {
    if (user_option === "rock" && computer === "rock") {
        console.log("tie");
    } else if (user_option === "rock" && computer === "scissors") {
        console.log("you loose");
    } else {
        console.log('tie')
    }
}
