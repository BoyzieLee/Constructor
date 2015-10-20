import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Constructor (Blueprint)
let Animal = function (name, type, legs, tail, sound) {

  this.name = name;
  this.type = type;
  this.legs = legs;
  this.hasTail = tail;

// this is realted to the instace that was crated for animal.
// i.e. peanut
  this.speak = function() {
    return this.name + 'says:' +'sound';
  };

};


// Instance 
window.peanut = new Animal('Sparky', 'Dog', 4, true, 'bark');
window.jaws = new Animal('Burce', 'Shark', 0, true, 'da na...');
window.george = new Animal('Tyler', 'Monkey', 2, true, 'ooh ah aha ah');



console.log(peanut.type);
console.log(peanut.speak());

// var x = {};
// var y = new Object();
// console.dir(x);
// console.dir(y);

// var a = [];
// console.log(a);

// var b = new Array();
// console.
