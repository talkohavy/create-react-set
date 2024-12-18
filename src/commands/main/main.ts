import { inquireValue } from '../../common/utils/inquires/inquireValue.js';
import { logger } from '../../common/utils/logger/logger.js';

type AddProps = {
  skip: boolean;
};

export async function main(props: AddProps) {
  const { skip: shouldSkipConfirmation } = props;

  console.log('shouldSkipConfirmation is:', shouldSkipConfirmation);

  const componentName = await inquireValue({ message: 'Component Name:' });

  if (!componentName) {
    logger.error('component name cannot empty... exiting...', { newLineBefore: true, newLineAfter: true });
    throw new Error();
  }

  console.log('componentName is:', componentName);
}
