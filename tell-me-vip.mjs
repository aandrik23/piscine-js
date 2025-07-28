import { readFileSync, writeFileSync } from 'fs';

const fileName = process.argv[2];

if (!fileName) {
  console.error("Please provide the guests file.");
  process.exit(1);
}

let data;

try {
  data = readFileSync(fileName, 'utf8');
} catch (err) {
  console.error("Failed to read file:", err.message);
  process.exit(1);
}

const lines = data.trim().split('\n');

const yesGuests = lines
  .map(line => {
    const [fullName, answer] = line.split(',');
    if (!fullName || !answer) return null;
    const [firstName, lastName] = fullName.trim().split(' ');
    return {
      firstName,
      lastName,
      answer: answer.trim().toUpperCase()
    };
  })
  .filter(g => g && g.answer === 'YES');

yesGuests.sort((a, b) => a.lastName.localeCompare(b.lastName));

const output = yesGuests
  .map((g, i) => `${i + 1}. ${g.lastName} ${g.firstName}`)
  .join('\n');

// save to vip.txt
writeFileSync('vip.txt', output, 'utf8');
