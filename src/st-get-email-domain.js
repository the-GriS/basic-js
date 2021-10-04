import { NotImplementedError } from "../extensions/index.js";

export default function getEmailDomain(email) {
  var index = email.lastIndexOf("@");

  return email.substring(index + 1);
}
