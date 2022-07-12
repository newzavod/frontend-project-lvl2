import { load } from 'js-yaml';

const parsers = (content, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      return load(content);
    default:
      throw new Error(`Invalid file format type: ${formatName}! try supported formats. You can use JSON or YAML formats.`);
  }
};

export default parsers;
