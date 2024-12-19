import fs from 'fs';
import path from 'path';
import { COMPONENT_NAME_PLACEHOLDER } from '../../../common/constants/globals.js';
import { lowercaseFirstChar } from '../../../common/utils/lowercaseFirstChar.js';

const fileContents = `import styles from './${COMPONENT_NAME_PLACEHOLDER}.module.scss';

type ${COMPONENT_NAME_PLACEHOLDER}Props = {
  name: string;
};

export default function ${COMPONENT_NAME_PLACEHOLDER}(props: ${COMPONENT_NAME_PLACEHOLDER}Props) {
  const { name } = props;
  name;

  return <div className={styles.${lowercaseFirstChar(COMPONENT_NAME_PLACEHOLDER)}}>${COMPONENT_NAME_PLACEHOLDER}</div>;
}
`;

export function createComponentFile(targetDir: string, componentName: string) {
  const filePath = path.join(targetDir, `${componentName}.ts`);

  fs.writeFileSync(filePath, fileContents);

  return filePath;
}