// 1. sum of the array
let sum = 0;
function sumOfArrar(arr) {
    // recurstion
    if (arr.length <= 0) return;
    // console.log(sum += arr.shift());
    sumOfArrar(arr);
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum;
}
// sumOfArrar([1, 2, 3, 4]);

// 2. each multiplication

function eachMultiplication(arr) {
    let sum = [];
    let i=0;
    // for (let i = 0; i < arr.length; i++) {
    //     //  sum.push(arr[i]*arr[i]) 
    //     sum[i] = (arr[i] * arr[i])
    // }
    // return sum;
    if(arr.length<=0) return;
    console.log(sum[i] = arr[i]*arr[i])
    eachMultiplication(arr)
}
eachMultiplication([1, 2, 3, 4])
// eachMultiplication([1, 2, 3, 4])

// 3. largest number
function largestNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 200) {
            sum = arr[i]
        }
    }
    return sum
}
// console.log(largestNumber([133, 242, 3, 4]))

// 4. table of arguments
function table(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        sum[i] = arr[i] * 10
    }
    return sum
}
// console.log(table([1,2,3,4]))

// 5. reverse array
function reverse(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum[i] = arr[i]
        }
    }
    return sum
}
console.log(reverse([1, 2, 3, 4]))