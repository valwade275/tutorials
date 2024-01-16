// Call a function 'add' that has not yet been declared.
console.log( 'Hoisted: ' + add( 100, 200 ) )

// Declare the 'add' function.
function add( numOne, numTwo ) {
  return numOne + numTwo
}

// Assign the 'add' function to a variable, then call it. 
let addition = add
console.log( 'Assigned: ' + addition( 32, 64 ) )

// Assign a similar but anonymous function to a variable, then call it.
let anon = function ( numOne, numTwo ) { 
  let result = numOne + numTwo ; return result 
}
console.log( 'Anonymous: ' + anon( 9, 1 ) )

// Assign the value returned from a self-invoking function to a variable.
// Display that value.
let iffy = ( function () {
  let str = 'Self Invoked Output' ; return str
} ) ( ) 
console.log( iffy )