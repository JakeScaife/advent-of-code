import { Input } from "../../shared/input";

const input = await Input.readLines();

function fetchCalibration(line: string): number {
    const parsed = [...line].map(x => Number.parseInt(x));
    const digits = parsed.filter(x => !Number.isNaN(x));
    return digits[0] * 10 + digits[digits.length - 1];
}

const calibrations = input.map(fetchCalibration);
const result = calibrations.reduce((a, x) => a + x);

console.log(`2023-12-01 Part One: ${result}`);