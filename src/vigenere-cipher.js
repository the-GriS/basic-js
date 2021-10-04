import { NotImplementedError } from "../extensions/index.js";

export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key, str = "", x = 0) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        str += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(x % key.length) - 130) %
            26) +
            65
        );
        x++;
      } else str += message[i];
    }
    return this.direct ? str : str.split("").reverse().join("");
  }

  decrypt(message, key, str = "", x = 0) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        str += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(x % key.length)) % 26) +
            65
        );
        x++;
      } else str += message[i];
    }
    return this.direct ? str : str.split("").reverse().join("");
  }
}
