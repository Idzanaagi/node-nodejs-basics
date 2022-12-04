import path from 'path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.js");

const calculateHash = async () => {
    const messages = [pathToFile]
    const hashe = messages.map(data => createHash('sha256').update(data).digest('hex'))
    console.log(hashe[0])
};

await calculateHash();