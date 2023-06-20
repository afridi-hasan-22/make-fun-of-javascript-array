// Slice Array into Muliple Array

const arr = [1,2,3,4,5,6,7,8];

// Slice
const arr1 = arr.slice(0, 4);
console.log(arr1);

// Clone  Array
const cloned = arr.slice();
console.log(cloned);
console.log(arr === cloned);

//Array like Objects to Array
function toArray(){
    return Array.prototype.slice.call(arguments);
}

const argu = toArray(1,2,3,4, 'test');
console.log(argu);
console.log(argu.__proto__.constructor);