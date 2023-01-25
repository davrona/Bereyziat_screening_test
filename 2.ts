const intersection = (firstArray: Array<number>, secondArray: Array<number>): Array<number> => {
  let set = new Set(firstArray.filter(value => secondArray.includes(value)))
  return Array.from(set)
}

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
console.log(intersection(firstArray, secondArray)); // [2, 1]