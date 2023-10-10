// Scope denotes a range of access. By default, Javascript places you in the window scope, sometimes known as the root scope. A box with a boundary for variables, functions, and objects is all that the scope is. Variables are constrained by these bounds, which also affect whether you have access to the variable or not. It restricts a variable's accessibility or visibility to other code segments. Two different definitions exist for a scope:

// - Access to everything inside the bounds (inside the box) is permitted by local scope.
// - Everything that is "global in scope" or "outside the box" 
// - Block Scope encompasses anything inside the limits, however it only functions with the keywords var and const. The var keyword does not make it work. 

function showName() 
	let name = "Allan"; 
showname() 
console.log(name);
//output: Uncaught ReferenceError: showname is not defined


function showName(){
  let name = "Allan"; 
  console.log(name); 
}
showName(); 
//output: Allan

