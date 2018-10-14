export default (type) => {
    const complete = (thing) => {
        if (typeof thing === 'object' ||
            typeof thing === 'function') {
            Object.freeze(thing);
            Object.keys(thing).map(key => complete(key));
        }
    };
    complete(type);
};
