var obj = {
  a: {
    b: {
      c: 12,
    },
  },
  findPath(str) {
    const pathArray = str.split(".");
    let result = obj;
    for (let i = 0; i < pathArray.length; i++) {
      if (result[pathArray[i]] === undefined) {
        result = undefined;
        break;
      }
      result = result[pathArray[i]];
    }
    return result;
  },
};

console.log(obj.findPath("a.b.c")); // 12
console.log(obj.findPath("a.b")); // {c: 12}
console.log(obj.findPath("a.b.d")); // undefined
console.log(obj.findPath("a.c")); // undefined
console.log(obj.findPath("a.b.c.d")); // undefined
console.log(obj.findPath("a.b.c.d.e")); // undefined
