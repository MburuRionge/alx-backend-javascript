export default function cleanSet(set, startString) {
  const newString = [];
  const len = startString.length;

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const word of set) {
    // check if word starts with startString
    if (word && word.startsWith(startString)) {
      newString.push(word.slice(len));
    }
  }

  return newString.join('-');
}
