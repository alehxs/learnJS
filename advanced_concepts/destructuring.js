const dog = {
    name: 'popis',
    age: 15,
    bark(){
        console.log('roof')
    }
}

// const name = dog.name;
// const age = dog.age;

const {name: fullName, age} = dog;
console.log(fullName, age);

const arr = ['foo', 'bar', 'baz'];

// const [a, b, c] = arr;

const c = arr[2];
console.log(c);
// console.log(a, b, c);