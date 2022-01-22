let array1 = [1, 2, 3];
let array2 = [15, 54, 48, 410];

let spredOperator = [...array1, ...array2];

console.log(spredOperator);

let concated =  [].concat(array1, array2);

console.log(concated);