let green = document.querySelector(".green");

let greenAnimation = green.animate(
  [{ transform: "translateY(-2em)" }, { transform: "translateY(2em)" }],
  {
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
  }
);

let blue = document.querySelector(".blue");

let blueAnimation = blue.animate(
  [{ transform: "translateY(-2em)" }, { transform: "translateY(2em)" }],
  {
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
    delay: 100
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
  greenAnimation.play();
  blueAnimation.play();
  paused = false;
  pauseButton.innerText = "Pause";
}

function pause() {
  greenAnimation.pause();
  blueAnimation.pause();
  paused = true;
  pauseButton.innerText = "Play";
}
