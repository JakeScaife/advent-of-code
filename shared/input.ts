export namespace Input {

    export async function readLines() {
        const file = Bun.file("./input.txt");
        const text = await file.text();
        return text.split('\n');
    }

}