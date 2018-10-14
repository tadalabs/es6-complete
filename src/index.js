export default that => {
  const complete = thing => {
    Object.freeze(thing);
    if (['object', 'function'].includes(typeof thing)) {
      Object.keys(thing).map(complete);
      Object.values(thing).map(complete);
    }
  };
  complete(that);
};
