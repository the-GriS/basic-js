import { NotImplementedError } from "../extensions/index.js";

function isMineOrNot(matrix, i, j) {
  if (
    typeof matrix[i] == "undefined" ||
    typeof matrix[i][j] == "undefined" ||
    !matrix[i][j]
  )
    return 0;
  return 1;
}

export default function minesweeper(matrix) {
  var resArr = [];
  for (var i = 0; i < matrix.length; i++) {
    var currRow = [];
    var bombs = 0;
    for (var j = 0; j < matrix[i].length; j++) {
      bombs =
        isMineOrNot(matrix, i - 1, j - 1) +
        isMineOrNot(matrix, i - 1, j) +
        isMineOrNot(matrix, i - 1, j + 1) +
        isMineOrNot(matrix, i, j - 1) +
        isMineOrNot(matrix, i, j + 1) +
        isMineOrNot(matrix, i + 1, j - 1) +
        isMineOrNot(matrix, i + 1, j) +
        isMineOrNot(matrix, i + 1, j + 1);
      currRow.push(bombs);
    }
    resArr.push(currRow);
  }

  return resArr;
}
