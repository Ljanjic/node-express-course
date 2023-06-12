const { writeFile, readFile } = require('fs').promises;
const first = "The first line of text.";
const second = "The second line of text.";
const third = "The third line of text.";

writeFile("thenFile.txt", `${first}\n`, { flag: 'a' })
  .then(() => {
    return writeFile("thenFile.txt", `${second} \n`, { flag: 'a' });
  })
  .then(() => {
    return writeFile("thenFile.txt", `${third} \n`, { flag: 'a' });
  })
  .then(() => {
    return readFile("thenFile.txt", "utf8");
  })
  .then((result) =>
    console.log(result)
  )
  .catch((error) =>
    console.log(error)
  );



 

  
  