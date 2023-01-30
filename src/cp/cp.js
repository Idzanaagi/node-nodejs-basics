import path from 'path';
import { fileURLToPath } from 'url';
import child_process from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathtoChild = path.join(__dirname, 'files', 'script.js');
    await child_process.fork(pathtoChild, args);
};

spawnChildProcess();