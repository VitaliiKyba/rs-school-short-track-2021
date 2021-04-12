/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *npm run test ./test/name_test.js
 * The result should be 9
 */
function getMatrixElementsSum(/*  matrix  */) {
  throw new Error('Not implemented');
  // const rows = matrix[0].length;
  // let sum = 0;
  // for (let i = 0; i < rows; i++) {
  //   for (let y = 0; y < matrix.length; y++) {
  // sum += matrix[i][y];
  //   }
  // }
  // console.log(sum);
}

module.exports = getMatrixElementsSum;
// function findColumnsWithZero(matrix) {
//   console.log('\nFind columns with 0:');
//   let columnsWithZeroIdx = [];
//   let columnCount = matrix[0].length;
//   for (let i = 0; i < columnCount; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       if (matrix[j][i] === 0) {
//         columnsWithZeroIdx.push(i);
//         break;
//       }
//     }
//   }
//   console.log('  result indexes -', columnsWithZeroIdx);
// }
