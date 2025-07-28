import { readFileSync } from 'fs';


const fileName = process.argv[2];

if (!fileName) {
  console.log("Please provide a filename.");
  process.exit(1);
}

let content;

try {
  content = readFileSync(fileName, 'utf8');
} catch (err) {
  console.error("Error reading file:", err.message);
  process.exit(1);
}

const words = content.trim().split(" ");


const originalWords = words.map(word => {
  const splitIndex = word.length - Math.ceil(word.length / 2);
  const secondHalf = word.slice(0, splitIndex);
  const firstHalf = word.slice(splitIndex);
  return firstHalf + secondHalf;
});

console.log(originalWords.join(" "));
