number = 1;

switch (number) {
    case 1: 
        console.log("I'm number 1");
        break; 
    case 2:
        console.log("I'm number 2");
        break;
    case 3:
        console.log("I'm number 3");
        break;
    default:
        console.log("Nothing");
        break;
}

// Another case for switch

x = 1;
y = 0;

switch (true) {
    case (x > y):
        console.log("x higher than y");
    break;
    case (x === y):
        console.log("x equal than y");
    break;
    default:
        console.log("x lower than y");
    break;
}