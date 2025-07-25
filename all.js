function all(obj) {
    const keys = Object.keys(obj);
    const promises = keys.map(key => Promise.resolve(obj[key]));

    return Promise.all(promises).then(resolvedvalues => {
        const result = {};
        keys.forEach((key, index) => {
            result[key] = resolvedvalues[index];
        });
        return result;
    });
    }