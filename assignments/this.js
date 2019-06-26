/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this is used in other languages but it worksdifferently in JS compared to others 
* 2. this is used instead of the object name
* 3. using this gives you all of the objects keys and values
* 4. when using this it doesnt matter where the function is written but is !important to where and when the function is called
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function Music (name) {
    console.log(this);
    return name;
}

Music('Evanescence');

// Principle 2
// code example for Implicit Binding

const amy = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting}, my name is ${name} from the band Evanescence!`);
        console.log(this);
    }
}

amy.sayHello('Amy');

// Principle 3
// code example for New Binding

function Me (about) {
    this. info = 'Loralie ';
    this.about = about;
    this.speak = function () {
        console.log(this.info + this.about);
        console.log(this);
    };
}
const Lor = new Me ('Loves Lambda School');
Lor.speak();

// Principle 4
// code example for Explicit Binding
function Loralie (about) {
    this. info = 'Loralie ';
    this.about = about;
    this.speak = function () {
        console.log(this.info + this.about);
        console.log(this);
    };
}
const lor = new Loralie ('Loves Lambda School');
const lorX = new Loralie ('Hates School');


lor.speak.call(lorX);
lorX.speak.apply(lor);

lor.speak();
lorX.speak();
