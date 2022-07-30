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