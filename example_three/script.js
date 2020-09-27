const parallax = (layer, distance, speed) => {
  item = document.querySelector(layer)
  item.style.transform = `translate(${distance*speed}px, ${distance*1}px);`
}
document.addEventListener('scroll', () => {
  
    parallax('#up', window.scrollY, -0.7)
    parallax('.down', window.scrollY, 0.5)
})
