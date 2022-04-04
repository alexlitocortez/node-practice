const fs = require('fs')

const sampleData = { "name": "Andrew", "planet": "Earth", "age": 27}

const dataBuffer = fs.readFileSync('1-json.json')
// Load JSON data in
const dataJSON = dataBuffer.toString()
// Convert to string
const user = JSON.parse(dataJSON)

user.name = 'Alex'
user.age = 29

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)




// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



