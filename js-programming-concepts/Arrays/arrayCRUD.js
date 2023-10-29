let names = ['AGYAT', 'AADARSH', 'GIRI', 'MOHIT']; //Intializarion of an array

// names.push('Surya'); // It adds elements in the last of the array and returns the new length of the array.
// let val = names.push('Arya');
// console.log(val);

// names.push('Unknown', 'Helvetica', 'Sans-serif', 'Agyat'); // Can add multiple values.

// names.unshift('Hello', 'Duniya'); //It will add elements in the starting.


// console.log(names);
// names.pop(); // Deletes the last element of the array reduces the length of the array.

// console.log(names);
// names.shift(); // Deletes the first element of the array reduces the length of the array.

/* ### SPLICE METHOD */
// 1. Add Dec at the end of the array.
// 2. What is the return value if the splice method? // It will return the deleted elements count.
// 3. Update march to March.
// 4. Delete June from the array.

let months = ['Jan', 'march', 'April', 'June', 'July'];

// // Sol1:
// months.splice(months.length,0, 'Dec');
// console.log(months);

// // Sol2:
// const spliceVal = months.splice(5,0, 'Dec');
// console.log(spliceVal);

// // Sol3:
// // Method-1
// months.splice(1,1, 'March');
// console.log(months);

// // Method-2
// let indexOfmarch = months.indexOf('march');
// if(indexOfmarch != -1){
//     months.splice(1,1, 'March');
// }
// console.log(months);

// // Sol4:
// let indexOfJune = months.indexOf('June');
// if(indexOfJune != -1){
//     months.splice(indexOfJune, 1);
// }
// console.log(months);

// Splice Extra
let indexOfMarch = months.indexOf('march');
if(indexOfMarch != -1){
    months.splice(indexOfMarch, Infinity);
}
console.log(months);


// console.log(names);

