// let arr = [1 , 8 , 9, 36, 25, 18];
// // val>9

// let newArr = arr.map((currentElement, Index, arrPasd) => {
//     return currentElement>9;
// });

// console.log(arr);
// console.log(newArr);



/* ### Challenge */
// 1. Find the square root of each element in given array.
// 2. Multiply each element by 2 and return only those elements which are greater 10.
// Given arr = [25, 36, 49, 64, 81]

// // SOL1:
// let arr = [25, 36, 49, 64, 81];

// let newArr = arr.map((ele, index, passArr) => {
//     return Math.sqrt(ele);
// });

// console.log(newArr);

// // SOL2:
// let arr = [2, 3, 4, 6, 8];

// let newarr = arr.map((ele) => {return ele*2;}).filter((currEle) => {return currEle>10});
// console.log(newarr);


/* ###Reduce Method */
// Used for flatten an array means to convert the 3d or 2d array into a single dimensional array.


// // Find out the sum of the given array.
// let arr = [2, 3, 4, 6, 8];

// let newArr = arr.reduce((accumulator, ele, index, arrPass) => {
//     return accumulator = accumulator + ele;
// });

// console.log(newArr);


// // Covert 2D and 3D array in to one dimensional array. (Flatten an array)
// let arr = [
//     ['g1', 'g2'],
//     ['g3', 'g4'],
//     ['g5', 'g6']
// ];

// let flattenArr = arr.reduce((acc, ele) => {
//     return acc.concat(ele);
// });

// console.log(flattenArr);

