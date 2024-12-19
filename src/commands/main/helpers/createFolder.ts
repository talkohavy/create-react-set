import fs from 'fs';
import path from 'path';

export function createFolder(folderName: string) {
  const folderFullPath = path.resolve(process.cwd(), folderName);

  if (fs.existsSync(folderFullPath)) {
    console.error(`A folder with the name "${folderName}" already exists. Please choose a different name.`);
    process.exit(1);
  }

  fs.mkdirSync(folderFullPath);
}
