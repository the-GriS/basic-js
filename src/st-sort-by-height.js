import { NotImplementedError } from "../extensions/index.js";

export default function sortByHeight(arr) {
  var arrSort = arr.slice().sort((a, b) => {
    return a - b;
  });
  var lastInd = arrSort.lastIndexOf(-1);
  if (lastInd == -1) return arrSort;

  var resArr = [];

  arrSort.splice(0, lastInd + 1);
  for (var i = 0; i < arr.length; i++)
    if (arr[i] == -1) resArr.push(arr[i]);
    else {
      resArr.push(arrSort.shift());
    }

  return resArr;
}
