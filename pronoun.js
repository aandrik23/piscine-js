function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they'];
    const words = str.toLowerCase().split(' ');
    const result = {};

    for (let i = 0; i < words.length; i++) {
        const current = words[i];

        if (pronouns.includes(current)) {
            if (!result[current]) {
                result[current] = { word: [], count: 0 };
            }
            result[current].count++;

            const next = words[i + 1];
            if (next && !pronouns.includes(next)) {
                result[current].word.push(next);
            }
        }
    }
    return result;
}