/* eslint-disable no-plusplus */
export function handlePrettify(query: string) {
  let openBracketCount = 0;
  let prettyQuery = '';

  if (query) {
    const queryString = query.trim();

    for (let i = 0; i < queryString.length; i++) {
      switch (queryString[i]) {
        case '{': {
          openBracketCount++;
          prettyQuery += `${queryString[i]}\n`;
          prettyQuery += ' '.repeat(openBracketCount * 2);
          break;
        }

        case '}': {
          prettyQuery += `\n${' '.repeat(openBracketCount * 2 - 2)}`;
          openBracketCount--;
          prettyQuery += queryString[i];
          break;
        }

        case ' ': {
          if (
            queryString[i + 1] !== '}' &&
            queryString[i + 1] !== ' ' &&
            queryString[i + 1] !== '{'
          ) {
            prettyQuery += `${queryString[i]}\n`;
            prettyQuery += ' '.repeat(openBracketCount * 2);
          }

          if (queryString[i + 1] === '{') {
            prettyQuery += queryString[i];
          }
          break;
        }

        default: {
          prettyQuery += queryString[i];
          break;
        }
      }
    }
  }
  return prettyQuery;
}
