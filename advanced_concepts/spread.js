const obj1 = { 
    first: 'a',
    second: 'b',
    third: 'c'
}

const obj2 = {
    third: 'd',
    fourth: 'e',
    ...obj1,
}

// const full = Object.assign({}, obj1, obj2);
// const full = {...obj1, ...obj2}
console.log(obj2);

