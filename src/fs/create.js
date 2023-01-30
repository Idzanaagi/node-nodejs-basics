import * as fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fresh.txt");

const checkExist = async () => {
  try {
    await fsp.lstat(pathToFile);
    if (true) {
      return true;
    }
  } catch {
    return false;
  }
};

const create = async () => {
  const check = await checkExist();

  try {
    if (check) {
      throw new Error("FS operation failed");
    } else {
      await fsp.writeFile(pathToFile, "I am fresh and young");
      console.log("fresh.txt created");
    }
  } catch (e) {
    console.log(e)
  }
};

await create();