import * as fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const contents = await fsp.readFile(fileToRead, { encoding: 'utf8' });
        console.log(contents);
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await read();