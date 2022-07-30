import {cube, square} from './math.js'
import fs, { open, read, close } from 'fs';
import _ from 'underscore';


console.log(cube(4) + square(7));


console.log(_.last(['a', 'b', 'c', 'd'], 2));

let text = fs.readFileSync('readme.txt', 'utf8');
console.log(text);

fs.writeFileSync('readme.txt', 'text');

text = fs.readFileSync('readme.txt', 'utf8');
console.log(text);

// С помощью цикла для каждого элемента объекта создайте файл, именем которого будет свойство элемента, а текстом - значение свойства.

let obj = {
	'file1.txt': 'text1',
	'file2.txt': 'text2',
	'file3.txt': 'text3',
}
for (let key in obj) {
    fs.writeFileSync(key, obj[key]);
}
