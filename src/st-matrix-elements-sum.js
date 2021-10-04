import { NotImplementedError } from "../extensions/index.js";

export default function getMatrixElementsSum(matrix) {
  var sum = 0;
  var coefficientArr = [];

  for (var j = 0; j < matrix[0].length; j++)
    if (matrix[0][j] == 0) coefficientArr.push(0);
    else {
      sum += matrix[0][j];
      coefficientArr.push(1);
    }

  for (var i = 1; i < matrix.length; i++)
    for (var j = 0; j < matrix[0].length; j++) {
      sum += coefficientArr[j] * matrix[i][j];
      if (matrix[i][j] == 0) coefficientArr[j] = 0;
    }

  return sum;
}
