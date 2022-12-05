import * as fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");
   
    try {
        await fsp.rm(fileToRemove)
        console.log('fileToRemove.txt deleted');
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await remove();