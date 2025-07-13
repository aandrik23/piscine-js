export const getURL = dataSet => {
    const regex = /https?:\/\/[A-Za-z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+/g;
    return dataSet.match(regex) || [];
};

export const greedyQuery = dataSet =>
    getURL(dataSet).filter(raw => {
        try {
            return new URL(raw).searchParams.size >= 3;
        } catch {
            return false;
        }
    });

export const notSoGreedy = dataSet =>
    getURL(dataSet).filter(raw => {
        try {
            const count = new URL(raw).searchParams.size;
            return count >= 2 && count <= 3;
        } catch {
            return false;
        }
    });