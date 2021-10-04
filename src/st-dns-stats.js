import { NotImplementedError } from "../extensions/index.js";

export default function getDNSStats(domains) {
  var newArr = [];
  var domainsArr = [];
  var result = {};

  for (var i = 0; i < domains.length; i++)
    newArr.push(domains[i].split(".").reverse());

  for (var i = 0; i < newArr.length; i++) {
    var str = "";
    for (var j = 0; j < newArr[i].length; j++) {
      str += "." + newArr[i][j];
      domainsArr.push(str);
    }
  }

  domainsArr.forEach((item) => {
    result[item] = (result[item] || 0) + 1;
  });

  return result;
}
