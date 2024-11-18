function findMinAndMax(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let num of arr) {
        if (num < minValue) {
            minValue = num;
        }
        if (num > maxValue) {
            maxValue = num;
        }
    }

    console.log("Minimum value:", minValue);
    console.log("Maximum value:", maxValue);
}

// Example usage:
const myArray = [5, 2, 9, 1, 7];
findMinAndMax(myArray);
