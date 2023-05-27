const regex = /(\d{4})-(\d{2})/;
const matchers = regex.exec('2023-05-20');
console.table(matchers);