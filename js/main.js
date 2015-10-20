import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

// Constructor (Blueprint)
let Animal = function (params) {
  
  params = params || {};

  this.name = params.name;
  this.type = params.type;
  this.legs = params.legs;
  this.hasTail = params.tail;

// this is realted to the instace that was crated for animal.
// i.e. peanut
  this.speak = function() {
    return this.name + ' says: ' + params.sound;
  };

};


// Instance 
window.peanut = new Animal('');



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
