import { NotImplementedError } from "../extensions/index.js";

export default function isMAC48Address(n) {
  return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(n);
}
