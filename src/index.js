import { dirname, resolve, extname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import parsers from './parses.js';
import buildTree from './build_tree.js';
import format from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFormat = (filename) => extname(filename).slice(1);
const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename, 'utf-8'));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  // file content type string ↓
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);

  // string to object
  const file1 = parsers(readFile1, getFormat(filepath1));
  const file2 = parsers(readFile2, getFormat(filepath2));

  // make diff tree, it is array
  const tree = buildTree(file1, file2);

  return format(tree, formatName);
};

export default genDiff;
