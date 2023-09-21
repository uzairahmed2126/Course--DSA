// 1. find the value up to the given value
function fn(arr, lv) {
    // return arr.splice(0,5)
    let a = [];
    for (let i = 0; i < lv; i++) {
        a.push(arr[i])
    }
    return a
}
// console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))


// 2. reverse the given value
function reverse(arr, lv) {
    let a = [];
    for (let i = lv - 1; i >= 0; i--) {
        a.push(arr[i])
    }
    return a
}
// console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))


// 3.Compare
function compare(arr, lv) {
    let a = [];
    for (let i = lv - 1; i >= 0; i--) {
        if (lv < 9) {
            a.push(arr[i])
        } else {
            console.log('Invalid number')
        }
    }
    return a
}
// console.log(compare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

// 4. Number Reverse
function NumberReverse(num) {
    let str = String(num)
    let str1 = ''
    for (let i = str.length - 1; i >= 0; i--) {
        str1 += str[i]
    }
    return Number(str1)

}
// console.log(NumberReverse(642))


// 5.print the number from start to end value
function num(start, end) {
    for (let i = start; i <= end; i++) {
        // console.log(i)
    }
}
num(1, 22)



// 1.
function arrRunGiveNum(arr, num) {
    // return arr.splice(arr,num)
    // let a=[]
    // for(let i = 0; i<num;i++){
    //     a.push(arr[i])
    // }
    // return a
}
// console.log(arrRunGiveNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

// 2.
function arrRunGiveNum(arr, num) {
    return arr.reverse(num)
    // let a=[]
    // for(let i = num-1; i>=0 ;i--){
    //     a.push(arr[i])
    // }
    // return a
}
// console.log(arrRunGiveNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

// 3.
function numberReverse(num) {
    let a = String(num)
    let str=''
    for (let i = a.length-1; i >=0; i--) {
        str+=a[i]
    }
    return Number(str)
}
// console.log(numberReverse(12345));

// 4.

function startCountEndCount(start,end){
    for(let i = start;i<=end;i++){
        console.log(i)
    }
}
startCountEndCount(1, 30)