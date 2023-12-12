let countdown;
let scdleft;
let inputValue;
let pause = true;

function togglePlayPause() {

  if (pause) {
    startTimer();
  } else {
    pauseTimer();
  }

  UpdateState();
}

function startTimer() {
  const minutesInput = document.querySelector('#minutes').value;
  scdleft = parseInt(minutesInput, 10) * 60;
  if (countdown) {
    clearInterval(countdown);
  }

  display(scdleft);

  countdown = setInterval(() => {
    if (!pause) {
      if(scdleft>0){
        scdleft=scdleft-1;
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
function togglePlayPause() {

  if (pause) {
    startTimer();
  } else {
    pauseTimer();
  }

  UpdateState();
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

function UpdateState() {
  const playPauseBtn = document.querySelector('#playPauseBtn');
  playPauseBtn.innerHTML = pause ? '<i class="ri-play-fill"></i>' : '<i class="ri-pause-line"></i>';
}

function resetTimer() {
  clearInterval(countdown);
  document.querySelector('#timer').innerText = '00:00:00';
  document.querySelector('#resetBtn').disabled = true;
  pause = true;
  UpdateState();
  const minutesInput = document.querySelector('minutes');
  minutesInput.removeEventListener('#input', handleInputChange);
}

function handleInputChange() {
  const minutesInput = document.querySelector('#minutes');
  if (!pause && minutesInput.value !== inputValue) {
    clearInterval(countdown);
    document.querySelector('#timer').innerText = '00:00:00';
  }
}