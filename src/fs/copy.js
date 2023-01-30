import * as fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToDir = path.join(__dirname, "files_copy");

const checkExist = async () => {
  try {
    await fsp.readdir(pathToDir);
    if (true) {
      return true;
    }
  } catch {
    return false;
  }
};

const copy = async () => {
  const pathtoCurrent = path.join(__dirname, "files");
  const check = await checkExist();

  try {
    if (check) {
      throw new Error("FS operation failed");
    } else {
      const files = await fsp.readdir(pathtoCurrent);
      const dir = await fsp.mkdir(pathToDir, { recursive: true });

      for (const file of files) {
        fsp.copyFile(
          path.join(pathtoCurrent, file),
          path.join(pathToDir, file)
        );
        console.log(`${file} is copy`);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

await copy();
