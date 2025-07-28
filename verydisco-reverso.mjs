import { readFileSync } from 'fs';


const fileName = process.argv[2];

if (!fileName) {
  console.log("Please provide a filename (e.g. verydisco-forever.txt)");
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


const reversedWords = words.map(word => {
  const mid = Math.floor(word.length / 2);
  const secondHalf = word.slice(0, word.length - mid);
  const firstHalf = word.slice(word.length - mid);
  return firstHalf + secondHalf;
});

console.log(reversedWords.join(" "));
