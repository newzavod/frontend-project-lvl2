import _ from 'lodash';

const createIndent = (level) => {
  const replacer = ' ';
  const spacesCount = 2;
  const indentSize = level * spacesCount;

  const indents = {
    openBracket: replacer.repeat(indentSize - 1),
    closeBracket: replacer.repeat(indentSize - spacesCount),
  };

  return indents;
};

const stringify = (val, depth) => {
  if (!_.isObject(val)) {
    return String(val);
  }
  const indents = createIndent(depth);

  const lines = Object.entries(val).map(([key, value]) => {
    if (!_.isObject(value)) {
      return `${indents.openBracket}  ${key}: ${value}`;
    }

    return `${indents.openBracket}  ${key}: ${stringify(value, depth + 1)}`;
  });

  return ['{', ...lines, `${indents.closeBracket}}`].join('\n');
};

const stylish = (tree, depth = 1) => {
  const indents = createIndent(depth);

  const items = tree.map((item) => {
    const makeValue = stringify(item.value, depth + 1);

    switch (item.type) {
      case 'added':
        return `${indents.openBracket}+ ${item.name}: ${makeValue}`;
      case 'deleted':
        return `${indents.openBracket}- ${item.name}: ${makeValue}`;
      case 'changed':
        return `${indents.openBracket}- ${item.name}: ${stringify(item.value1, depth + 1)}\n${indents.openBracket}+ ${item.name}: ${stringify(item.value2, depth + 1)}`;
      case 'unchanged':
        return `${indents.openBracket}  ${item.name}: ${makeValue}`;
      case 'nested':
        return `${indents.openBracket}  ${item.name}: ${stylish(item.children, depth + 1)}`;
      default:
        throw new Error(`Unknown type: '${item.name}'`);
    }
  });
  return ['{', ...items, `${indents.closeBracket}}`].join('\n');
};

export default stylish;

// import _ from 'lodash';

// const stylish = (tree) => {
//   const parts = [];
//   tree.forEach((item) => {
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
//   });
//   const diffStr = parts.join('\n');
//   const result = `{\n${diffStr}\n}`;
//   return result;
// };

// export default stylish;
