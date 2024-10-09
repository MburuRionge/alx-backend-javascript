// Checks if all elements of an array are present in a set
export default function hasValuesFromArray(set, arr) {
  let isPresent = false;

  for (const i of arr) {
    isPresent = set.has(i);

    if (!isPresent) {
      return false;
    }
  }

  return true;
}
