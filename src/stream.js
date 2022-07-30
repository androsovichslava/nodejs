import fs from 'fs'
let readableStream = fs.createReadStream('bigfile.txt', 'utf8');
let count =0;
readableStream.on('data', function(chunk) { 
    count++;
    console.log('=============' + count);
	// console.log(chunk);
});
