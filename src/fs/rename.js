import * as fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const fileToRename = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newName = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fsp.stat(fileToRename);
        fsp.rename(fileToRename, newName);
        console.log('file was rename');
     }
     catch {
         throw new Error('FS operation failed');
     }
};

await rename();