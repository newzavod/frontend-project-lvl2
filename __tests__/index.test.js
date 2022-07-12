import { test, expect } from '@jest/globals';
import { dirname, extname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
// import buildTree from '../src/build_tree.js';
import format from '../src/formatters/index.js';
import genDiff from '../src/index.js';
import parsers from '../src/parses.js';

// path to file
const __filename = fileURLToPath(import.meta.url);
// path to directory
const __dirname = dirname(__filename);
// path t file with folder fixtures and file's name
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
// read file
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
// I've got the file extension
const getExtension = (filename) => extname(filename).slice(1);

const expectedResultStylish = readFile('expectedResultStylish.txt');
// const expectedResultPlain = readFile('expectedResultPlain.txt');
// const expectedResultJson = readFile('expectedResultJson.txt');

const formatsFiles = ['json', 'yml', 'yaml'];

test('gendiff', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedResultStylish);
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedResultStylish);

});

// test.each(formatsFiles)('diff formats of files (.json, .yaml, .yml) & output styles', (formatFile) => {
//   const fileName1 = `file1.${formatFile}`;
//   const fileName2 = `file2.${formatFile}`;
//   const readFile1 = readFile(fileName1);
//   const readFile2 = readFile(fileName2);
//   const file1 = parsers(readFile1, getExtension(fileName1));
//   const file2 = parsers(readFile2, getExtension(fileName2));

//   expect(format(genDiff(file1, file2), 'stylish')).toEqual(expectedResultStylish);
//   // expect(format(buildTree(file1, file2), 'plain')).toEqual(expectedResultPlain);
//   // expect(format(buildTree(file1, file2), 'json')).toEqual(expectedResultJson);
// });
