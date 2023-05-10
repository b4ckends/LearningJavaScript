function newUser(name, age, country) {
    var name = name || 'Dwayne';
    var age = age || 51;
    var country = country || 'USA';
    console.log(name, age, country);
};

newUser();
newUser('Dog', 8, 'MX');

function newAdmin(name = 'Jeff', age = 59, country = 'USA') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Elon', 51, 'USA');
