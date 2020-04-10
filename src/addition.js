console.log("addition js")
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//You have to take the first number, and add it to every other number. 
//So, say for the number in index 0, compare it to index 1, index 2, etc. until you find that the two nums equals the target.
//Then, take index 1 and compare it to index 2, etc. until all nums are looped over.
//Once two numbers added hit the target, you can break and return those nums. 
//do an inner loop that is offset by one number

const addNums = (numArray, target) => {
    console.log("numArray", numArray)
    console.log("target", target)
    twoNumArray = []
    for(let i=0; i < numArray.length; i++) {
        let numOne = numArray[i]
        console.log("numOne", numOne)
        for (let j= i + 1; j <numArray.length; j++) {
            let numTwo = numArray[j]
            console.log("numTwo", numTwo)
            addedValue = numOne + numTwo
            console.log("added value", addedValue)
            if(addedValue == target) {
                twoNumArray.push(numOne, numTwo)
                console.log(twoNumArray)
                return twoNumArray 
            }
        }
    }
}

addNums([2, 8, 11, 15], 9)
addNums([2, 8, 1, 15], 9)