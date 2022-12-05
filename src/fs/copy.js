import * as fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const pathtoCurrent = path.join(__dirname, "files");
  const pathToDir = path.join(__dirname, "files_copy");

  try {
    const files = await fsp.readdir(pathToDir);
    console.error("FS operation failed");
  } catch {
    const files = await fsp.readdir(pathtoCurrent);
    const dir = await fsp.mkdir(pathToDir, { recursive: true });
    
    for (const file of files) {
      fsp.copyFile(path.join(pathtoCurrent, file), path.join(pathToDir, file));
      console.log(`${file} is copy`);
    }
  }
};

copy();
