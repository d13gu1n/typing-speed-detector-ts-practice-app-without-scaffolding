const c = document.querySelector<HTMLDivElement>(".container");
const s = document.querySelector<HTMLInputElement>(".size");
const col = document.querySelector<HTMLInputElement>(".color");
const rBtn = document.querySelector<HTMLButtonElement>(".button");

if (!c || !s || !col || !rBtn) {
    throw new Error("Missing required DOM elements.");
}

let sz: number = parseInt(s.value);
let d: boolean = false;

function g(): void {
    c.style.setProperty("--size", sz.toString());
    c.innerHTML = "";

    for (let i; i < sz * sz; i++) {
        const b = document.createElement("div");
        b.classList.add("box");
        // TODO: Typing Speed Detector - Continue TS Code
    }
}