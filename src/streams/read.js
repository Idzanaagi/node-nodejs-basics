import process from "process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { stdout } = process;

const read = async () => {
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const readableStream = fs.createReadStream(pathToFile);
    readableStream.on("data", (chunk) => stdout.write(`${chunk}\n`));
  } catch (e) {
    console.log(e);
  }
};

await read();
