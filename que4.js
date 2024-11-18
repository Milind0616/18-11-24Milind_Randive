function reverseOdds(arr) {
    let oddNumbers = [];

    // Collect odd numbers
    for (let num of arr) {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }

    // Print the count of odd numbers
    console.log(oddNumbers.length);

    // Reverse the odd numbers array
    oddNumbers.reverse();

    // Print each reversed odd number
    for (let num of oddNumbers) {
        console.log(num);
    }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7];
reverseOdds(numbers);
