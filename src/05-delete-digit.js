/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  let index;
  let res = array[0];
  for (let i = 0; i < array.length; i++) {
    if (res >= array[i]) {
      res = array[i];
      index = i;
    }
  }
  array.splice(index, 1);
  const str = array.join('');
  return parseInt(str, 10);
}

module.exports = deleteDigit;
