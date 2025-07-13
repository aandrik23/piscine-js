function groupPrice(str) {
    const regex = /(?:\$|[A-Z]{3})(\d+)\.(\d{2})/g;
    const results = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        results.push([match[0], match[1], match[2]]);
    }
    return results;
}