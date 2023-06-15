let multiplyTable = +prompt("Enter a number to show its Multiplication  table");
let tableLength = +prompt("Enter the length of the Multiplication of table");

for(let i = 1; i <= tableLength;i++){
    let table = multiplyTable * i;
    console.log(`${multiplyTable} x ${i} = ${table}`);
}