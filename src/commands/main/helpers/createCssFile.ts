import fs from 'fs';
import path from 'path';
import { COMPONENT_NAME_PLACEHOLDER } from '../../../common/constants/globals.js';
import { lowercaseFirstChar } from '../../../common/utils/lowercaseFirstChar.js';

const fileContents = `.${lowercaseFirstChar(COMPONENT_NAME_PLACEHOLDER)} {
}
`;

export function createCssFile(targetDir: string, componentName: string) {
  const filePath = path.join(targetDir, `${componentName}.module.scss`);

  fs.writeFileSync(filePath, fileContents);
}
