import fs from 'fs/promises';

async function reading() {
    let data= await fs.readFile('readme.txt', 'utf-8');
    console.log(data);
}

reading();