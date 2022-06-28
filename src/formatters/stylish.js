// import fs from 'fs';
// import { resolve } from 'path';
// import buildTree from '../build_tree.js';

// const arrDiffKeys = buildTree(file1, file2);

// const stylish = (filepath1, filepath2) => {
// const path1 = resolve(process.cwd(), filepath1);
// const path2 = resolve(process.cwd(), filepath2);

// const data1 = JSON.parse(fs.readFileSync(path1, 'utf-8'));
// const data2 = JSON.parse(fs.readFileSync(path2, 'utf-8'));

//   const parts = [];

//   for (const item of arrDiffKeys) {
//     if (`${item.type}` === 'deleted') {
//       parts.push((`- ${item.name}: ${item.value}`));
//     }
//     if (`${item.type}` === 'unchanged') {
//       parts.push(`  ${item.name}: ${item.value}`);
//     }
//     if (`${item.type}` === 'changed') {
//       parts.push(`- ${item.name}: ${item.value1}`);
//       parts.push(`+ ${item.name}: ${item.value2}`);
//     }
//     if (`${item.type}` === 'added') {
//       parts.push(`+ ${item.name}: ${item.value}`);
//     }
//   }
//   const diffStr = parts.join('\n');
//   const result = `{\n${diffStr}\n}`;
//   return result;
// };

// export default stylish;
