/* eslint-disable no-plusplus */
const SPACE = ' ';
const OPEN_BRACKET = '{';
const CLOSE_BRACKET = '}';
const COLON = ':';

export function handlePrettify(query: string) {
  let openBracketCount = 0;
  let prettyQuery = '';

  if (query) {
    const queryString = query.trim().replace(/(\r\n|\n|\r)/gm, ''); // remove line breaks

    for (let i = 0; i < queryString.length; i++) {
      switch (queryString[i]) {
        case OPEN_BRACKET: {
          if (queryString[i + 1] === SPACE) {
            prettyQuery += `${queryString[i]}`;
            openBracketCount++;
          } else {
            openBracketCount++;
            prettyQuery += `${queryString[i]}\n`;
            prettyQuery += SPACE.repeat(openBracketCount * 2);
          }

          break;
        }

        case CLOSE_BRACKET: {
          prettyQuery += `\n${SPACE.repeat(openBracketCount * 2 - 2)}`;
          openBracketCount--;
          prettyQuery += queryString[i];

          break;
        }

        case SPACE: {
          if (
            queryString[i + 1] !== CLOSE_BRACKET &&
            queryString[i + 1] !== SPACE &&
            queryString[i + 1] !== OPEN_BRACKET
          ) {
            prettyQuery += `${queryString[i]}\n`;
            prettyQuery += SPACE.repeat(openBracketCount * 2);
          }

          if (queryString[i + 1] === OPEN_BRACKET) {
            prettyQuery += queryString[i];
          }

          break;
        }

        case COLON: {
          if (queryString[i + 1] === SPACE) {
            prettyQuery += queryString[i];
            i++;
          } else {
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
