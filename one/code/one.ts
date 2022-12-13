

import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename: string) {
  const result = readFileSync(join(__dirname, filename), 'utf-8');

  console.log(result); // 👉️ "hello world hello world ..."

  return result;
}

syncReadFile('./example.txt');

// --------------------------------------------------------------

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename: string) {
  try {
    const result = await fsPromises.readFile(
      join(__dirname, filename),
      'utf-8',
    );

    console.log(result); // 👉️ "hello world hello world ..."

    return result;
  } catch (err) {
    console.log(err);
    return 'Something went wrong'
  }
}

const elves = asyncReadFile('./1input.txt');

const calorieCounter = (snacks: number[]) => snacks.reduce((partialSum, s) => partialSum + s, 0);

// console.log(calorieCounter([1000, 2000, 3000]))

