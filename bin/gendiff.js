#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';
// import genDiff from '../index.js';

const program = new Command();

program
  .name('gendiff.js')
  .description('Compares two configuration files and shows a difference')
  .version('0.0.1', '-V, --vers', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1>, <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
    // console.log(filepath1, filepath2);
  });

program.parse();
