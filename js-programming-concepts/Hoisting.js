// In JavaScript what its hoisting means,

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// It's actually a definition for hoisting,

// In simple explanation for Hoisting with code,

console.log(Hoist);
var Hoist = ’The variable Has been hoisted’;
//output : undefined//
actually, JavaScript has hoisted the variable declaration. This is what the code above looks like to the interpreter

var Hoist;
console.log(Hoist);
Hoist = ’The variable Has been hoisted’;
JavaScript only hoists declarations, not initialization.

// Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// so this also match for a variable of function-level scope also hoisted
