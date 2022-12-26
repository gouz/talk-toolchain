function gamepad() {
  window.addEventListener("gamepadconnected", function () {
    // console.log("connected");
    setInterval(gamepadTrigger, 300);
  });
}

function gamepadTrigger() {
  for (const gamepad of navigator.getGamepads()) {
    if (!gamepad) continue;
    for (const [index, axis] of gamepad.axes.entries()) {
      if (0 == index) {
        if (-1 == axis) {
          // console.log("left");
        } else if (1 == axis) {
          // console.log("right");
        }
      } else if (1 == index) {
        if (-1 == axis) {
          // console.log("up");
        } else if (1 == axis) {
          // console.log("down");
        }
      }
    }
    for (const [index, button] of gamepad.buttons.entries()) {
      if (button.pressed) {
        // console.log(button, index);
        if (12 == index) Reveal.up(); // ^
        else if (13 == index) Reveal.down(); // v
        else if (15 == index) Reveal.right(); // ->
        else if (14 == index) Reveal.left(); // <-
        else if (1 == index) Reveal.next(); // A
        else if (0 == index) Reveal.prev(); // B
        else if (6 == index) Reveal.next(); // L2
        else if (7 == index) Reveal.prev(); // R2
      }
    }
  }
}

gamepad();
