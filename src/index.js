//
import fs from 'fs';
import path from 'path';
import parseData from './parsers.js';
import getDiffGenerator from './diffGenerator.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8');
const getFormat = (filename) => filename.split('.')[1];

const parsedFile = (filepath) => parseData(filepath);

const readyToRender = (filepath) => {
  const getExtname = parsedFile(filepath);
  const openedFile = readFile(filepath);
  return getExtname(openedFile);
};

const genDiff = (path1, path2, formatName = 'stylish') => {
  const object1 = readyToRender(path1);
  const object2 = readyToRender(path2);
  const comapareObjects = getDiffGenerator(object1, object2, formatName);
  return getFormat(comapareObjects, formatName);
};

export default genDiff;
