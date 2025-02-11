document.addEventListener("DOMContentLoaded", function () {
    
    
    document.getElementById("add-task-btn").addEventListener("click", function () {
        const taskTitle = document.getElementById("task-title").value;
        const taskDate = document.getElementById("task-date").value;
        if (taskTitle.trim() !== "" && taskDate !== "") {
            const li = document.createElement("li");
            li.textContent = `${taskTitle} - Due: ${taskDate}`;
            document.getElementById("task-list").appendChild(li);
            document.getElementById("task-title").value = "";
            document.getElementById("task-date").value = "";
        }
    });
    let timer;
    let timeLeft = 1500; // 25 minutes
    const timerDisplay = document.getElementById("timer");

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    document.getElementById("start").addEventListener("click", function () {
        clearInterval(timer);
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(timer);
            }
        }, 1000);
    });
    document.getElementById("pause").addEventListener("click", function () {
        clearInterval(timer);
    });
    document.getElementById("reset").addEventListener("click", function () {
        clearInterval(timer);
        timeLeft = 1500;
        updateTimer();
    });
    updateTimer();

    document.getElementById("add-flashcard-btn").addEventListener("click", function () {
        const frontText = document.getElementById("flashcard-front").value;
        const backText = document.getElementById("flashcard-back").value;
        if (frontText.trim() !== "" && backText.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = `${frontText} - ${backText}`;
            document.getElementById("flashcard-list").appendChild(li);
            document.getElementById("flashcard-front").value = "";
            document.getElementById("flashcard-back").value = "";
        }
    });


});