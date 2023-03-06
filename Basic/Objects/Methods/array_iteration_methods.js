var articles = [
    { name: "Bicycle", cost: 2000 },
    { name: "Tv", cost: 2500},
    { name: "Book", cost: 320},
    { name: "Cellphone", cost: 10000},
    { name: "Laptop", cost: 20000},
    { name: "Keyboard", cost: 500},
    { name: "Headphones", cost: 1700},
];

var filterArticles = articles.filter(function (article) {
    return article.cost <= 500;
});

var nameOfArticles = articles.map(function (article) {
    return article.name
});

console.log(filterArticles);
console.log(nameOfArticles);



















var ticTacToe = {
    player1: {
        username: "blue",
        playingAs: "X"
    },
    player2: {
        username: "red",
        playingAs: "O"  
    },
    board: [
        ["X", null, "O"],
        ["X", "O", "O"],
        [null, "X", "O"]
    ]
}