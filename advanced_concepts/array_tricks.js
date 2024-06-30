
const arr = [1,2,3,4,4,5]

const arr2 = Array(100).fill(0).map((_, i) => i + 1);

const arr3 = [...Array(100).keys()];

// console.log(arr2);
// console.log(arr3);

//get unique items
const unique = [...new Set(arr)];

console.log(unique);

for(const val of arr){
    console.log(val);
}

//usually avoid for in loops
for (const val of arr){
    console.log(val);
}
//imperative
for(const [i, val] of arr.entries()){
    console.log(i, val);
}

arr.forEach();
arr.map();
arr.filter();
arr.find();
