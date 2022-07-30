import fs, { open, read, close } from 'fs';
let files = ['number0', 'number1', 'number2', 'number3', 'number4'];

let promises =[];
files.forEach(element => {
    promises.push(fs.promises.readFile(element, 'utf-8'));
});
let data = Promise.all(promises);
data.then(data=>{
    let temp = data.join(',');
    fs.promises.writeFile('formpromise.txt', temp);
    console.log(data)});
console.log(data);