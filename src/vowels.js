console.log("Hiya!")
//Write a function that counts vowels in a string and returns a number
const vowelCounter = (str) => {
    let counter = 0
    vowelArray = ["a", "e", "i", "o", "u"]
    lowercaseStr = str.toLowerCase()
    console.log(lowercaseStr)
    for (i = 0; i < lowercaseStr.length; i++) {
        for (j = 0; j < vowelArray.length; j++) {
            if (lowercaseStr[i] === vowelArray[j]) {
                counter ++
            }
        }
    }
    console.log(counter)
}

// vowelCounter("celeb")
vowelCounter("Erin Polley")