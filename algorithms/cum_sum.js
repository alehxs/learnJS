/*
    Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.  
*/

export function cumSum(arr){
    return arr.reduce((acc, currValue) => acc + currValue);   
}

function sum (arr){
    let total = 0;
    
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        total += arr[i];
    }
    return total
}



const arr1 = [1,2,3,4,5,6,7,8,9,10]

console.log(cumSum(arr1));

console.log('sum: ', sum([1,3,5,7]));