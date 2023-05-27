const user = { username: 'User', age: 32, country: 'GB' };
const { username, ...values } = user;
console.log(username);
console.log(values);