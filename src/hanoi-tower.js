import { NotImplementedError } from "../extensions/index.js";

export default function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1; // минимальное число ходов - 2^n − 1, где n — число дисков(discNumber)
  const seconds = Math.floor(turns / (turnsSpeed / 3600)); //3600 сек = 1 час
  return { turns, seconds };
}
