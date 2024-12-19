import fs from 'fs';
import path from 'path';
import { COMPONENT_NAME_PLACEHOLDER } from '../../../common/constants/globals.js';

const fileContentsTemplate = `export { default } from './${COMPONENT_NAME_PLACEHOLDER}';`;

export function createIndexTsFile(targetDir: string, componentName: string) {
  const filePath = path.join(targetDir, `index.ts`);

  const fileContents = fileContentsTemplate.replaceAll(COMPONENT_NAME_PLACEHOLDER, componentName);

  fs.writeFileSync(filePath, fileContents);
}
