let array = [10, 20, 30, 4, 8, 100];

let arrayAsc = array.sort(function(n1, n2){
    return n1 -n2;
});

console.log("sort asc : ", arrayAsc);


let arrayDesc = array.sort(function(n1, n2){
    return n2 -n1;
});


console.log("sort asc : ", arrayDesc);