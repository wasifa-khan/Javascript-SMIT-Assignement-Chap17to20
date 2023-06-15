let A = [24, 53, 78, 91, 12];
let smallestNumber = A[0];
for(let i = 1; i < A.length; i++){
    if(A[i] < smallestNumber){
        smallestNumber = A[i];
    }
}
document.write("The smallest Number is " + smallestNumber);