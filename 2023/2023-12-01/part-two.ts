import { Input } from "../../shared/input";

const input = await Input.readLines();

const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const pattern = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

function fetchNumericMatches(input: string): Array<string> {
    const matches = input.matchAll(pattern);
    return [...matches].map(x => x[1]);
}

function fetchNumberFromMatch(word: string): number {
    return Number(word) ? Number(word) : numbers.indexOf(word) + 1;
}

function fetchCalibration(line: string): number {
    const matches = fetchNumericMatches(line);
    const numbers = matches.map(fetchNumberFromMatch);
    return numbers[0] * 10 + numbers[numbers.length - 1];
}

const calibrations = input.map(fetchCalibration);
const result = calibrations.reduce((a, x) => a + x);

console.log(`2023-12-01 Part Two: ${result}`)