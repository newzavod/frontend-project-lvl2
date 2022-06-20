// import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';
// import readFile from '.read-file.js';

const genDiff = (data1, data2) => {
  let result = {};

  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  result = keys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        name: key,
        value: data2[key],
        type: 'added',
      };
    }
    if (!_.has(data2, key)) {
      return {
        name: key,
        value: data1[key],
        type: 'deleted',
      };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        name: key,
        type: 'nested',
        children: genDiff(data1[key], data2[key])
      };
    }
    if (data1[key] !== data2[key]) {
      return {
        name: key,
        value1: data1[key],
        value2: data2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: data1[key],
      type: 'unchanged',
    };
  });
  return result;
};

export default (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');

  const obj1 = JSON.parse(data1);
  const obj2 = JSON.parse(data2);

  const arrDiffKeys = genDiff(obj1, obj2);
  const parts = [];
  for (const item of arrDiffKeys) {
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

//obj1↓
//{
//   host: 'hexlet.io',
//   timeout: 50,
//   proxy: '123.234.53.22',
//   follow: false
// }
//obj2↓
//{ timeout: 20, verbose: true, host: 'hexlet.io' }
