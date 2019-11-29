let green = document.querySelector(".green");

green.animate(
  [{ transform: "translateY(-2em)" }, { transform: "translateY(2em)" }],
  {
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
  }
);
