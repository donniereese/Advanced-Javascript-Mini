/* The four rules for 'this';
* in your own words. explain the four rules for the "this" keyword below.
* 1. If a function is created in the topmost global scope, it's this will point to the window object or top global object in node.
* 2. If this is called from a function that has a dot (.) before it, the object before the dot is the this context.
* 3. If this is used within a constructor or class, this points to that instance of the constructor or class.
* 4. The only time this is explicitly defined is whenever using .call or .apply, where you are defining the context.
* write out a code example of each explanation above
*/

// First Rule
function arcticOcean () {
    console.log(this); // is window or node instance
}

// Second Rule
const pacificOcean = function() {
    this.name = "Pacific Ocean";
    const barrierReef = function() {
        console.log(this); // is pacificOcean;
    };
}

// Third Rule
const AtlanticOcean = function() {
    this.name = "Atlantic Ocean"; //`this` is the function atlanticOcean

    this.sayName = function() {
        console.log('I am the ', this.name);
    };
}
const atlanticOcean = new AtlanticOcean();
// atlanticOcean.sayName();

// Fourth Rule * you may want to use your third rule's example to accomplish this

atlanticOcean.sayName.call(pacificOcean);  // Should say "I am the Pacific Ocean".

// explain closure
/* Closure is method for referencing things in a way where scope bubbles up but not in.
 * For instance, within a function, you can call variables that were defined outside of the function. The way Javascript
 * looks for the variable you reference is that if it's not within a certain scope, it will travel up the scope until
 * it finds it, as long as it's not somehow protected and not within another function.  The lookup will bubble up,
 * but not go back down into any of the functions it finds to see if the variable exists.
 *
 * Also, when you refere to a variable in another scope, it can see the variables above it, even if it's outside of the
 * scope from where you call it.
 */

function foo () {
  console.log(this); // what does this point to?  //The global or window object.
};

const counterFunction = () => {
  // this code is broken. figure out why, and tell us where the closure is when you fix it
  let count = 0;
  const changeCount = (value) => {
    count += value;
  };
  return {
    increment: () => {
      changeCount(1);
    },
    decrement: () => {
      changeCount(-1);
    },
    total: () => {
      return count;
    }
  }
};
const counter = counterFunction();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.total());


// create a constructor function called "Car"
function Car(options) {
  // car takes an options object as its only argument
  // your options object should have "make", "model", "year" properties on it
  this.make = options.make;
  this.model = options.model;
  this.year = options.year;
  // assign these properties you pass in with options to the constructors 'this' object.
  // add a speak() method to your object that when called will log out the car's make model and year.
  this.speak = () => {
    return `The ${this.make} ${this.model} was driven in ${this.year}`;
  };
}
const car = new Car({
    make: 'Oscar Myer',
    model: 'Weiner Mobile',
    year: '1985'
});

console.log(car.speak());
// when you're done un comment the next few lines and run the file here in node `node app.js`.

const herby = new Car({make: 'Volkswagen', model: 'Beetle', year: '1963'});
console.log(herby.speak());
const goldfinger = new Car({make: 'Aston Martin', model: 'DB5', year: '1964'});
console.log(goldfinger.speak());


// once you get done with this, redo it all using the class keyword and a constructor function.
class Carriage {
    constructor(options) {
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }

    speak() {
        return `The ${this.make} ${this.model} was driven in ${this.year}`;
    }
}
// extra credit

// we didn't touch on Recursion in the lecture yet, but you're going to build a recursive function now


let n = 10;
while(n >= 1) {
  console.log(n);
  n--;
}
// write a function called countDown that does the exact same thing as above, but calls itself until it can't anymore.
  // hint-> your base case will look like the logic in the while loop.
  //
function countdown(x) {
    console.log(x);
    x--;
    if( x >= 1 ) {
        countdown(x);
    }
}

countdown(12);
