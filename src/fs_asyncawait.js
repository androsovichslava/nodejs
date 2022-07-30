import fs, { open, read, close } from 'fs';

async function reading () {
    try {
    let data = await fs.promises.readFile('readme.txt', 'utf8');
    console.log(data);
    } catch (e) {
        console.log('что то не так')
    }
}
reading();