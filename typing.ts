const txt = document.getElementById("txt") as HTMLElement;
const inp = document.getElementById("inp") as HTMLInputElement;
const tm = document.getElementById("tm") as HTMLElement;
const wpm = document.getElementById("wpm") as HTMLElement;
const startBtn = document.getElementById("start") as HTMLButtonElement;
let time: number = 0;
let timer: NodeJS.Timeout = null;
let isRunning: boolean = false;
const sampleText: string = "The quick brown fox jumps over the lazy dog";
function startTest(): void {
    clearInterval(timer);
    isRunning = true;
    time = 0;
    tm.textContent = "Time: 0s";
    wpm.textContent = "WPM: 0";
    inp.value = "";
    inp.disabled = false;
    inp.focus();
    txt.textContent = sampleText;
    timer = setInterval(() => {
        time++;
        tm.textContent = `Time: ${time}s`;
        calculateWPM();
    }, 1000);
}

function calculateWPM(): void {
    let wordsTyped = inp.value.trim().split(/\s+/).length;
    let wordsPerMinute = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
    wpm.textContent = `WPM: ${wordsPerMinute}`;
}

inp.addEventListener("input", () => {
    calculateWPM();
    if (inp.value.toLowerCase().replace(/\s+/g, " ").trim() === sampleText.toLowerCase().replace(/\s+/g, " ").trim()) {
        clearInterval(timer);
        isRunning = false;
        inp.disabled = true;
        wpm.textContent = `WPM: ${Math.round((sampleText.split(" ").length / time) * 60)}`;
        alert(`Test Completed! Your WPM: ${wpm.textContent.split(" ")[1]}`);
    }
});

startBtn.addEventListener("click", startTest);