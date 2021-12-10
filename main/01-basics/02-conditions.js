/**
 * Write a function that returns "raspberry !" if the provided fruit is a raspberry, and "doh !" otherwise
 */
export function basicCondition(fruit) {
    if (fruit == "raspberry")
    return "raspberry !"
    else
    return "doh !"
}

/**
 * Write a function that generates a random number between 1 and 10 and takes a number as an argument.
 * It must return : "higher !" if the random number is greater, "lower..." if it is smaller, and
 * "Yes ! The number was {number}" if it is equal
 */
export function guessTheNumber(n) {
    const random = Math.floor(10 * Math.random() + 1)
    if (n > random)
    return "higher !"
    else if (n < random)
    return "lower..."
    else
    return "Yes ! The number was {"+ random + "}"
}

/**
 * Write a function that computes the sum of the two given integer values. If the two values are the same, then return triple their sum
 */
export function sumOrTriple(a, b) {
    if (a==b)
    return ((a + b) * 3)
    else if (a!=b)
    return (a + b)
}

/**
 * Write a function to get the absolute difference between n and 51. If n is greater than 51 return triple the absolute difference
 * 
 * To get the absolute difference of a number, use Math.abs(number)
 */
export function absoluteDiff(n) {
    if (n > 51)
    return (Math.abs(n - 51) * 3)
    else
    return Math.abs (n - 51)
}

/**
 * Write a function to check two given integers, and return true if one of them is 30 or if their sum is 30
 */
export function is30OrSumIs30(a, b) {
    if (a === 30 || b === 30)
    return true
    else if (a + b === 30)
    return true
    else
    return false
}

/**
 * Write a function to check whether a given positive number is a multiple of 3 or a divisible by 7
 */
export function isMultipleOf3OrDivisibleBy7(n) {
    let result;
    if (n % 7 == 0 || n % 3 == 0) {
    result = true }
    else {
    result = false }
    return result;
}

/**
 * Write a function to check which number nearest to the value 100 among two given integers. Return 0 if the two numbers are equal
 */
export function closestTo100(x, y) {
    let result;
    if (Math.abs(100 - x) > Math.abs(100 - y)) {
    return (y) }
    else if (Math.abs(100 - x) < Math.abs(100 - y)) {
    return (x) }
    else {
    result = 0 }
    return result;
}

/**
 * Write a function that returns the categorize of the provided word
 * 
 * Those words and categorizes can be : 
 * raspberry, orange, apple, banana => FRUIT
 * paris, london, new-york, berlin => CITY
 * cat, dog, bird, horse, fish => ANIMAL
 * 
 * if a word is unknown, "UNKNOWN" should be returned
 */
export function categorizeWord(word) {
    if (word === "raspberry" || word === "orange" || word === "apple" || word === "banana")
    return "FRUIT"
    else if (word === "paris" || word === "london" || word === "new-york" || word === "berlin")
    return "CITY"
    else if (word === "cat" || word === "dog" || word === "bird" || word === "horse" || word === "fish")
    return "ANIMAL"
    else
    return "UNKNOWN"
}