import parse from './parses.js';
import buildTree from './build_tree.js';
import { readFile, getFormat } from './read_file.js';

const genDiff = (filepath1, filepath2) => {
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);
  const file1 = parse(readFile1, getFormat(filepath1));
  const file2 = parse(readFile2, getFormat(filepath2));

  const tree = buildTree(file1, file2);

  const parts = [];

  for (const item of tree) {
    if (`${item.type}` === 'deleted') {
      parts.push((`- ${item.name}: ${item.value}`));
    }
    if (`${item.type}` === 'unchanged') {
      parts.push(`  ${item.name}: ${item.value}`);
    }
    if (`${item.type}` === 'changed') {
      parts.push(`- ${item.name}: ${item.value1}`);
      parts.push(`+ ${item.name}: ${item.value2}`);
    }
    if (`${item.type}` === 'added') {
      parts.push(`+ ${item.name}: ${item.value}`);
    }
  }
  const diffStr = parts.join('\n');
  const result = `{\n${diffStr}\n}`;
  return result;
};

export default genDiff;
