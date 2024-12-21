#!/usr/bin/env node

import os from 'os';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { commandMapper } from './commandMapper.js';
import { COLORS } from './common/constants/colors.js';
import { showVersion } from './common/utils/showVersion.js';

const toolNameBigText = '';

// A full description on each of the following functions is found under the `lvlup` project.
const yargInstance = yargs(hideBin(process.argv))
  .scriptName(`${COLORS.green}lvlup${COLORS.stop}`)
  .version(false)
  .command('init', 'To start using lvlup, you first need to run the init command.')
  .options({
    v: {
      alias: 'version',
      type: 'boolean',
      description: 'Show lvlup version',
      default: false,
      global: false,
    },
    h: {
      alias: 'help',
      type: 'boolean',
      description: 'Show help manual',
    },
    name: {
      alias: 'n',
      type: 'string',
      description: 'Name of component',
    },
  })
  .showHelpOnFail(false, 'Specify --help for available options')
  .strict()
  .updateStrings({
    'Positionals:': `${COLORS.blue}Positionals:${COLORS.stop}`, // <--- I will never use these. only Options, which I alias as 'Flags'.
    'Commands:': `${COLORS.blue}Commands:${COLORS.stop}`,
    'Options:': `${COLORS.blue}Flags:${COLORS.stop}`,
    'Examples:': `${COLORS.blue}Examples:${COLORS.stop}`,
  })
  .help(false);

type ArgsV = { $0: any; _: Array<string> } & Record<string, string | number | boolean>;

async function run() {
  const argv = yargInstance.parse();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { $0: cliToolName, _: commands, ...flags } = argv as ArgsV;

  if (flags.version) {
    await showVersion();
    process.exit(0);
  }

  if (flags.help) {
    const helpMenuAsText = await yargInstance.getHelp();
    const helpTextBig = `${toolNameBigText}${os.EOL}${os.EOL}${helpMenuAsText}`;
    console.log(helpTextBig);
    process.exit(0);
  }

  await commandMapper({ commands, flags });
}

run();
