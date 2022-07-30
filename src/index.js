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

// Дан файл с текстом. Запустите таймер, который каждые 5 секунд в конец этого файла будет записывать восклицательный знак.
let sign= '' 
// setInterval(() => {
//     sign+= '!';
//     fs.writeFileSync('sign-file', sign);
// }, 1000);


// Дан файл, в тексте которого записано некоторое число. Напишите скрипт, который прочитает число из файла, прибавит к нему единицу и запишет новое число обратно в файл.
let num = fs.readFileSync('number.txt', 'utf8');
console.log(num);
num = +num +1;
try {
    fs.writeFileSync('number.txt', num);
} catch (e) {
    console.log('Ошибка   '+e.name)
}
fs.writeFileSync('number.txt', num.toString());
num = fs.readFileSync('number.txt', 'utf8');
console.log(num);

// Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация. Допишите ваш код так, чтобы он обрабатывал эту ситуацию.

try {
    fs.readFileSync('number.tx_', 'utf8');
} catch (e) {
    console.log('ошибка чтения файла');
    console.log(e.name);

}

