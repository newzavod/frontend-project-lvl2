const parse = (filename, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(filename);

    default:
      throw new Error(`Invalid file extension type: ${format}! try supported formats.`);
  }
};

export default parse;
