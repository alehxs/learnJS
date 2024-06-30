function sayHi(message) {
    return 'Said...' + message;
}

// const sayHi = function(message){
//     return 'Said...';
// }

function funWrapper(callback){
    callback('Called by wrapper');
}

funWrapper(sayHi);
funWrapper(m => console.log(m));

function double(x){
    return x * 2;
}

const nums = [1,2,3]
const doubled = nums.map(double);

funWrapper((doubled => console.log(doubled)));