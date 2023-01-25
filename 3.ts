const processAngleBrackets = (str: string): string => {
    let missedClosing = 0
    let missedOpening = 0
    for (const char of str) {
      if (char === '>') {
         if (missedClosing === 0) {
            missedOpening ++
         } else {
            missedClosing --
         };
      } else {
         missedClosing ++
      };
    };
    const leadingTags = '<'.repeat(missedOpening)
    const trailingTags = '>'.repeat(missedClosing)
    return leadingTags + str + trailingTags
}
const resultBracket = processAngleBrackets('><<><');
console.log(`Output 1: ${resultBracket}`);