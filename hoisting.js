// Hoisiting meands moving the declaration to the top of the current scope 
/***
 * Hoisting - var
 */
// 1.
a =5
console.log(a)              // 5
var a;

// 2.
console.log(b)
var b=5                 //undefined

/***
 * Hoisting - let
 */

// 1.
c =6        // Reference Error
console.log(c)              // 5
let c;

// 2.
console.log(d)      // Reference error
let d=7  

// 3.
// global scope
const bar = 41;
console.log(bar); // 41

if (true) { // block scope
 console.log(bar); // ReferenceError (not 41) <-- PROOF OF THE HOISTING / TDZ
 const bar = 42;
 console.log(bar); // 42
}

console.log(bar); // 41


// let and const are also hoisted but are temporal dead zone(can't be accessed unitl it is initialized ) above example 3. displays that 

m=10
console.log(m)


/**
 * Function hoisting - Hoisting occurs
 */
fn3()
function fn3(){
    console.log(95)
}