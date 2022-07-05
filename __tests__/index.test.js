import { test, expect } from '@jest/globals';
import { dirname, extname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const getExtension = (filename) => extname(filename).slice(1);

const expectedResult = readFile('expectedResult.txt');

test('gendiff', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedResult);
});

test('diffYamlAndYml', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedResult);
});
