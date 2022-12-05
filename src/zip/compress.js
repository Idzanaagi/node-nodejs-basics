import * as fs from "fs";
import { createGzip } from "node:zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const input = path.join(__dirname, "files", "fileToCompress.txt");
  const output = path.join(__dirname, "files", "archive.gz");
  
  try {
    const gzip = createGzip();
    const source = await fs.createReadStream(input);
    const destination = await fs.createWriteStream(output);

   await source.pipe(gzip).pipe(destination);
    console.log("file was compress");
  } catch (e) {
    console.log(e);
  }
};

await compress();

