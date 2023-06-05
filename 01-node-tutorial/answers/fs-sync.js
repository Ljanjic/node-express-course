const { readFileSync, writeFileSync } = require('fs')

//reading files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//creating/writing new temporarly file
writeFileSync('./temporary/fileA.txt',
`Here comes new lines from file One : ${first}`,
{ flag: 'a' }
)
writeFileSync('./temporary/fileA.txt',
`Here comes new lines from file Two : ${second}`,
{ flag: 'a' }
)


console.log(first, second)
