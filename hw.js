//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function wordMatch(aStr, anArr){
    for (let i = 0; i < anArr.length; i++) {
        if (aStr.toLowerCase().includes(anArr[i].toLowerCase())) {
            console.log(`Matched ${anArr[i]}`) 
        } else {
            console.log('No match')
        }
    }
}
//Call method here with parameters
wordMatch(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given
const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+=2) {
// Kevin Tran suggested I look up method on https://www.javascripttutorial.net/javascript-array-splice/
        arr.splice(i, 1, "even index")
    }
}
replaceEvens(arr)
console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


/* Codes Wars #1
DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
make_negative(1);  # return -1
make_negative(-5); # return -5
make_negative(0);  # return 0

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

Solution:
def make_negative( number ):
    if number < 0:
        return number
    elif number > 0:
        return number * -1
    else: 
        return 0
*/
function  make_negative(number){
    if (number < 0){
        return `${number}`;
} else if (number > 0) {
    return number * -1;
} else {
    return 0;
}
}
console.log(make_negative(69))

/* Codes Wars #2
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

SOLUTION: 
def even_or_odd(number):
  if number % 2 == 0:
    return "Even"
  else:
    return "Odd"
    */

    function even_or_odd(numb){
        if (numb % 2 === 0){
            return "Even"
        } else {
            return "Odd"
        }
    }
    console.log(even_or_odd(4))