// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

const reverseInt = (num) => {
    const revNum = num.toString().split("").reverse().join("")
    console.log("reversed num", revNum)
    const endNum = parseInt(revNum) * Math.sign(num) 
    console.log(endNum)
    return endNum
}

reverseInt(92)
reverseInt(-33)