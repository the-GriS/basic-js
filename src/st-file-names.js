import { NotImplementedError } from "../extensions/index.js";

export default function renameFiles(names) {
  var alreadyProcessed = [];
  var result = [];
  var length = names.length;

  for (var i = 0; i < length; i++) {
    var currItem = names.shift();
    if (
      alreadyProcessed.indexOf(currItem) == -1 &&
      result.indexOf(currItem) == -1
    ) {
      alreadyProcessed.push(currItem);
      result.push(currItem);
    } else if (alreadyProcessed.indexOf(currItem) != -1) {
      alreadyProcessed.push(currItem);
      var count = 0;
      alreadyProcessed.forEach((item) => {
        if (item == currItem) count++;
      });
      result.push(currItem + "(" + (count - 1) + ")");
    } else {
      alreadyProcessed.push(currItem);
      result.push(currItem + "(1)");
    }
  }

  return result;
}
