function largestEl(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    };
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        };
    };

    return largest;
}

console.log(largestEl([2, 4, 1, 3, 5]));
