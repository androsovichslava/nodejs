import http from 'http';
import fs from 'fs';

http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
		let data;
		let type;
		
		if (request.url === '/page.html' || request.url === '/') {
			data = await fs.promises.readFile('page.html', 'utf8');
			type = 'text/html';
		}
		
		if (request.url === '/image.jpg') {
			data = await fs.promises.readFile('image.jpg');
			type = 'image/png'; // правильно укажем mime-тип
		}
		if (request.url === '/style.css') {
			data = await fs.promises.readFile('style.css');
			type = 'text/css'; // правильно укажем mime-тип
		}
		if (request.url === '/script.js') {
			data = await fs.promises.readFile('script.js');
			type = 'text/javascript'; // правильно укажем mime-тип
		}
		
		response.writeHead(200, {'Content-Type': type});
		response.write(data);
		response.end();
	}
}).listen(3000);