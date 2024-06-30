console.log("Hello World!");

let luckyNum;

console.log(luckyNum); // undefined

luckyNum = null;

luckyNum = 'twenty-three';

luckyNum = new Object();


const name = 'jeff'; 

var bad = 'avoid var'

let a = 'global';

function fun(){
    let a = 'function';
    if (true){
        let a = 'block';

    }
}

function add(a,b) {
    return a + b;
}

function higherOrder(fun) {
    fun();
    return function () {

    }
}

function wtfisThis() {
    console.log(this);
}

const person = {
    wtfisThis: () => {
        console.log(this);
    }
}

const num = 23;
const obj = new Object();

//num is passed by value
//obj is passed by reference
someFun(num, obj); 

const human = {
    dna: 'ATCG',
    name: 'Jeff',
    born: Date.now(),
    walk(){
        console.log('walking');
    }
}

class Human{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log('walking');
    }
}

const list = ['foo', 'bar', 'baz'];

const uniq = new Set(list); // holds unique values

const dict = new Map([
    ['key', 'value']
]);

const promise = new Promise(
    (resolve, reject) => {
        //do something async

        if (greatSuccess){
            resolve('success');
        }
        else {
            reject('failure');
        }

    }
)