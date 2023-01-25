const getUniqueSortedNumbers = (obj: Object): Array<number> => {
  let set = new Set<number>()

  const findUniqueNumbers = (obj: Object): void => {
    for(let item in obj) {
      if(typeof obj[item] === 'object' && obj[item] !== null) {
        findUniqueNumbers(obj[item])
      } else if(set.has(obj[item])) {
        set.delete(obj[item])
      } else {
        set.add(obj[item])
      }
    }
  }
  
  findUniqueNumbers(obj);
  return Array.from(set.values()).sort();
}

console.log(getUniqueSortedNumbers({
  a: {
    x: 3,
    y: {
      d: 2,
      e: 2,
      f: {
        g: 4,
        h: 3,
        i: {
          j: 1
        }
      },
      z: 8
    }
  }
}))