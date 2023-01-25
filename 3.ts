const processAngleBrackets = (str: string): string => {
    let count = 0
    let extras = 0
    for (const char of str) {
      if (char === '>') {
         if (count === 0) {
            extras ++
         } else {
            count --
         };
      } else {
         count++
      };
    };
    const leadingTags = '<'.repeat(extras)
    const trailingTags = '>'.repeat(count)
    return leadingTags + str + trailingTags
}
const resultBracket = processAngleBrackets('><<><');
console.log(`Output 1: ${resultBracket}`);