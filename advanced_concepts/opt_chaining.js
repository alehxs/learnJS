const obj = undefined;

obj?.hello;

const arr = [1,2,3];

arr?.[0];

const foo = (a, b) => {}

foo?.(1,2);


// so ? is used to check if the object is null or undefined
// so for obj?.hello, obj is undefined so error is thrown