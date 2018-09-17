class Person {
    constructor(name = 'Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, my name is ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
};

class Student extends Person {
    constructor(name, age, bachelor) {
        super(name, age);
        this.bachelor = bachelor;
    }
    hasMajor() {
        return !!this.bachelor;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` and studying ${this.bachelor}`;
        }
       return description;
    }
};


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();

        if(this.hasHomeLocation()){
            description += ` and visiting from ${this.homeLocation}.`;
        }
       return description;
    }
}

// const me = new Student('Joao Viana', 23, 'Music Computing');
// console.log(me);
// console.log(me.getDescription());

// const other = new Student();
// console.log(other);


const me = new Traveller('Joao Viana', 23, 'Portugal');
console.log(me);
console.log(me.getGreeting());

const other = new Traveller();
console.log(other);
console.log(other.getGreeting());