const changeBG = (event) => {
  const $viewport = document.querySelector(".reveal-viewport");
  $viewport.className = "reveal-viewport";
  event.currentSlide.classList.forEach((element) => {
    if (element.match(/color-[0-9]/g)) {
      $viewport.classList.add(element);
    }
  });
};

Reveal.on("ready", (event) => {
  changeBG(event);
});

Reveal.on("slidechanged", (event) => {
  changeBG(event);
});
