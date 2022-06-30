import { load } from 'js-yaml';

const parse = (filename, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(filename);
    case 'yml':
    case 'yaml':
      return load(filename);
    default:
      throw new Error(`Invalid file format type: ${format}! try supported formats. You can use JSON or YAML formats.`);
  }
};

export default parse;
