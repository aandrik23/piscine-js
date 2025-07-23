const defaultCurry = (obj1) => (obj2) => ({...obj1, ...obj2});

const mapCurry = (fn) => (obj) =>
    Object.fromEntries(Object.entries(obj).map(fn));

const reduceCurry = (fn) => (obj, init) =>
    Object.entries(obj).reduce((acc, entry) => fn(acc, entry), init);

const filterCurry = (fn) => (obj) =>
    Object.fromEntries(Object.entries(obj).filter(fn));

const reduceScore = (obj, start) => {
    const result = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value.isForceUser));
    const total = start !== undefined ? start : 0;
    return reduceCurry((key, nextKey) => key + result[nextKey[0]].pilotingScore + result[nextKey[0]].shootingScore)(result, total);
};

const filterForce = (obj) => filterCurry(([key, value]) => value.isForceUser && value.shootingScore >= 80)(obj);

const mapAverage = (obj) => Object.fromEntries(Object.entries(obj).map(([nestedObj, nestedValue]) => [
    nestedObj,
    { ...mapCurry(x => ['averageScore', (nestedValue.pilotingScore + nestedValue.shootingScore) / 2])(nestedObj), ...nestedValue }
]));



console.log(reduceScore(personnel));
console.log(filterForce(personnel));
console.log(mapAverage(personnel));