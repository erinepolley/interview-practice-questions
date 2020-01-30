console.log("Hello world!")

const palindrome = str => {
  const newWord = str.split("").reverse().join("")
  console.log(newWord)
  if(str === newWord) {
      console.log("This is a palindrome!")
  } else {
      console.log("This is not a palindrome!")
  }
}

palindrome("Anna")
palindrome("hey")

const newArray = ["a", "n", "n",]
console.log(newArray.join(""))
console.log(newArray)