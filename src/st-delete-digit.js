import { NotImplementedError } from "../extensions/index.js";

export default function deleteDigit(n) {
  var numbers = [];
  var str = String(n);

  for (var i = 0; i < str.length; i++) {
    var currStr = str.slice(0, i) + str.slice(i + 1);
    numbers.push(Number(currStr));
  }

  numbers.sort((a, b) => {
    return b - a;
  });
  return numbers[0];
}
