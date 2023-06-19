//update existing element

//Easy One
const arr = [1,2,3,7,5,6];
arr[3] = 4;
console.log(arr);

//Array Of Object
const student = [
    {id : 1, name: 'Abdur Rahim'},
    {id : 2, name: 'Abrar Sunny'},
    {id : 3, name: 'Afridi'},
    {id : 4, name: 'Raysul Irfan'},
    {id : 5, name: 'Jamshed Patwary'}
];
const givenID = 3;
const updateName = 'Afridi Hasan';

for(let i = 0; i < student.length; i++){
    if(givenID === student[i].id){
        student[i].name = updateName;
        break;
    }
}
console.log(student);
