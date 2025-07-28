import { writeFileSync } from 'fs';


const input = process.argv[2];

if (!input) {
  console.log("Please provide a word or sentence!");
  process.exit(1);
}


const words = input.split(" ");

const discoWords = words.map(word => {
  const mid = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, mid);
  const secondHalf = word.slice(mid);
  return secondHalf + firstHalf;
});

const result = discoWords.join(" ");

writeFileSync('verydisco-forever.txt', result);
