/**  Declaration - var*/
// 1.
var a =123
function fn(){
    var a =657
    console.log(a)    //657
}
fn()
console.log(a)      //123

// 2.
var b =45
function fn(){
     b =657
    console.log(b)    //657
}
fn()
console.log(b)      //657

/**  Declaration - let */
// 1.
let c =88
function fn(){
    let c = 212
    console.log(c)    //212
}
fn()
console.log(c)      //88

// 2.
let d =45
function fn1(){
    d =657
    console.log(d)    //657
}
fn1()
console.log(d)      //657

/**  Declaration - const */
// 1.
const e =99
function fn2(){
    const e = 11
    console.log(e)    //11
}
fn2()
console.log(e)      //99

// 2.
const f =45
function fn3(){
   // f =657              // Error
    console.log(f)    
}
fn3()
console.log(f)      //45


/***
 * Accessing variabl;e defined in function scope
 */

function fnScope(){
    var g = 10
}
fnScope()
// console.log(g)   //Error - Reference error