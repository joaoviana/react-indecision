const square = function(x) {
    return x*x;
};

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => (x*x);

console.log(squareArrow(3));

const getFirstName = (name) => {
    return name.split(' ')[0];
}

const getFirstNameShortHand = (name) => name.split(' ')[0];

console.log(getFirstName('ok Viana'));
console.log(getFirstNameShortHand('Joao Viana'));