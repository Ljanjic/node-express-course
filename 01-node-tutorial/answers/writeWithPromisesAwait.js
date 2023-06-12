const { writeFile, readFile } = require('fs').promises

async function writer() {
    try {
        await writeFile('textfile.txt','This is the first line.\nThis is the second line.\n And this one is the third line.\n', 'utf8', {flag: 'a'});
    } catch(err) {
        console.log("An error occured while writting the file: ", err);
    }
}
async function reader() {
    try {
        const read = await readFile('textfile.txt', 'utf8');
        console.log(read);
    } catch(err) {
        console.log("An error occured while reading the file: ", err);
    }
}
async function readWrite() {
    try {
        await writer();
        await reader();
    } catch(err) {
        console.log("An error occured: ", err)
    }
}
readWrite();