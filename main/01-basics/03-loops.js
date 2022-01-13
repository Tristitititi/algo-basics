/**
 * Write a function that returns the index of the first occurence of an element in the provided array
 */
export function find(array, element) {
    let i = 0
    while (i < array.length) {
        console.log(array[i])
        if (array[i] === element) {
            return i
        }
        ++i
    }
}
let resultat = find([1, 3, 12, 6, 15, 16], 15)
console.log('Le résultat est ' + resultat)

/**
 * Write a function that return the input word with reversed letters
 * 
 * string.split("") to obtain an array of each letter of a word
 * ["w", "o", "r", "d"].join("") to join the elements of an array
 */
export function reverseString(word) {
    /*let wordArray = word.split("")
    let response = []
    for (i = 0; i < wordArray.length; i++)
    response[i] = wordArray[word.array.length - 1 - i]*/
}

//resultat = reverseString (string.split("w","o","r","l","d"))
//console.log('Le résultat est ' + resultat)

/**
 * Write a function to check which number nearest to the value 100 among two given integers. Return 0 if the two numbers are equal
 */
export function closestTo100AmongArray(numbers) {

}

/**
 * A pandemic is propagating ! Every day, number of infected persons doubles.
 * Write a function that forecasts the number of infected people at after a given
 * [dayCount], starting from the given [initialInfectedCount] on the 1st day.
 */
export function pandemicForecast(initialInfectedCount, dayCount) {

}

/**
 * FizzBuzz ....
 * 
 * Write a function that takes an array or numbers as an argument and return a concatenation string
 * of its values and replace every number divisible by 3 with "fizz", every number divisible by 5
 * with "buzz" and if the number is divisible by both 3 and 7, it is replaced by "fizzbuzz"
 */
export function fizzBuzz(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        let test = numbers[i]
        if (test % 3 === 0 && test % 7 === 0) {
            result[i] = 'fizzbuzz'
        } else if (test % 3 === 0) {
            result[i] = 'fizz'
        } else if (test % 7 === 0) {
            result[i] = 'buzz'
        } else {
            result[i] = test
        }
    }
    return result.join("")
}



/**
 * Write a function that takes an array of numbers as an argument and returns an same size array with its items sorted
 */
export function sort(numbers) {

}

/**
 * Write a function that computes the result of the factorial of the provided number.
 * 
 * Factorial of n is the product of all positive integers smaller or equal to n :
 * 4! = 4 x 3 x 2 x 1
 */
export function factorial(n) {

}

/** 
 * Similarly, write a function that computes the result of the fibonacci sequence for the provided n integer value.
 * 
 * note: Fibonacci suite is defined as a sequence such as each number is the sum of the two preceding ones, starting from 0 and 1.
 * 
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(2) = 1 + 0 = 1
 * fibonacci(3) = 1 + 1 = 2
 * fibonacci(4) = 2 + 1 = 3
 * fibonacci(5) = 3 + 2 = 5
 * 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
 * 
 */
export function fibonacci(n) {

}
