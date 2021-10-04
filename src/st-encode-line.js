import { NotImplementedError } from "../extensions/index.js";

export default function encodeLine(str) {
  var resStr = "";
  var symbol = "";
  var symCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (symbol == str[i]) symCount++;
    else if (symbol == "") {
      symbol = str[i];
      symCount++;
    } else {
      if (symCount > 1) resStr += symCount + symbol;
      else resStr += symbol;
      symbol = str[i];
      symCount = 1;
    }
  }
  if (symCount > 1) resStr += symCount + symbol;
  else resStr += symbol;

  return resStr;
}
