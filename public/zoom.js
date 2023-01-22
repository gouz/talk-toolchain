window.isZoomed = false;
window.zoom = () => {
  if (window.isZoomed) {
    // unzoom
    document.body.style.transform = "";
  } else {
    // zoom
    const el = document.querySelector(".present [data-zoom]");
    if (el) {
      const pos = el.dataset.pos.split(",");
      const origin = `${pos[0]}px ${pos[1]}px`;
      const transform = `translate(-10px,-10px) scale(${el.dataset.zoom})`;

      document.body.style.transformOrigin = origin;
      document.body.style.transform = transform;
    }
  }
  window.isZoomed = !window.isZoomed;
};
