// This is a variable Scope global
var firstName = "Diego";

// Here is when use the scope global of firstName y the function fullName
// We cannot use the local variable 'lastName' which is declared within the function 'fullName' outside of its scope.
function fullName() {
    var lastName = "De Granda";
    return firstName + " " + lastName;
}

console.log(fullName());
