import fs from "fs";
import * as zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {

  const input = path.join(__dirname, "files", "archive.gz");
  const output = path.join(__dirname, "files", "fileToCompress.txt");
 
  try {
    const unzip = zlib.createUnzip();
    const read = await fs.createReadStream(input);
    const write = await fs.createWriteStream(output);

    await read.pipe(unzip).pipe(write);
    console.log("File unpacked");
  } catch (e){
    console.log(e);
  }
};

await decompress();
