import fs, { open, read, close } from 'fs';

fs.readFile('readme.txt2', 'utf8', (err, data) => {
	if (!err) {
		fs.writeFile('readme.txt', data + '  новые данные', err => {
			if (err) {
				console.log('ошибка записи файла');
			}
		});
	} else {
		console.log('ошибка чтения файла');
	}
});

// Пусть в файле через запятую записаны числа. Сделайте скрипт, который запишет каждое из этих чисел в отдельный файл.



fs.promises.readFile('numbers.txt','utf-8').then(data=>{
	let arr = data.split(',');
	console.log(arr);
	arr.forEach((elem,index)=>{
		fs.promises.writeFile(`number${index}`, elem).catch(err=>{
			console.log('write error');
		});
	})
})