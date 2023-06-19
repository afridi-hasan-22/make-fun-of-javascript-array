//fill array manual way
const arr1 = new Array(10);
for(let i = 0; i < arr1.length; i++){
    arr1[i] = false
}
console.log(arr1);

//Array Fill
const arr2 = new Array(10);
arr2.fill(0);
console.log(arr2);

const arr3 = ['Afridi', 'Abrar', 'Abdur' ];
arr3[0] = 'Afridi Hasan';
arr3[1] = 'Abrar Sunny';
arr3[2] = 'Abdur Rahim';
console.log(arr3);

//Array fill and update
const response = new Array(9);
response.fill(undefined);
for(let i= 0; i < response.length; i++){
    const rand = Math.floor(Math.random() * 10 + 1);
    response[i] = rand > 5 ? 'O' : 'X';
}

console.log(response);