function calculateCeilingAverage(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }

    let average = sum / arr.length;
    let ceilingAverage = Math.ceil(average);

    return ceilingAverage;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = calculateCeilingAverage(numbers);
console.log("Ceiling Average:", result); // Output: Ceiling Average: 3
