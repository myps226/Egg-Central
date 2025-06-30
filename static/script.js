let timer = null;

function startTimer() {
    if (timer !== null) return;

    const startButton = document.querySelector("button[onclick='startTimer()']");
    startButton.disabled = true;
    startButton.textContent = "⏳ Timing...";

    const minutes = parseInt(document.getElementById("eggType").value);
    let time = minutes * 60;
    const totalTime = time;
    const countdown = document.getElementById("countdown");
    const progressBar = document.getElementById("progressBar");

    // Initialize progress
    progressBar.style.width = '100%';
    progressBar.classList.remove('bg-success', 'animate-pulse');

    timer = setInterval(() => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        countdown.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;

        const progressPercent = (time / totalTime) * 100;
        progressBar.style.width = progressPercent + '%';

        time--;

        if (time < 0) {
            clearInterval(timer);
            timer = null;
            countdown.textContent = "🍳 Your egg is ready!";
            progressBar.style.width = '0%';
            progressBar.classList.add('bg-success', 'animate-pulse');
            startButton.disabled = false;
            startButton.textContent = "Start Timer Again";
        }
    }, 1000);
}
