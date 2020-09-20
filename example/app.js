const parallax = (element, distance, speed) => {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${-distance*speed}px)`;
}
 
document.addEventListener('scroll', () => {
  parallax('.layer-1', window.scrollY, 0.5);
  parallax('.layer-2', window.scrollY, -0.4);
  parallax('.layer-4', -window.scrollY, 0.7);
  parallax('.layer-5', -window.scrollY, 0.6);
});