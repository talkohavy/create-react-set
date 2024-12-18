import { main } from './commands/main/main.js';
import { Commands } from './common/types.js';

const COMMAND_MAPPER = {
  [Commands.Main]: main,
};

type commandMapperProps = {
  commands: Array<string>;
  flags: any;
};

export async function commandMapper(props: commandMapperProps) {
  try {
    const { commands, flags } = props;

    if (commands.length === 0) commands.push(Commands.Main);

    const [command] = commands as [Commands];

    await COMMAND_MAPPER[command](flags);
  } catch (_error: any) {
    _error;
  }
}
