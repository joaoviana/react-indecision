const add = function(a,b) {
    console.log(arguments);
    return a + b;
}

console.log(add(4,12312));

const addExample = (a,b) => {
    //console.log(arguments); this does not work
    return a + b;
}

console.log(addExample(4,12312));



// -- this keyword

// const user = {
//   name: 'Joao Viana',
//   cities: ['Porto, London, Brussels'],
//   printCities: function() {
//       const that = this;
//       this.cities.forEach(function(city) {
//           console.log(that.name +' has lived in ' +  city);
//       });
//   }
// };


// const user = {
//     name: 'Joao Viana',
//     cities: ['Porto, London, Brussels'],
//     printCities: () => { // this arrow function does not bind its own value; it goes up to the parent scope
//         this.cities.forEach((city) => {
//             console.log(this.name +' has lived in ' +  city);
//         });
//     }
//   };


const user = {
    name: 'Joao Viana',
    cities: ['Porto, London, Brussels'],
    printCities() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);


        // this.cities.forEach((city) => {
        //     console.log(this.name +' has lived in ' +  city);
        // });
    }
};

console.log(user.printCities());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2 ,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

console.log(multiplier.multiply());