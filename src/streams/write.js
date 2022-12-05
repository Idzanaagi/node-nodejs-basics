import process from 'process';
import * as fsp from "fs/promises";
import path from 'path';
const { stdin, stdout } = process;
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    stdout.write('Type your text\n')
    
    stdin.on('data', data => {    
        const dataStringified = data.toString();
        
        fsp.appendFile(
            pathToFile,
            dataStringified,
            (err) => {
                if (err) throw err;
            }
        )
    })
        
};

await write();