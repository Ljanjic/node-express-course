
const { readFile, writeFile } = require('fs')
console.log(`Start position`)

  //const first = result
  writeFile('./temporary/output.txt', `This is line 1`, (err, result) => {     
  console.log(`At position 1`)  
    if (err) { 
      console.log(err)     
    return
    }
  //const second = result
  writeFile('./temporary/output.txt', `This is line 1 \n This is line 2`, (err, result) => {     
    console.log(`At position 2`)
      if (err) { 
        console.log(err)     
      return
      }
  //const thirt = result
  writeFile('./temporary/output.txt', ` This is line 1\n This is line 2\n This is line 3`, (err, result) => {     
    console.log(`At position 3`)
      if (err) { 
        console.log(err)     
      return
      }
    console.log(`Done`)  
    }
  )
}) 
  })
