import { NotImplementedError } from "../extensions/index.js";

export default function getCommonCharacterCount(s1, s2) {
  var arrUnique = [];
  var sum = 0;

  for (var i = 0; i < s1.length; i++)
    if (arrUnique.indexOf(s1[i]) == -1) arrUnique.push(s1[i]);

  for (var j = 0; j < arrUnique.length; j++) {
    var regExp = new RegExp(arrUnique[j], "g");
    var numberSymS1 = s1.match(regExp);
    var numberSymS2 = s2.match(regExp);

    if (!numberSymS1 || !numberSymS2) continue;
    else {
      numberSymS1 = numberSymS1.length;
      numberSymS2 = numberSymS2.length;
      sum += numberSymS1 >= numberSymS2 ? numberSymS2 : numberSymS1;
    }
  }

  return sum;
}
