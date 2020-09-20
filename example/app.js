const parallax = (element, distance, speed) => {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${-distance*speed}px)`;
}
 
document.addEventListener('scroll', () => {
  parallax('.layer-1', window.scrollY, 0.5);
  parallax('.layer-2', window.scrollY, -0.5);
});