const animal = {
    dna: 123,
    legs: {
        front: 2, back: 2
    },

    sleep(){
        console.log('zzz');
    }
};

const dog = {
    bark(){
        console.log('woof');
    }
}

// const p1 = Object.getPrototypeOf(animal);
// console.log(p1);

// const p2 = Object.getPrototypeOf(p1);
// console.log(p2);

Object.setPrototypeOf(dog, animal); // dog is now a prototype of animal
console.log(dog.dna);
