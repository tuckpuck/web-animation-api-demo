let green = document.querySelector(".green");

let animation = green.animate(
  [{ transform: "translateY(-2em)" }, { transform: "translateY(2em)" }],
  {
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
  }
);

let pauseButton = document.querySelector(".pause");
pauseButton.addEventListener("click", () => {
  togglePause();
});

let paused = false;

function togglePause() {
  paused ? play() : pause();
}

function play() {
  animation.play();
  paused = false;
  pauseButton.innerText = "Pause";
}

function pause() {
  animation.pause();
  paused = true;
  pauseButton.innerText = "Play";
}
