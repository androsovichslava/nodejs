import fs from 'fs/promises';
import { constants } from 'fs';

console.log(constants);

fs.access('test.txt', constants.F_OK).then(() => {
	console.log('file exists');
}).catch(() => {
	console.error('file does not exists');
});

try {
    await fs.access('test.txt', constants.F_OK);
    console.log('read')
} catch (e) {
    console.log(e);
}


try {
	await fs.access('test.txt', constants.W_OK);
	console.log('can write');
} catch {
	console.error('cannot write');
}