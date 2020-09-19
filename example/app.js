const parallax = (element, distance, speed) => {
  const item = document.querySelector(element);

  item.style.transform = `translateY(${distance*speed}px)`;
}

document.addEventListener('scroll', () => {
  parallax('.faster', -window.scrollY, 0.5);
  parallax('.slower', window.scrollY, 0.5);
});