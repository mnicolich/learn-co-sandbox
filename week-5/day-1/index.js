console.log('messages!')

console.log(document.querySelector('#third-div'))
console.log(document.querySelector('div p'))

// Step 1. Create element --> make sure Javascript is linked in HTML (usually at end of <body>)
let pTag = document.createElement('p')
// Step 2. puts text in the paragraph tag 
pTag.innnerText = "Some text"
// Step 3. put it on the page
let thirdDiv = document.querySelector("#third-div")
thirdDiv.appendChild(pTag)

// method changing (combining two ideas into one expression)
document.querySelector('div p').remove()

let pTag = document.querySelector('div p')
pTag.remove()

// Data Types
Number: 1, 2, 3, 4, 3.4, 24/3 
Boolean: true/false (3>4) -> false
String: "" '' --> anything inside of quotes

'true' true // not the same /(one is a string one is a Boolean)
'1' 1 // not the same

//variable, named something with a value of 'another thing'
let something = "another thing"
console.log(somthing)
something = 'something else'

const constantVariable = 'unchangable'
constantVariable = 'chan
