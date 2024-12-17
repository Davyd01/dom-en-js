let timeLeft = 85; 

const timerDisplay = document.getElementById("timer");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60); 
  const secs = seconds % 60; 
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startCountdown() {
  const timer = setInterval(() => {
    timerDisplay.textContent = formatTime(timeLeft); 
    
    if (timeLeft === 0) {
      clearInterval(timer); 
      alert("Час вийшов!");
    }
    
    timeLeft--; 
  }, 1000);
}

startCountdown();
