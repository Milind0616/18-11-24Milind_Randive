function reverseEvens(arr) {
    let evenNumbers = [];

    // Collect even numbers
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    // Print the count of even numbers
    const K = evenNumbers.length;
    console.log(K);

    // Reverse the even numbers array
    evenNumbers.reverse();

    // Print the reversed even numbers
    console.log(evenNumbers.join(" "));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
reverseEvens(numbers); // Output: 4 8 6 4 2
