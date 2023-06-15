let A = [24, 53, 78, 91, 12];
let LargestNumber = A[0];
for(let i = 1; i < A.length; i++){
    if(A[i] >= LargestNumber){
        LargestNumber = A[i];
    }
}
document.write("The Largest Number is " + LargestNumber);