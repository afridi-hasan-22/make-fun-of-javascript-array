const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
//literal pattern

arr[99] = 100; 
arr[65] = 66;   // length = last index + 1;
console.log(arr);                  // last index = length - 1;
console.log(arr.length);

const names = [
    'Afridi Hasan',
    'Abdur Rahim',
    'Abrar Sunny',
    'Jamshed Pawarry',
    'Arafat Hossain'
];
names[names.length] = 'Sifat Ahmed'
console.log(names);
console.log(names.length);