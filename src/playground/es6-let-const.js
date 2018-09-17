var nameVar = 'Joao';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jane';
nameLet = "Julia"
console.log('nameLet', nameLet);

const nameConst = 'Janet';
console.log('nameConst', nameConst);

// Block scoping 

var fullName = 'Joao Viana';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
