import fs from 'fs';
import path from 'path';
import { COMPONENT_NAME_PLACEHOLDER } from '../../../common/constants/globals.js';

const fileContents = `export { default } from './${COMPONENT_NAME_PLACEHOLDER}';`;

export function createIndexTsFile(targetDir: string) {
  const filePath = path.join(targetDir, `index.ts`);

  fs.writeFileSync(filePath, fileContents);
}
