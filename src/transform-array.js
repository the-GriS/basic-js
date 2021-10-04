import { NotImplementedError } from "../extensions/index.js";

export default function transform(arr) {
  if (!Array.isArray(arr))
    throw Error(`'arr' parameter must be an instance of the Array!`);
  let param = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++;
    } else if (arr[i] === "--discard-prev" && arr[i - 2] !== "--discard-next") {
      res.pop();
    } else if (arr[i] === "--double-next" && arr[i + 1] !== undefined) {
      res.push(arr[i + 1]);
    } else if (
      arr[i] === "--double-prev" &&
      arr[i - 1] !== undefined &&
      arr[i - 2] !== "--discard-next"
    ) {
      res.push(arr[i - 1]);
    } else if (!param.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
