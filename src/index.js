const startButton = document.querySelectorAll("button")[0];
const pauseButton = document.querySelectorAll("button")[1];
const resetButton = document.querySelectorAll("button")[2];
let percent = 0,
  animateHandler,
  gap = 100;
reset();

document.addEventListener("click", function (event) {
  switch (event.target) {
    case startButton:
      start();
      break;

    case pauseButton:
      pause();
      break;

    case resetButton:
      reset();
      break;
  }
});

function progress(number) {
  if (percent < number && percent < 100) {
    percent += 1;
    document.documentElement.style.setProperty("--percent", percent);
    animateHandler = requestAnimationFrame(() => progress(number));
  }
}

function start() {
  //   progress((gap += 20));
  progress(100);
}

function pause() {
  cancelAnimationFrame(animateHandler);
}

function reset() {
  percent = 0;
  gap = 0;
  document.documentElement.style.setProperty("--percent", percent);
  animateHandler = undefined;
}
