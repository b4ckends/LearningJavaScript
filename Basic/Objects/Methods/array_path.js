var articles = [
    { name: "Bicycle", cost: 2000 },
    { name: "Tv", cost: 2500},
    { name: "Book", cost: 320},
    { name: "Cellphone", cost: 10000},
    { name: "Laptop", cost: 20000},
    { name: "Keyboard", cost: 500},
    { name: "Headphones", cost: 1700},
];

var nameOfArticles = articles.map(function (article) {
    return article.name;
});

console.log("\n");
for (var i = 0; i < articles.length; i++) {
    console.log(`Article ${i}: ${nameOfArticles[i]}`);
};

var findArticle = articles.find(function (article) {
    return article.name === "Laptop";
});

console.log("\n");
console.log(`Specified article finded: ${findArticle.name}`);

console.log("\n");
articles.forEach(function (article, loop) {
    console.log(`${loop + 1}: ${article.name}`);
});

var cheapArticles = articles.some(function (article) {
    return article.cost <= 700;
});

console.log(`\nThere are cheap articles: ${cheapArticles}`);
