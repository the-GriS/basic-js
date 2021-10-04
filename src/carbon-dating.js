import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  return typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
    ? false
    : Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
}
