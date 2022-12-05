import * as fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const pathToDir = path.join(__dirname, 'files');
    
    try {
        const files = await fsp.readdir(pathToDir);
        files.map((file) => console.log(file));
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await list();