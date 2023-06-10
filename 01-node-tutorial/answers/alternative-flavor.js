
const nameList = require('./names')
const favNames = require('./utils')
//console.log(nameList)
const student = {
    name: 'Ljiljana',
    lastName: 'Janjic',
    currentClass: 'NodeExpress',
    year: 2023
}
module.exports = student

favNames(nameList.name1)
favNames(nameList.name2)
favNames(nameList.name3) 