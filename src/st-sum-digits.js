import { NotImplementedError } from "../extensions/index.js";

export default function getSumOfDigits(n) {
  if (n >= 0 && n <= 9) return n;

  var sum = 0;
  var strN = String(n);
  for (var i = 0; i < strN.length; i++) sum += Number(strN[i]);
  return getSumOfDigits(sum);
}
