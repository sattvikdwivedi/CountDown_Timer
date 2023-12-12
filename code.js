let countdown;
let scdleft;
let inputValue;
let pause = true;
let minutesInput; 

function togglePlayPause() {
  if (pause) {
    startTimer();
  } else {
    pauseTimer();
  }

  updateState();
}

function startTimer() {
  minutesInput = document.querySelector('#minutes');
  inputValue = minutesInput.value; 
  scdleft = parseInt(inputValue, 10) * 60;
  if (countdown) {
    clearInterval(countdown);
  }

  display(scdleft);

  countdown = setInterval(() => {
    if (!pause) {
      if (scdleft > 0) {
        scdleft = scdleft - 1;
        display(scdleft);
      }
      if (scdleft === 0) {
        clearInterval(countdown);
      }
    }
  }, 1000);

  pause = false;
  document.querySelector('#resetBtn').disabled = false;
  minutesInput.addEventListener('input', handleInputChange);
}

function pauseTimer() {
  pause = true;
  clearInterval(countdown);
}

function display(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  document.querySelector('#timer').innerText = display;
}

function updateState() {
  const playPauseBtn = document.querySelector('#playPauseBtn');
  playPauseBtn.innerHTML = pause ? '<i class="ri-play-fill"></i>' : '<i class="ri-pause-line"></i>';
}

function resetTimer() {
  clearInterval(countdown);
  document.querySelector('#timer').innerText = '00:00:00';
  document.querySelector('#resetBtn').disabled = true;
  pause = true;
  updateState();
  minutesInput.removeEventListener('input', handleInputChange);
}

function handleInputChange() {
  if (!pause && minutesInput.value !== inputValue) {
    clearInterval(countdown);
    document.querySelector('#timer').innerText = '00:00:00';
  }
}