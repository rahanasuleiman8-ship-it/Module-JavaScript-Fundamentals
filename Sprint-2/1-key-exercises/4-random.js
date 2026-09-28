const minimum = 1; // Sets the lowest possible number that can be generated
const maximum = 100; // Sets the highest possible number that can be generated


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // calculates the total number of possible values between minimum and maximum, inclusive.
// Multiplying Math.random() by this total count of numbers gives a random float from 0 up to (but not including) that count.
// Adding + minimum at the end shifts the whole set of numbers up so that the lowest possible value becomes minimum rather than 0.

2
// Math.random() returns a random decimal between 0 and 1
// Math.random() * maximum(100) returns a random decimal between 0 and 99.999  
// Math.floor() rounds up the decimal to the nearest whole number
// maximum and minimum calculates thee total output of the number(100)

// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num); // num represents a random whole number between 1 and 100 
