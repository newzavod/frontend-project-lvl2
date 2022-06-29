import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFormat = (filename) => filename.split('.')[1];

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename, 'utf-8'));

export { getFormat, readFile };
