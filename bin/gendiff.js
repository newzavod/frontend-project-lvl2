#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .name('gendiff.js')
    .description('CLI to some JavaScript string utilities')
    .version('0.0.1', '-v, --vers', 'output the current version')
    .arguments('<filepath1>, <filepath2>')
    .option('-f, --format <type>', 'output format');

program.command('split')
    .description('Split a string into substrings and display as an array')
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
    })


program.parse();  