const parallax = (layer, distance, speed) => {
  const item = document.querySelector(layer);

  item.style.transform = `translateY(${-distance*speed}px)`;
}
const hrparallax = (layer, distance, speed) => {
  const item = document.querySelector(layer);

  item.style.transform = `translateX(${-distance*speed}px)`;
}
document.addEventListener('scroll', () => {
  parallax('.layer-1', window.scrollX, 0.5);
  parallax('.layer-2', window.scrollX, -0.5);
  hrparallax('.layer-4', window.scrollX, -0.5);
  hrparallax('.layer-5', window.scrollX, 0.5);
});