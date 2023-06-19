//Delete specefic elemet

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

//remove first element
numbers.shift();

//Remove last element
numbers.pop();
numbers.length = numbers.length - 1;

//Remove inside elemnts -- Splice using index
numbers.splice(4, 4);

//Remove Inside Elements ---- Splice using value
const toBeDeleted = 5;
for(let i =0; i < numbers.length; i++){
    if(numbers[i] === toBeDeleted){
        numbers.splice(i, 1)
    }
}

//Filter Array
const toBeDeleted1 = 3;
numbers = numbers.filter(item => item !== toBeDeleted1)

//Delete Operator
// numbers[1] = undefined;
delete numbers[1];

//Reset whole array
let x = [1,2,3];
let y = x;
x = [];
console.log(x,y);

//Aleternative
let xx = [1,2,3];
let yy = xx;
xx.length = 0;
console.log(xx, yy);

//Reset array using while loop
while (numbers.length) numbers.pop();

console.log(numbers);