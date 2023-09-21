// 1. sum of the array
function sumOfArrar(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
// console.log(sumOfArrar([1, 2, 3, 4]))

// 2. each multiplication

function eachMultiplication(arr) {
    let sum=[]; 
    for (let i = 0; i < arr.length; i++) {
        //  sum.push(arr[i]*arr[i]) 
         sum[i]=(arr[i]*arr[i]) 
    }
    return sum;
}
console.log(eachMultiplication([1, 2, 3, 4]))