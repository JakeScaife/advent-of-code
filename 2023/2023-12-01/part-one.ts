import { Input } from "../../shared/input";

const input = await Input.readLines();

function fetchCalibration(line: string): number {
    const digits = [...line].map(Number).filter(x => x);
    return digits[0] * 10 + digits[digits.length - 1];
}

const calibrations = input.map(fetchCalibration);
const result = calibrations.reduce((a, x) => a + x);

console.log(`2023-12-01 Part One: ${result}`);