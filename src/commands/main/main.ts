import path from 'path';
import { inquireValue } from '../../common/utils/inquires/inquireValue.js';
import { logger } from '../../common/utils/logger/logger.js';
import { createFolder } from './helpers/createFolder.js';
import { createIndexTsFile } from './helpers/createIndexTsFile.js';
import { createCssFile } from './helpers/createCssFile.js';
import { COLORS } from '../../common/constants/colors.js';
import { createComponentFile } from './helpers/createComponentFile.js';

export async function main() {
  const componentNameInput = await inquireValue({ message: 'Component Name:' });

  const componentName = componentNameInput.trim().replace(/[^a-zA-Z0-9_-]/g, '');

  if (!componentName) {
    logger.error('Invalid component name. Please provide a valid name.', {
      newLineBefore: true,
      newLineAfter: true,
    });

    throw new Error();
  }

  const targetDir = path.resolve(process.cwd(), componentName);

  createFolder(targetDir);
  createCssFile(targetDir, componentName);
  const componentFilenameFullPath = createComponentFile(targetDir, componentName);
  createIndexTsFile(targetDir);

  logger.info(`✅  Component "${componentName}" has been created ${COLORS.green}successfully${COLORS.stop}.`);
  logger.info('✅  You can navigate to your component file here:');
  logger.info(`✅  ${COLORS.yellow}${componentFilenameFullPath}${COLORS.stop}`, { newLineAfter: true });
}
