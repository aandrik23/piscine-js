import { readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Please provide the guests file or directory.");
  process.exit(1);
}

let content = '';

try {
  const stats = statSync(inputPath);

  if (stats.isDirectory()) {
    // If it's a directory, treat as no input — write empty vip.txt and exit
    writeFileSync('vip.txt', '', 'utf8');
    process.exit(0);
  }

  // Otherwise, read file content
  content = readFileSync(inputPath, 'utf8');

} catch (err) {
  console.error("Failed to read file:", err.message);
  process.exit(1);
}

const lines = content.trim().split('\n').filter(Boolean);

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

writeFileSync('vip.txt', output, 'utf8');